import {Mail, RectangleEllipsis} from "lucide-react";
import userIcon from '../assets/addUser.png';

export const Signup: React.FC = () => {
    return (
        <>
            {/* This outer div centers everything on the page */}
            <div className="min-h-screen flex items-center justify-center bg-gray-700">

                {/* This is your card container */}
                <div className="flex flex-col justify-center items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-white shadow-lg">

                    {/* Image section */}
                    <div className="max-w-sm shadow-2xl rounded-lg">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1676998930980-fc6d4922c0b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="rounded-lg"
                        />
                    </div>

                    {/* Signup form section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center w-full">
                            <img src={userIcon} alt="User Icon" className="w-24 h-24"/>
                        </div>


                        {/* Title */}
                        <h1 className="text-4xl font-bold text-center">SIGN UP</h1>

                        {/* Username input with icon */}
                        <div className="flex items-center border border-gray-300 p-2 rounded-md bg-white">
                            <Mail className="text-gray-500 mr-2"/>
                            <input
                                type="text"
                                placeholder="Enter username"
                                className="outline-none flex-1"
                            />
                        </div>


                        {/* You can add more inputs here */}
                        <div className="flex items-center border border-gray-300 p-2 rounded-md bg-white">
                            <RectangleEllipsis className="text-gray-500 mr-2"/>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="outline-none flex-1"
                            />
                        </div>
                        {/* Submit button */}
                        <button
                            className="bg-blue-600 text-white p-2 rounded-md w-100 hover:bg-blue-700 cursor-pointer">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
