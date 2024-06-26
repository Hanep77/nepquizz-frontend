import { Link } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import axiosClient from "../axios";
import { useState, useContext } from "react"
import { StateContext } from "../context/ContextProvider"

export default function Login() {
    const { setUserToken } = useContext(StateContext)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosClient.post('/login', {
            email: e.target.email.value,
            password: e.target.password.value
        }).then(response => {
            setUserToken(response.data.token)
        }).catch(error => {
            setErrorMessage(error.response.data.message)
        })
    }

    return (
        <div className="mx-4 sm:mx-0 sm:w-96 bg-slate-700 rounded p-4">
            <h2 className="mb-3 text-2xl font-medium text-center">Login</h2>
            <div className={`${!errorMessage && "hidden"} bg-red-600 border border-red-300 text-red-300 bg-opacity-50 rounded p-2 mb-5`}>
                <p>{errorMessage}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <Input type="email" name="email" label="Email" />
                <PasswordInput name="password" label="Password" />
                <button className="mb-1 w-full h-8 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded">Login</button>
                <p className="text-sm">Do not have account yet? <Link to="/register" className="text-blue-400 hover:text-blue-500 active:text-blue-600">Register</Link></p>
            </form>
        </div>
    )
}
