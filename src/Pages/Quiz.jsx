import { useState } from "react"

export default function Quiz() {
    const [answeredQuestion, setAnsweredQuestion] = useState([])
    const [correctness, setCorrectness] = useState([])

    const data = {
        id: 1,
        title: "javascript quizz for beginner",
        description: "you can test your javascript knowledge by attempting to this quizz",
        category: "programming",
        difficulity: "easy",
        author: {
            id: 1,
            name: "steve",
            email: "steve@gmail.com"
        },
        questions: [
            {
                id: 1,
                question: "what is the output of this program",
                answers: [
                    {
                        answer: "null",
                        is_correct_answer: false
                    },
                    {
                        answer: "1",
                        is_correct_answer: false
                    },
                    {
                        answer: "undefined",
                        is_correct_answer: true
                    },
                    {
                        answer: "true",
                        is_correct_answer: false
                    }
                ]
            },
            {
                id: 2,
                question: "what is the output of this program",
                answers: [
                    {
                        answer: "null",
                        is_correct_answer: false
                    },
                    {
                        answer: "1",
                        is_correct_answer: false
                    },
                    {
                        answer: "undefined",
                        is_correct_answer: true
                    },
                    {
                        answer: "true",
                        is_correct_answer: false
                    }
                ]
            },
            {
                id: 3,
                question: "what is the output of this program",
                answers: [
                    {
                        answer: "null",
                        is_correct_answer: false
                    },
                    {
                        answer: "1",
                        is_correct_answer: false
                    },
                    {
                        answer: "undefined",
                        is_correct_answer: true
                    },
                    {
                        answer: "true",
                        is_correct_answer: false
                    }
                ]
            }
        ]
    }

    const handleAnswer = (question_id, is_correct) => {
        setAnsweredQuestion([...answeredQuestion, question_id])
        setCorrectness([...correctness, { question_id, is_correct }])
    }

    const isAlreadyAnswered = (question_id) => {
        if (answeredQuestion.length < 1) {
            return false
        }

        let result = false
        result = answeredQuestion.find(answered => answered == question_id)

        return result
    }

    const isCorrect = (question_id) => {
        const question = correctness.find(q => q.question_id == question_id)
        return question.is_correct
    }

    return (
        <div>
            {
                data.questions.map(question => (
                    <div key={question.id}
                        className={`mb-3 ${!isAlreadyAnswered(question.id) ? "bg-slate-700" : isCorrect(question.id) ? "bg-green-700 bg-opacity-30" : "bg-red-700 bg-opacity-30"} p-4 rounded`}>
                        <h3 className="mb-3 text-lg font-medium">{question.question}</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {question.answers.map(answer => (
                                <button key={answer.answer} type="button"
                                    onClick={() => handleAnswer(question.id, answer.is_correct_answer)}
                                    className="backdrop-brightness-125 hover:backdrop-brightness-150 py-2 px-4 rounded">{answer.answer}</button>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}