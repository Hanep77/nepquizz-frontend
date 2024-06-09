import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useContext, useEffect } from "react"
import { StateContext } from "../context/ContextProvider"
import axiosClient from "../axios"

const AuthenticatedLayout = () => {
    const { setCurrentUser, userToken } = useContext(StateContext)

    useEffect(() => {
        axiosClient.get('/me').then(response => setCurrentUser(response.data))
    }, [])

    if (!userToken) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Navbar />
            <main className="max-w-screen-md mx-5 md:mx-auto mt-20 mb-5">
                <Outlet />
            </main>
        </>
    )
}

export default AuthenticatedLayout