import { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"

export default function PasswordInput({ name, label, error }) {
    const [showPassword, setShowPassword] = useState(false)
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="mb-3">
            <div className="relative flex">
                <input type={showPassword ? "text" : "password"} name={name} id={name} className="w-full bg-slate-700 border border-slate-500 focus:border-slate-200 h-10 rounded-s outline-none px-2 peer" required autoComplete="off"
                    onChange={(e) => setInputValue(e.target.value)} />
                <button type="button" className="px-3 bg-slate-600 hover:bg-slate-500 active:bg-slate-400 border border-slate-500 rounded-e" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
                <label htmlFor={name} className={`${inputValue ? "-top-3 px-1 text-sm" : "top-2"} left-2 absolute cursor-text peer-focus:-top-3 bg-slate-700 peer-focus:px-1 peer-focus:text-sm transition-all`}>{label}</label>
            </div>
            {error && <p className="text-sm text-red-400 italic py-1">{error}</p>}
        </div>
    )
}