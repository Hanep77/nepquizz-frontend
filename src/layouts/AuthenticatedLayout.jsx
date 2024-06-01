import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AuthenticatedLayout = () => {
    return (
        <>
            <Navbar />
            <main className="max-w-screen-md mx-5 md:mx-auto mt-20">
                <Outlet />
            </main>
        </>
    )
}

export default AuthenticatedLayout