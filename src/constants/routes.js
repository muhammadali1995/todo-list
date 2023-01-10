import About from "../pages/About";
import CompletedList from "../pages/CompletedList";
import Home from "../pages/Home";
import TaskList from "../pages/TaskList";

export const Routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: "",
                element: <TaskList />,
            },
            {
                path: "/completed-list",
                element: <CompletedList />,
            },
            {
                path: "/about",
                element: <About />,
            }
        ]
    },

]