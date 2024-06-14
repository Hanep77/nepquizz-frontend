import { Link } from "react-router-dom";

export default function QuizzCard({ quiz }) {
    return (
        <div key={quiz.id} className="bg-slate-700 p-4 rounded flex flex-col justify-between" >
            <div className="mb-3">
                <div className="flex justify-between text-sm">
                    <p className="text-blue-400">{quiz.category.title}</p>
                    <p className={`${quiz.difficulity.slug == 'easy' && 'text-green-500'} ${quiz.difficulity.slug == 'medium' && 'text-yellow-500'} ${quiz.difficulity.slug == 'hard' && 'text-red-500'}`}>{quiz.difficulity.title}</p>
                </div>
                <h2 className="text-lg font-semibold">{quiz.title}</h2>
                <p className="text-slate-400 font-light">{quiz.description}</p>
            </div>
            <div className="flex justify-end gap-2 text-white">
                <Link to={'/quiz/detail/' + quiz.id} className="bg-green-600 hover:bg-green-500 w-14 py-1 rounded text-center">play</Link>
                <button className="bg-slate-600 hover:bg-slate-500 w-14 py-1 rounded">share</button>
            </div>
        </div>
    )
}