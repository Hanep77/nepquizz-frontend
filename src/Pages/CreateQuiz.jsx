import { useEffect, useState } from "react"
import axiosClient from "../axios"
import { useNavigate } from "react-router-dom"

export default function CreateQuiz() {
    const [questions, setQuestions] = useState([{ index: 1, content: "", answers: [] }])
    const [categories, setCategories] = useState([])
    const [difficulities, setDifficulities] = useState([])
    const navigate = useNavigate()

    const handleAddQuestionNumber = () => {
        setQuestions([...questions, { index: questions.length + 1, content: "", answers: [] }])
    }

    const handleReduceQuestionNumber = () => {
        if (questions.length <= 1) return
        setQuestions(questions.slice(0, questions.length - 1))
    }

    useEffect(() => {
        axiosClient.get('/categories').then(response => setCategories(response.data))
        axiosClient.get('/difficulities').then(response => setDifficulities(response.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!confirm("are you sure?")) return

        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            category_id: e.target.category_id.value,
            difficulity_id: e.target.difficulity_id.value,
            questions: questions
        }

        axiosClient.post('/quizzes', data)
            .then(response => response.status === 201 && navigate('/'))
            .catch(error => error.response.status == 422 && alert("failed to create quiz. make sure each column is filled in"))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="title">Quiz Title</label>
                <input type="text" id="title" className="bg-slate-700 h-8 px-2 rounded w-full outline-none" name="title" placeholder="title" />
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="description">Description</label>
                <textarea id="description" className="bg-slate-700 px-2 py-1 rounded w-full outline-none" name="description" placeholder="description" />
            </div>
            <div className="mb-3 flex flex-col sm:flex-row gap-3">
                <div className="flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-start">
                    <label htmlFor="numberOfQuestion">Number of Question</label>
                    <div className="flex gap-1">
                        <input type="number" id="numberOfQuestion" className="bg-slate-700 h-8 px-2 rounded w-20 outline-none" name="numberOfQuestion" value={questions.length} readOnly />
                        <button type="button" className="h-8 w-8 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded" onClick={handleAddQuestionNumber}>+</button>
                        <button type="button" className="h-8 w-8 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 rounded" onClick={handleReduceQuestionNumber}>-</button>
                    </div>
                </div>
                <div className="flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-start">
                    <label htmlFor="category">Category</label>
                    <select name={"category_id"} id={"category_id"} className="bg-slate-700 px-2 border-none h-8 outline-none rounded border border-slate-500">
                        {categories?.map(value => <option key={value.slug} value={value.id}>{value.title}</option>)}
                    </select>
                </div>
                <div className="flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-start">
                    <label htmlFor="difficulity">Difficulity</label>
                    <select name={"difficulity_id"} id={"difficulity_id"} className="bg-slate-700 px-2 border-none h-8 outline-none rounded border border-slate-500">
                        {difficulities?.map(value => <option key={value.slug} value={value.id}>{value.title}</option>)}
                    </select>
                </div>
            </div>
            {questions.map(question => <Question key={question.index} question={question} questions={questions} setQuestions={setQuestions} />)}
            <div className="mb-3">
                <button className="bg-green-600 hover:bg-green-500 h-8 px-5 rounded">Save</button>
            </div>
        </form>
    )
}

function Question({ question, questions, setQuestions }) {
    const [answers, setAnswers] = useState([{ index: 1, content: "", is_correct: true }, { index: 2, content: "", is_correct: false }, { index: 3, content: "", is_correct: false }, { index: 4, content: "", is_correct: false }])

    useEffect(() => {
        setQuestions(questions.map(qst => {
            if (qst.index == question.index) {
                qst.answers = answers
            }
            return qst
        }))
    }, [answers])

    const handleAddAnswer = () => {
        setAnswers([...answers, { index: answers.length + 1, content: "", is_correct: false }])
    }

    const handleReduceAnswer = () => {
        if (answers.length <= 1) return
        setAnswers(answers.slice(0, answers.length - 1))
    }

    const handleCorrectAnswer = (e) => {
        setAnswers(answers.map(answer => {
            answer.is_correct = answer.index == e.target.value
            return answer
        }))
    }

    const handleChangeAnswer = (e) => {
        setAnswers(answers.map(answer => {
            if (answer.index == e.target.dataset.index) {
                answer.content = e.target.value
            }
            return answer
        }))
    }

    const handleQuestionTitle = (e) => {
        setQuestions(questions.map(qst => {
            if (qst.index == question.index) {
                qst.content = e.target.value
            }
            return qst
        }))
    }

    return (
        <div className="bg-slate-700 p-4 rounded mb-3">
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="question">Question</label>
                <textarea type="text" id="question" name="question" onKeyUp={handleQuestionTitle} placeholder="Question..." className="w-full bg-transparent backdrop-brightness-125 px-2 py-1 rounded outline-none" rows={3} />
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="answer">answer</label>
                <div className="flex flex-col gap-3">
                    {answers.map(answer => (
                        <input onChange={handleChangeAnswer} key={answer.index} data-index={answer.index} type="text" id="answer" name="answer" placeholder={answer.index + ". answer..."} className="w-full bg-transparent backdrop-brightness-125 p-2 rounded outline-none" autoComplete="off" />
                    ))}
                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" onClick={handleAddAnswer} className="w-full bg-transparent backdrop-brightness-125 hover:bg-slate-600 active:bg-slate-500 p-2 rounded outline-none">+ Add Answer</button>
                        <button type="button" onClick={handleReduceAnswer} className="w-full bg-transparent backdrop-brightness-125 hover:bg-slate-600 active:bg-slate-500 p-2 rounded outline-none">- Reduce Answer</button>
                    </div>
                </div>
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="correct_answer">Correct Answer</label>
                <select name="correct_answer" id="correct_answer" onChange={handleCorrectAnswer} className="bg-transparent backdrop-brightness-125 outline-none p-2 rounded">
                    {answers.map(answer => (
                        <option key={answer.index} className="bg-slate-600" value={answer.index}>{answer.index + " - " + answer.content}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
