import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio/",
        element: <App />,
        children: [
            {
                path: "/portfolio/",
                element: <HomePage />,
            },
            {
                path: "/portfolio/about",
                element: <AboutPage />,
            },
            {
                path: "/portfolio/projects",
                element: <ProjectsPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
