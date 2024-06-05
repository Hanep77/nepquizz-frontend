import { useState } from "react"

export default function Input({ type, name, label, error }) {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="mb-3 relative">
            <input type={type} name={name} id={name} className="w-full bg-slate-700 border border-slate-500 focus:border-slate-200 h-10 rounded outline-none px-2 peer" required autoComplete="off" onChange={(e) => setInputValue(e.target.value)} />
            <label htmlFor={name} className={`${inputValue ? "-top-3 px-1 text-sm" : "top-2"} left-2 absolute cursor-text peer-focus:-top-3 bg-slate-700 peer-focus:px-1 peer-focus:text-sm transition-all`}>{label}</label>
            {error && <p className="text-sm text-red-400 italic py-1">{error}</p>}
        </div>
    )
}