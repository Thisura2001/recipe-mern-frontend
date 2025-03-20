import './App.css';
import { RootLayout } from "./RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.tsx";
import { Favorite } from "./Pages/Favorite.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "/", element: <HomePage /> },
                { path: "/favorite", element: <Favorite /> },
            ],
        },
    ]);

    return (
        <RouterProvider router={routes} />
    );
}

export default App;
