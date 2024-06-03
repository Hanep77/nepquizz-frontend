import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useContext } from "react"
import { StateContext } from "../context/ContextProvider"

const AuthenticatedLayout = () => {
    const { userToken } = useContext(StateContext)

    if (!userToken) {
        return <Navigate to="/login" />
    }

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