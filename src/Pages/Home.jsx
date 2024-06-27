import { useLocation } from "react-router-dom"
import QuizzCard from "../components/QuizzCard"
import Search from "../components/Search"
import SortBy from "../components/SortBy"
import { useEffect, useState } from "react"
import axiosClient from "../axios"

const Home = () => {
    const [quizzes, setQuizzes] = useState([])
    const [categories, setCategories] = useState([])
    const [difficulities, setDifficulities] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        axiosClient.get('/quizzes' + search).then(response => setQuizzes(response.data))
        axiosClient.get('/categories').then(response => setCategories(response.data))
        axiosClient.get('/difficulities').then(response => setDifficulities(response.data))
    }, [quizzes])

    const handleDeleteQuiz = (quiz_id) => {
        if (!confirm('are you sure?')) return
        axiosClient.delete(`/quizzes/${quiz_id}`)
            .then(response => {
                if (response.status == 200) {
                    quizzes.map(quiz => quiz.id !== quiz_id && quiz)
                    alert(response.data.message)
                }
            })
            .catch(error => alert(error.response.message))
    }

    return (
        <div>
            <Search />
            <form>
                <div className="mb-3 sm:mb-5 flex gap-2">
                    <SortBy title={"Categories"} name="category" list={categories} />
                    <SortBy title={"Difficulities"} name="difficulity" list={difficulities} />
                </div>
            </form>
            <div className="grid sm:grid-cols-2 gap-2">
                {quizzes.map(quiz => (
                    <QuizzCard key={quiz.id} quiz={quiz} onDeleteQuiz={handleDeleteQuiz} />
                ))}
            </div>
        </div>
    )
}

export default Home
