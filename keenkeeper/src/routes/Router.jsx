import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <h1>Home Page</h1>,
            },
        ],
    },
]);

export default router;