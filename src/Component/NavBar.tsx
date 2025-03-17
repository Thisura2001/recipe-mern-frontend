import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={"bg-white shadow-md py-4 px-6 w-full"}>
            <Link to={'/'}
            className="text-2xl font-bold text-orange-600 flex items-center gap-2"
            >
                <span className="hidden sm:inline">RecipeFinder</span>
            </Link>
        </nav>
    )
}