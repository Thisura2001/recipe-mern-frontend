import './App.css';
import { RootLayout } from "./RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.tsx";
import { Favorite } from "./Pages/Favorite.tsx";
import {Provider} from "react-redux";
import {store} from "./Store/Store.ts";

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
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    );
}

export default App;
