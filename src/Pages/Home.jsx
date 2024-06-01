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
            <form className="my-3 sm:my-5 flex justify-center">
                <input type="text" placeholder="Search quizz" className="w-full sm:w-96 bg-slate-700 border border-slate-500 focus:border-slate-200 h-8 rounded outline-none px-2" autoComplete="off" />
            </form>

            <div className="mb-3 sm:mb-5 flex gap-2">
                <select name="" id="" className="bg-slate-700 px-2 py-1 outline-none rounded border border-slate-500">
                    <option>All Category</option>
                    <option value="">Programming</option>
                    <option value="">Math</option>
                    <option value="">Sport</option>
                </select>
                <select name="" id="" className="bg-slate-700 px-2 py-1 outline-none rounded border border-slate-500">
                    <option>difficulity</option>
                    <option value="">Easy</option>
                    <option value="">Medium</option>
                    <option value="">Hard</option>
                </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
                {data.map(quizz => (
                    <div key={quizz.id} className="bg-slate-700 p-4 rounded flex flex-col justify-between" >
                        <div className="mb-3">
                            <div className="flex justify-between text-sm">
                                <p className="text-blue-400">{quizz.category}</p>
                                <p className={`${quizz.difficulity == 'easy' && 'text-green-500'} ${quizz.difficulity == 'medium' && 'text-yellow-500'} ${quizz.difficulity == 'hard' && 'text-red-500'}`}>{quizz.difficulity}</p>
                            </div>
                            <h2 className="text-lg font-semibold text-white">{quizz.title}</h2>
                            <p className="font-light">{quizz.description}</p>
                        </div>
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