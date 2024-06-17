import { Link } from "react-router-dom"
import QuizzCard from "../components/QuizzCard"
import Search from "../components/Search"
import SortBy from "../components/SortBy"
import { useEffect, useState } from "react"
import axiosClient from "../axios"

const Home = () => {
    const [quizzes, setQuizzes] = useState([])
    const [categories, setCategories] = useState([])
    const [difficulities, setDifficulities] = useState([])

    useEffect(() => {
        axiosClient.get('/quizzes').then(response => setQuizzes(response.data))
        axiosClient.get('/categories').then(response => setCategories(response.data))
        axiosClient.get('/difficulities').then(response => setDifficulities(response.data))
    }, [])

    return (
        <div>
            <Search />
            <form action="">
                <div className="mb-3 sm:mb-5 flex gap-2">
                    <SortBy title={"Categories"} name="categories" list={categories} />
                    <SortBy title={"Difficulities"} name="difficulities" list={difficulities} />
                </div>
            </form>
            <div className="mb-3 sm:mb-5">
                <Link to={'/quiz/create'} className="bg-green-600 hover:bg-green-500 p-2 rounded">Create New Quiz</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
                {quizzes.map(quiz => (
                    <QuizzCard key={quiz.id} quiz={quiz} />
                ))}
            </div>
        </div>
    )
}

export default Home