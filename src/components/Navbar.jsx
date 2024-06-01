import { useState } from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    const [user, setUser] = useState(false)

    return (
        <header className="fixed bg-slate-700 top-0 left-0 right-0">
            <nav className="h-16 flex justify-between items-center px-5 md:px-0 max-w-screen-md m-auto">
                <h2 className="text-xl font-semibold">NepQuizz</h2>
                <div className="relative">
                    <button className="text-2xl" onClick={() => setUser(!user)}><FaUserCircle /></button>
                    <div className={`${!user && "hidden"} absolute w-40 md:w-52 bg-slate-700 right-0 p-4 rounded border border-slate-500`}>
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-2xl"><FaUserCircle /></div>
                            <h3 className="text-center text-lg font-semibold">Yudis Sutisna</h3>
                            <button className="w-full text-sm py-1 bg-slate-500 hover:bg-slate-600 rounded">View Profile</button>
                            <button className="w-full text-sm py-1 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}