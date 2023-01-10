
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import { Routes } from "./constants/routes";
import { TodoContextProvider } from "./state/todo-context";

const router = createBrowserRouter(Routes);


function App() {
  return (
    <TodoContextProvider>
      <RouterProvider router={router} />
    </TodoContextProvider>
  );
}

export default App;
