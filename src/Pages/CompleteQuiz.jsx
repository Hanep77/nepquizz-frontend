import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axiosClient from "../axios"
import { StateContext } from "../context/ContextProvider"

export default function CompleteQuiz() {
    const [data, setData] = useState({})
    const { pathname } = useLocation()
    const game_session_id = pathname.split('/')[3]
    const [userAnswers, setUserAnswers] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axiosClient.get('/get-game/' + game_session_id).then(response => {
            !response.data.finished_at && navigate('/')
            setUserAnswers(response.data.user_answers)
            const rightAnswer = response.data.user_answers.filter(answer => answer.answer.is_correct)
            setCorrectAnswer(rightAnswer)
            setData(response.data)
        })
    }, [])

    return (
        <div>
            <div className="bg-slate-700 p-4 rounded mb-3">
                <h2 className="text-xl md:text-2xl font-semibold mb-3">{data?.quiz?.title}</h2>
                <div className="mb-3 text-slate-300 font-light">
                    <p>difficulity : <span className={`${data?.quiz?.difficulity?.slug == 'easy' && 'text-green-500'} ${data?.quiz?.difficulity?.slug == 'medium' && 'text-yellow-500'} ${data?.quiz?.difficulity?.slug == 'hard' && 'text-red-500'} font-medium`}>{data?.quiz?.difficulity?.title}</span></p>
                    <p>category : <span className="text-blue-400 font-medium">{data?.quiz?.category?.title}</span></p>
                    <p>author : <Link to={'/users/' + data?.quiz?.author?.id} className="text-slate-200 font-medium">{data?.quiz?.author?.name}</Link></p>
                    <p>number of questions : <span className="text-slate-200 font-medium">{data?.quiz?.questions?.length}</span></p>
                    <p>correct answers : <span className="text-green-500 font-medium">{correctAnswer?.length}</span></p>
                </div>
                <p className="mb-3 text-slate-300 font-light">{data?.quiz?.description}</p>
            </div>
            <div>
                {data?.quiz?.questions?.map(question => (
                    <div key={question.id}
                        className={`mb-3 bg-slate-700 p-4 rounded`}>
                        <h3 className="mb-3 text-lg font-medium">{question.content}</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {question?.answers?.map(answer => (
                                <AnswerButton key={answer.id} answer={answer} userAnswer={userAnswers.find(answer => answer.question_id == question.id)} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

function AnswerButton({ answer, userAnswer }) {
    let buttonColor = "bg-transparent"

    if (userAnswer?.answer?.id == answer?.id) {
        buttonColor = "bg-slate-400"
    }

    if (answer.is_correct) {
        buttonColor += " border-b-2 border-green-600"
    }

    return (
        <button key={answer.id} type="button"
            className={`backdrop-brightness-125 ${buttonColor} py-2 px-4 rounded`}>
            {answer.content}
        </button>
    )
}