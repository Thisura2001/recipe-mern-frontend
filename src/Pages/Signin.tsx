import userIcon from '../assets/user.png';
import {Mail, RectangleEllipsis} from "lucide-react";
export const Signin: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-700">
                <div className="flex flex-col justify-center items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-white shadow-lg">
                    <div className="max-w-sm shadow-2xl rounded-lg">
                        <img
                            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="login img"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center items-center w-full">
                            <img src={userIcon} alt="user icon" className="w-24 h-24"/>
                        </div>
                        <h1 className="text-4xl font-bold text-center">SIGN IN</h1>
                        <div className="flex items-center border border-gray-300 p-2 rounded-md bg-white">
                            <Mail className="text-gray-500 mr-2"/>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="outline-none flex-1"
                            />
                        </div>
                        <div className="flex items-center border border-gray-300 p-2 rounded-md bg-white w-100">
                            <RectangleEllipsis className="text-gray-500 mr-2"/>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="outline-none flex-1"
                            />
                        </div>
                        <button className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 cursor-pointer">
                            Sign in
                        </button>
                        <p className="text-sm text-gray-700">
                            Don't have an account?{' '}
                            <a href="/Signup" className="text-blue-500 hover:underline font-medium">
                                Sign up here..
                            </a>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}