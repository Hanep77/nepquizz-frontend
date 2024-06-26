import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios";
import { StateContext } from "../context/ContextProvider";

export default function Navbar() {
    const [user, setUser] = useState(false)

    return (
        <header className="fixed bg-slate-700 top-0 left-0 right-0 z-50">
            <nav className="h-16 flex justify-between items-center px-5 md:px-0 max-w-screen-md m-auto">
                <h2 className="text-xl font-semibold">NepQuizz</h2>
                <div className="relative">
                    <button className="text-2xl" onClick={() => setUser(!user)}><FaUserCircle /></button>
                    {user && <UserDropDown setUser={setUser} />}
                </div>
            </nav>
        </header>
    )
}

function UserDropDown({ setUser }) {
    const { currentUser } = useContext(StateContext)
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        axiosClient.post('/logout').then(() => navigate("/login"))
    }

    return (
        <div className={`absolute min-w-52 max-w-80 bg-slate-700 right-0 p-4 rounded border border-slate-500`}>
            <div className="flex items-center gap-2 mb-3">
                <Link to="/" className="text-4xl cursor-pointer"><FaUserCircle /></Link>
                <div>
                    <Link to="/" className="text-center text-lg font-semibold leading-tight">{currentUser?.name}</Link>
                    <p className="text-sm">0 points</p>
                </div>
            </div>
            <div className="mb-2">
                <Link to={'/quiz/create'} onClick={() => setUser(!user)} className="inline-block text-center w-full text-sm py-1 bg-green-600 hover:bg-green-500 active:bg-green-400 rounded">
                    Create New Quiz
                </Link>
            </div>
            <form onSubmit={handleLogout}>
                <button type="submit" className="w-full text-sm py-1 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded">Logout</button>
            </form>
        </div>
    )
}