import Main from "../layout/Main";
import Abouts from "../pages/abouts/Abouts";
import Contacts from "../pages/contacts/Contacts";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/",
                element: <Abouts />
            },
            {
                path: "/",
                element: <Contacts />
            },
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/",
                element: <Register />
            },
        ]

    }
])
export default router;