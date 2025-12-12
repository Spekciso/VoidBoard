import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Thread from "./pages/Thread";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/:boardId",
    Component: Board,
  },
  {
    path: "/:boardId/:threadId",
    Component: Thread,
  },
]);