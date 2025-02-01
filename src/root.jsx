import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Pages/MainPage";
import RemindersLayout from "./Pages/RemindersPageLayout";
import RemindersPage from "./Pages/RemindersPage";
import AddRemindersPage from "./Pages/AddReminderPage";
import AboutPage from "./Pages/AboutPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/reminders",
        element: <RemindersLayout />,
        children: [
          {
            index: true,
            element: <RemindersPage />,
          },
          {
            path: "new",
            element: <AddRemindersPage />,
          },
        ],
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
