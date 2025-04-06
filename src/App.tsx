import './App.css';
import { RootLayout } from "./RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.tsx";
import { Favorite } from "./Pages/Favorite.tsx";
import {Provider} from "react-redux";
import {store} from "./Store/Store.ts";
import {Authlayout} from "./Authlayout.tsx";
import {Signin} from "./Pages/Signin.tsx";
import {Signup} from "./Pages/Signup.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path:"",
            element:<Authlayout/>,
            children:[
                {path: "/",element:<Signin/>},
                {path: "/Signup",element:<Signup/>}
            ]
        },
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "/Home", element: <HomePage /> },
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
