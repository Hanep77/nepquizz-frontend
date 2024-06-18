import { useEffect, useState } from "react"
import axiosClient from "../axios"
import { Link, useLocation } from "react-router-dom"

export default function Quiz() {
    const [answeredQuestion, setAnsweredQuestion] = useState([])
    const [data, setData] = useState([])
    const { pathname } = useLocation()
    const gameSessionId = pathname.split('/')[2]
    const [error, setError] = useState(null)

    useEffect(() => {
        axiosClient.get('/get-game/' + gameSessionId).then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error.response)
            setError({
                statusCode: error.response.status,
                message: error.response.data.message
            })
        })

        axiosClient.get('/get-user-answers/' + gameSessionId).then(response => {
            setAnsweredQuestion(response.data)
        })
    }, [])

    const handleAnswer = (answer_id) => {
        axiosClient.post('/user-answer', { answer_id, game_session_id: gameSessionId })
            .then(() => {
                axiosClient.get('/get-user-answers/' + gameSessionId).then(response => {
                    setAnsweredQuestion(response.data)
                })
            });
    }

    return (
        <div>
            {data?.questions?.map(question => (
                <div key={question.id}
                    className={`mb-3 bg-slate-700 p-4 rounded`}>
                    <h3 className="mb-3 text-lg font-medium">{question.content}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {question?.answers?.map(answer => (
                            <AnswerButton key={answer.id}
                                content={answer.content}
                                onClickAnswer={() => handleAnswer(answer.id)}
                                isSelected={answeredQuestion.some(ans => ans.answer_id == answer.id)} />
                        ))}
                    </div>
                </div>
            ))}
            {error && <ErrorMessage statusCode={error.statusCode} message={error.message} />}
        </div>
    )
}

function AnswerButton({ content, onClickAnswer, isSelected }) {
    return (
        <button type="button" onClick={onClickAnswer}
            className={`backdrop-brightness-125 ${isSelected && "bg-slate-400"} hover:backdrop-brightness-150 py-2 px-4 rounded`}>
            {content}
        </button>
    )
}

function ErrorMessage({ statusCode, message }) {
    return (
        <div className="text-center mt-32">
            <p>{message}</p>
            <h2 className="text-3xl font-medium mb-5">{statusCode}</h2>
            <Link to={'/'} className="p-2 bg-green-600 hover:bg-green-500 active:bg-green-400 rounded">back to home page</Link>
        </div>
    )
}