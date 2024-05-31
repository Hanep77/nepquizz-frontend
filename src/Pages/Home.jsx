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

    return (
        <div>
            <form className="my-5 flex justify-center">
                <input type="text" placeholder="Search quizz" className="w-80 bg-slate-700 border border-slate-500 focus:border-slate-200 h-8 rounded outline-none px-2" autoComplete="off" />
            </form>
            <div className="grid sm:grid-cols-2 gap-2">
                {data.map(quizz => (
                    <div key={quizz.id} className="bg-slate-700 p-4 rounded" >
                        <div className="flex justify-between text-sm">
                            <p className="text-blue-400">{quizz.category}</p>
                            <p className={`${quizz.difficulity == 'easy' && 'text-green-500'} ${quizz.difficulity == 'medium' && 'text-yellow-500'} ${quizz.difficulity == 'hard' && 'text-red-500'}`}>{quizz.difficulity}</p>
                        </div>
                        <h2 className="text-lg font-semibold text-white">{quizz.title}</h2>
                        <p className="font-light">{quizz.description}</p>
                        <div className="flex justify-end gap-2 text-white">
                            <button className="bg-green-600 hover:bg-green-500 w-14 py-1 rounded">play</button>
                            <button className="bg-slate-600 hover:bg-slate-500 w-14 py-1 rounded">share</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Home