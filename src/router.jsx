import { createBrowserRouter } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import Home from "./Pages/Home";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Detail from "./Pages/Detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthenticatedLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/quiz/detail/:id',
                element: <Detail />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router