import { useState } from "react"

export default function CreateQuiz() {
    const [answers, setAnswers] = useState([{ index: 1, content: "" }])

    const handleAddAnswer = () => {
        setAnswers([...answers, { index: answers.length + 1, content: "" }])
    }

    const handleReduceAnswer = () => {
        if (answers.length <= 1) return
        setAnswers(answers.slice(0, answers.length - 1))
    }

    return (
        <form action="">
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="question">Question</label>
                <textarea type="text" id="question" name="question" placeholder="Question..." className="w-full bg-slate-700 px-2 py-1 rounded outline-none" rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="mb-3 flex flex-col gap-1">
                    <label htmlFor="answer">Category</label>
                    <select name="right_answer" id="right_answer" className="bg-slate-700 outline-none p-2 rounded">
                        <option value="1">Math</option>
                        <option value="2">Programming</option>
                        <option value="3">Sport</option>
                    </select>
                </div>
                <div className="mb-3 flex flex-col gap-1">
                    <label htmlFor="answer">Difficulity</label>
                    <select name="right_answer" id="right_answer" className="bg-slate-700 outline-none p-2 rounded">
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="answer">answer</label>
                <div className="flex flex-col gap-3">
                    {answers.map(answer => (
                        <input key={answer.index} type="text" id="answer" name="answer" placeholder={answer.index + ". answer..."} className="w-full bg-slate-700 p-2 rounded outline-none" />
                    ))}
                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" onClick={handleAddAnswer} className="w-full bg-slate-700 hover:bg-slate-600 active:bg-slate-500 p-2 rounded outline-none">+ Add Answer</button>
                        <button type="button" onClick={handleReduceAnswer} className="w-full bg-slate-700 hover:bg-slate-600 active:bg-slate-500 p-2 rounded outline-none">- Reduce Answer</button>
                    </div>
                </div>
            </div>
            <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="answer">Right Answer</label>
                <select name="right_answer" id="right_answer" className="bg-slate-700 outline-none p-2 rounded">
                    {answers.map(answer => (
                        <option key={answer.index} value={answer.index}>{answer.index + " - " + answer.content}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <button className="bg-green-600 hover:bg-green-500 h-8 px-5 rounded">Save</button>
            </div>
        </form>
    )
}