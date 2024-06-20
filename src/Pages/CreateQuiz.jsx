import { useState } from "react"

export default function CreateQuiz() {
    const [questions, setQuestions] = useState([{ index: 1, content: "", answers: [] }])

    const handleAddQuestionNumber = () => {
        setQuestions([...questions, { index: questions.length + 1, content: "", answers: [] }])
    }

    const handleReduceQuestionNumber = () => {
        if (questions.length <= 1) return
        setQuestions(questions.slice(0, questions.length - 1))
    }

    return (
        <form action="">
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
                    <select name={"category"} id={"category_id"} className="bg-slate-700 px-2 border-none h-8 outline-none rounded border border-slate-500">
                        <option>{"title"}</option>
                        {/* {list?.map(value => <option key={value.slug} value={value.slug}>{value.title}</option>)} */}
                    </select>
                </div>
                <div className="flex sm:flex-col gap-2 sm:gap-1 items-center sm:items-start">
                    <label htmlFor="difficulity">Difficulity</label>
                    <select name={"difficulity"} id={"difficulity_id"} className="bg-slate-700 px-2 border-none h-8 outline-none rounded border border-slate-500">
                        <option>{"title"}</option>
                        {/* {list?.map(value => <option key={value.slug} value={value.slug}>{value.title}</option>)} */}
                    </select>
                </div>
            </div>
            {questions.map(question => <Question key={question.index} />)}
        </form>
    )
}

function Question() {
    const [answers, setAnswers] = useState([{ index: 1, content: "" }, { index: 2, content: "" }, { index: 3, content: "" }, { index: 4, content: "" }])

    const handleAddAnswer = () => {
        setAnswers([...answers, { index: answers.length + 1, content: "" }])
    }

    const handleReduceAnswer = () => {
        if (answers.length <= 1) return
        setAnswers(answers.slice(0, answers.length - 1))
    }

    return (
        <div className="bg-slate-700 p-4 rounded mb-3">
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="question">Question</label>
                <textarea type="text" id="question" name="question" placeholder="Question..." className="w-full bg-transparent backdrop-brightness-125 px-2 py-1 rounded outline-none" rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="mb-3 flex flex-col gap-1">
                    <label htmlFor="answer">Category</label>
                    <select name="right_answer" id="right_answer" className="bg-transparent backdrop-brightness-125 outline-none p-2 rounded">
                        <option value="1">Math</option>
                        <option value="2">Programming</option>
                        <option value="3">Sport</option>
                    </select>
                </div>
                <div className="mb-3 flex flex-col gap-1">
                    <label htmlFor="answer">Difficulity</label>
                    <select name="right_answer" id="right_answer" className="bg-transparent backdrop-brightness-125 outline-none p-2 rounded">
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="answer">answer</label>
                <div className="flex flex-col gap-3">
                    {answers.map(answer => (
                        <input key={answer.index} type="text" id="answer" name="answer" placeholder={answer.index + ". answer..."} className="w-full bg-transparent backdrop-brightness-125 p-2 rounded outline-none" />
                    ))}
                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" onClick={handleAddAnswer} className="w-full bg-transparent backdrop-brightness-125 hover:bg-slate-600 active:bg-slate-500 p-2 rounded outline-none">+ Add Answer</button>
                        <button type="button" onClick={handleReduceAnswer} className="w-full bg-transparent backdrop-brightness-125 hover:bg-slate-600 active:bg-slate-500 p-2 rounded outline-none">- Reduce Answer</button>
                    </div>
                </div>
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="answer">Right Answer</label>
                <select name="right_answer" id="right_answer" className="bg-transparent backdrop-brightness-125 outline-none p-2 rounded">
                    {answers.map(answer => (
                        <option key={answer.index} className="bg-slate-600" value={answer.index}>{answer.index + " - " + answer.content}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <button className="bg-green-600 hover:bg-green-500 h-8 px-5 rounded">Save</button>
            </div>
        </div>
    )
}