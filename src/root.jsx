import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Pages/MainPage";
import RemindersLayout from "./Pages/RemindersPageLayout";
import RemindersPage from "./Pages/RemindersPage";
import AddRemindersPage from "./Pages/AddReminderPage";
import AboutPage from "./Pages/AboutPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: "Error!",
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
