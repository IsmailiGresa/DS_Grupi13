import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Mainride from "./Pages/Mainride.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Profile from "./Pages/Profile.jsx";
import Donate from "./Pages/Donate.jsx";
import Giftcards from "./Pages/Giftcards";
import Invite from "./Pages/Invite.jsx";
import Payment from "./Pages/Payment.jsx";
import Promos from "./Pages/Promos.jsx";
import Rides from "./Pages/Rides.jsx";
import Logout from "./Pages/Logout.jsx";
import ClientLayout from "./Components/ClientLayout";
import GuestLayout from "./Components/GuestLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/Mainride"/>
            },
            {
                path: '/mainride',
                element: <Mainride/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/donate',
                element: <Donate/>
            },
            {
                path: '/giftcards',
                element: <Giftcards/>
            },
            {
                path: '/invite',
                element: <Invite/>
            },
            {
                path: '/payment',
                element: <Payment/>
            },
            {
                path: '/promos',
                element: <Promos/>
            },
            {
                path: '/rides',
                element: <Rides/>
            },
            {
                path: '/logout',
                element: <Logout/>
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