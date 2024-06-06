export default function QuizzCard({ quizz }) {
    return (
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
    )
}