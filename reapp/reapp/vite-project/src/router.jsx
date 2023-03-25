import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Main from "./Pages/Main.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ClientLayout from "./Components/ClientLayout";
import GuestLayout from "./Components/GuestLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/main"/>
            },
            {
                path: '/main',
                element: <Main/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }



])

export default router;