
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import { Routes } from "./routes";
import { TaskContextProvider } from "./state/task-context";

const router = createBrowserRouter(Routes);


function App() {
  return (
    <TaskContextProvider>
      <RouterProvider router={router} />
    </TaskContextProvider>
  );
}

export default App;
