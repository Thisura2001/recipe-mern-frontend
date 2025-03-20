import {NavBar} from "./Component/NavBar.tsx";
import {Outlet} from "react-router-dom";

export const RootLayout = ()=>{
    return(
        <>
            <NavBar/>
            <Outlet></Outlet>
        </>
    )
}