import { Outlet } from "react-router-dom"

const AuthenticatedLayout = () => {
    return (
        <main className="max-w-screen-md mx-5 md:mx-auto">
            <Outlet />
        </main>
    )
}

export default AuthenticatedLayout