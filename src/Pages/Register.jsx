import { Link } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { useContext, useState } from "react";
import { StateContext } from "../context/ContextProvider";
import axiosClient from "../axios";

export default function Register() {
    const { setUserToken } = useContext(StateContext)
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosClient.post('/register', {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value
        }).then(response => {
            setUserToken(response.data.token)
        }).catch(error => {
            setErrors(error.response.data.errors)
        })
    }

    return (
        <div className="mx-4 sm:mx-0 sm:w-96 bg-slate-700 rounded p-4">
            <h2 className="mb-3 text-2xl font-medium text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" label="name" error={errors.name} />
                <Input type="email" name="email" label="Email" error={errors.email} />
                <PasswordInput name="password" label="Password" error={errors.password} />
                <PasswordInput name="password_confirmation" label="Confirm Password" error={errors.password_confirmation} />
                <button className="mb-1 w-full h-8 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded">Login</button>
                <p className="text-sm">Already have account? <Link to="/login" className="text-blue-400 hover:text-blue-500 active:text-blue-600">Login</Link></p>
            </form>
        </div>
    )
}