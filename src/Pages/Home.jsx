import QuizzCard from "../components/QuizzCard"
import Search from "../components/Search"
import SortBy from "../components/SortBy"

const Home = () => {
    const data = [
        {
            id: 1,
            title: "javascript quizz for beginner",
            description: "you can test your javascript knowledge by attempting to this quizz",
            category: "programming",
            difficulity: "easy",
            author: {
                id: 1,
                name: "steve",
                email: "steve@gmail.com"
            }
        },
        {
            id: 2,
            title: "guess the player",
            description: "test your football knowledge",
            category: "sport",
            difficulity: "medium",
            author: {
                id: 1,
                name: "steve",
                email: "steve@gmail.com"
            }
        },
        {
            id: 3,
            title: "this math quizz make you sick",
            description: "you can test your math knowledge by attempting to this quizz",
            category: "math",
            difficulity: "hard",
            author: {
                id: 1,
                name: "steve",
                email: "steve@gmail.com"
            }
        }
    ]

    const categories = {
        title: "Categories",
        list: ["Programming", "Math", "Sport"]
    }

    const difficulities = {
        title: "Difficulity",
        list: ["Easy", "Medium", "Hard"]
    }

    return (
        <div>
            <Search />
            <div className="mb-3 sm:mb-5 flex gap-2">
                <SortBy title={categories.title} list={categories.list} />
                <SortBy title={difficulities.title} list={difficulities.list} />
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
                {data.map(quizz => (
                    <QuizzCard quizz={quizz} />
                ))}
            </div>
        </div >
    )
}

export default Home