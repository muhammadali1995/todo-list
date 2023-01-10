import About from "./pages/About";
import CompletedList from "./pages/CompletedList";
import Container from "./components/container";
import TaskList from "./pages/TaskList";

export const Routes = [
    {
        path: '/',
        element: <Container />,
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