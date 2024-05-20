import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../user/user-info";

const Signup: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    // send verification code if needed
    const checkEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return false;
        }
        return true;
    }

    // send verification code if needed
    const checkPhone = () => {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Invalid phone number format');
            return false;
        }
        return true;
    }

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // for demo only
        if (checkEmail() && checkPhone()) {
            const data = { id: "1"}
            const user_obj = {
                id: data.id,
                name: username,
                email: email,
                phone: phone,
                chatIds: []
            };
            setUser(user_obj);
            navigate('/');
        } else {
            alert("Incorrect format");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-300 p-6">
            <form onSubmit={handleSignup} className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
                <div>
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input 
                        type="text"
                        value={username}
                        placeholder="test"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input 
                        type="password"
                        value={password}
                        placeholder="test000"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                        type="email"
                        value={email}
                        placeholder="test@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                        type="tel"
                        value={phone}
                        placeholder="1234567890"
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-200"
                >
                    Signup
                </button>
                <p className="text-center text-sm mt-4">
                    Have an account? Log in <span onClick={() => navigate("/login")} className="text-blue-500 cursor-pointer hover:underline">here</span>.
                </p>
            </form>
        </div>
    );
}

export default Signup;
