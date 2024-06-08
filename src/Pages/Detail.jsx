import { Link } from "react-router-dom"

export default function Detail() {
    const data = {
        id: 1,
        title: "javascript quizz for beginner",
        description: "you can test your javascript knowledge by attempting to this quizz",
        category: "programming",
        difficulity: "easy",
        author: {
            id: 1,
            name: "steve",
            email: "steve@gmail.com"
        },
        questions: [
            {
                question: "what is the output of this program",
                answers: [
                    {
                        answer: "null",
                        is_correct_answer: false
                    },
                    {
                        answer: "1",
                        is_correct_answer: false
                    },
                    {
                        answer: "undefined",
                        is_correct_answer: true
                    },
                    {
                        answer: "true",
                        is_correct_answer: false
                    }
                ]
            },
            {
                question: "what is the output of this program",
                answers: [
                    {
                        answer: "null",
                        is_correct_answer: false
                    },
                    {
                        answer: "1",
                        is_correct_answer: false
                    },
                    {
                        answer: "undefined",
                        is_correct_answer: true
                    },
                    {
                        answer: "true",
                        is_correct_answer: false
                    }
                ]
            },
            {
                question: "what is the output of this program",
                answers: [
                    {
                        answer: "null",
                        is_correct_answer: false
                    },
                    {
                        answer: "1",
                        is_correct_answer: false
                    },
                    {
                        answer: "undefined",
                        is_correct_answer: true
                    },
                    {
                        answer: "true",
                        is_correct_answer: false
                    }
                ]
            }
        ]
    }

    return (
        <div className="bg-slate-700 p-4 rounded">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{data.title}</h2>
            <div className="mb-3 text-slate-300 font-light">
                <p>difficulity : <span className={`${data.difficulity == 'easy' && 'text-green-500'} ${data.difficulity == 'medium' && 'text-yellow-500'} ${data.difficulity == 'hard' && 'text-red-500'} font-medium`}>{data.difficulity}</span></p>
                <p>category : <span className="text-blue-400 font-medium">{data.category}</span></p>
                <p>author : <Link to={'/users/' + data.author.id} className="text-slate-200 font-medium">{data.author.name}</Link></p>
                <p>number of questions : <span className="text-slate-200 font-medium">{data.questions.length}</span></p>
            </div>
            <p className="mb-3 text-slate-300 font-light">{data.description}</p>
            <div className="flex justify-end gap-2 text-white">
                <Link className="bg-green-600 hover:bg-green-500 w-20 py-1 rounded text-center">start quiz</Link>
                <button className="bg-slate-600 hover:bg-slate-500 w-20 py-1 rounded">share</button>
            </div>
        </div>
    )
}