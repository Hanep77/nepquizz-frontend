import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Outlet />
        </div>
    )
}