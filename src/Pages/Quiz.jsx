import { useEffect, useState } from "react"
import axiosClient from "../axios"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Quiz() {
    const [answeredQuestion, setAnsweredQuestion] = useState([])
    const [data, setData] = useState([])
    const { pathname } = useLocation()
    const gameSessionId = pathname.split('/')[2]
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axiosClient.get('/get-game/' + gameSessionId).then(response => {
            response.data.finished_at && navigate('/')
            setData(response.data.quiz)
        }).catch(error => {
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

    const handleFinishQuiz = () => {
        const isComplete = confirm("are you sure?")
        if (!isComplete) {
            return
        }

        axiosClient.post('/end-game', { game_session_id: gameSessionId }).then(response => {
            navigate('/quiz/complete/' + response.data.id)
        })
    }

    return (
        <div>
            {data?.questions?.map(question => (
                <div key={question.id}
                    className={`mb-3 bg-slate-700 p-4 rounded`}>
                    <h3 className="mb-3 text-lg font-medium">{question.content}</h3>
                    <Answers question={question} onClickAnswer={handleAnswer} answeredQuestion={answeredQuestion} />
                </div>
            ))}
            {!error && (
                <div className="text-center bg-slate-700 p-4 rounded">
                    <p className="mb-3">Click the button below if you have completed the quiz</p>
                    <button onClick={handleFinishQuiz} className="h-8 px-2 bg-green-600 hover:bg-green-500 active:bg-green-400 rounded">Done</button>
                </div>
            )}
            {error && <ErrorMessage statusCode={error.statusCode} message={error.message} />}
        </div>
    )
}

export function Answers({ question, onClickAnswer, answeredQuestion }) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {question?.answers?.map(answer => (
                <button key={answer.id} type="button" onClick={() => onClickAnswer(answer.id)}
                    className={`backdrop-brightness-125 ${answeredQuestion.some(ans => ans.answer_id == answer.id) && "bg-slate-400"} hover:backdrop-brightness-150 py-2 px-4 rounded`}>
                    {answer.content}
                </button>
            ))}
        </div>
    )
}

function ErrorMessage({ statusCode, message }) {
    return (
        <div className="text-center mt-32">
            <p>{message}</p>
            <h2 className="text-3xl font-medium mb-5">{statusCode}</h2>
            <Link to='/' className="p-2 bg-green-600 hover:bg-green-500 active:bg-green-400 rounded">back to home page</Link>
        </div>
    )
}