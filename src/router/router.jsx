import { createBrowserRouter } from "react-router-dom";
import Layout from "../routes/Layout";
import ErrorPage from "../routes/ErrorPage";
import Inicio from "../routes/Inicio";
import Form from "../routes/Form";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        path: "",
        element: <Inicio />,
      },
      {
        path: "sedan",
        element: <Form modelId="sedan" />,
      },
      {
        path: "cross",
        element: <Form modelId="cross" />,
      },
    ],
  },
]);
