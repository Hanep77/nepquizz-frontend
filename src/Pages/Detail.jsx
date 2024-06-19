import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axiosClient from "../axios"
import { StateContext } from "../context/ContextProvider"

export default function Detail() {
    const [data, setData] = useState({})
    const { pathname } = useLocation()
    const quiz_id = pathname.split('/')[3]
    const navigate = useNavigate()
    const { currentUser } = useContext(StateContext)

    useEffect(() => {
        axiosClient.get('/quizzes/' + quiz_id).then(response => {
            setData(response.data)
        }).catch(error => error.response.status === 404 && navigate('/'))
    }, [])

    const handleStartGame = (quiz_id, game_session) => {
        if (game_session?.finished_at) {
            navigate('/quiz/complete/' + game_session.id)
        } else {
            axiosClient.post('/start-game', {
                user_id: currentUser.id,
                quiz_id
            }).then(response => {
                navigate('/quiz/' + response.data.id)
            })
        }
    }

    return (
        <div className="bg-slate-700 p-4 rounded">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{data.title}</h2>
            <div className="mb-3 text-slate-300 font-light">
                <p>difficulity : <span className={`${data?.difficulity?.slug == 'easy' && 'text-green-500'} ${data?.difficulity?.slug == 'medium' && 'text-yellow-500'} ${data?.difficulity?.slug == 'hard' && 'text-red-500'} font-medium`}>{data?.difficulity?.title}</span></p>
                <p>category : <span className="text-blue-400 font-medium">{data?.category?.title}</span></p>
                <p>author : <Link to={'/users/' + data?.author?.id} className="text-slate-200 font-medium">{data?.author?.name}</Link></p>
                <p>number of questions : <span className="text-slate-200 font-medium">{data?.questions?.length}</span></p>
            </div>
            <p className="mb-3 text-slate-300 font-light">{data.description}</p>
            <div className="flex justify-end gap-2 text-white">

                {/* Make the text and link on the buttons dynamic (start quiz, continue, and view stats) */}
                <button onClick={() => handleStartGame(data.id, data.game_session)} className="bg-green-600 hover:bg-green-500 w-24 py-1 rounded text-center">
                    {!data.game_session ? "start game" : data.game_session.finished_at ? "view stats" : "continue"}
                </button>
                <button className="bg-slate-600 hover:bg-slate-500 w-16 py-1 rounded">share</button>
            </div>
        </div>
    )
}