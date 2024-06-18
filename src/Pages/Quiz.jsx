import { useEffect, useState } from "react"
import axiosClient from "../axios"
import { useLocation } from "react-router-dom"

export default function Quiz() {
    const [answeredQuestion, setAnsweredQuestion] = useState([])
    const [data, setData] = useState([])
    const { pathname } = useLocation()
    const gameSessionId = pathname.split('/')[2]

    useEffect(() => {
        axiosClient.get('/get-game/' + gameSessionId).then(response => {
            setData(response.data)
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