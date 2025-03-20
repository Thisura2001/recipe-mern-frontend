import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, HeartIcon } from 'lucide-react'
export const NavBar: React.FC = () => {
    const location = useLocation()
    return (
        <nav className="bg-white shadow-md py-4 px-6 w-full">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold text-orange-600 flex items-center gap-2"
                >
                    <span className="hidden sm:inline">RecipeFinder</span>
                </Link>
                <div className="flex gap-4">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <HomeIcon size={20} />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <Link
                        to="/favorite"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === '/favorite' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <HeartIcon size={20} />
                        <span className="hidden sm:inline">Favorites</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
