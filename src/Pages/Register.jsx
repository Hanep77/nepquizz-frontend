import { Link } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

export default function Register() {
    return (
        <div className="mx-4 sm:mx-0 sm:w-96 bg-slate-700 rounded p-4">
            <h2 className="mb-3 text-2xl font-medium text-center">Login</h2>
            <form action="">
                <Input type="text" name="name" label="name" />
                <Input type="email" name="email" label="Email" />
                <PasswordInput name="Password" label="Password" />
                <PasswordInput name="Password_confirmation" label="Confirm Password" />
                <button className="mb-1 w-full h-8 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded">Login</button>
                <p className="text-sm">Already have account? <Link to="/login" className="text-blue-400 hover:text-blue-500 active:text-blue-600">Login</Link></p>
            </form>
        </div>
    )
}