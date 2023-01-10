import About from "../pages/About";
import Completed from "../pages/Completed";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

export const Routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: "",
                element: <Todo />,
            },
            {
                path: "/completed",
                element: <Completed />,
            },
            {
                path: "/about",
                element: <About />,
            }
        ]
    },

]