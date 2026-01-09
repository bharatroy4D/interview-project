import Root from "../layout/Root";
import Abouts from "../pages/abouts/Abouts";
import Contacts from "../pages/contacts/Contacts";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "/",      // Home
                element: <Home />
            },
            {
                path: "abouts",  // 👉 /about
                element: <Abouts />
            },
            {
                path: "contacts", // 👉 /contact
                element: <Contacts />
            },
            {
                path: "login",   // 👉 /login
                element: <Login />
            },
            {
                path: "register", // 👉 /register
                element: <Register />
            },
        ]
    }
]);

export default router;
