import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextProvider";

export default function GuestLayout() {
    const { userToken } = useContext(StateContext)

    if (userToken) {
        return <Navigate to="/" />
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Outlet />
        </div>
    )
}