import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import { StateContext } from "../context/ContextProvider";

export default function Navbar() {
    const { currentUser } = useContext(StateContext)
    const [user, setUser] = useState(false)

    const handleLogout = (e) => {
        e.preventDefault()
        axiosClient.post('/logout')
    }

    return (
        <header className="fixed bg-slate-700 top-0 left-0 right-0 z-50">
            <nav className="h-16 flex justify-between items-center px-5 md:px-0 max-w-screen-md m-auto">
                <h2 className="text-xl font-semibold">NepQuizz</h2>
                <div className="relative">
                    <button className="text-2xl" onClick={() => setUser(!user)}><FaUserCircle /></button>
                    <div className={`${!user && "hidden"} absolute min-w-52 max-w-80 bg-slate-700 right-0 p-4 rounded border border-slate-500`}>
                        <div className="flex items-center gap-2 mb-3">
                            <Link to="/" className="text-4xl cursor-pointer"><FaUserCircle /></Link>
                            <div>
                                <Link to="/" className="text-center text-lg font-semibold leading-tight">{currentUser?.name}</Link>
                                <p className="text-sm">0 points</p>
                            </div>
                        </div>
                        <form onSubmit={handleLogout}>
                            <button type="submit" className="w-full text-sm py-1 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}