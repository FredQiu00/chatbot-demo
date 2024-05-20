import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../user/user-info";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // For demo only
        if (username === 'test' && password === 'test000') {
            // POST request, then fetch user from db
            const user_obj = {
                id: "1",
                name: username,
                email: `${username}@email.com`,
                phone: "2314567809",
                chatIds: []
            }
            setUser(user_obj);
            navigate('/')
        } else {
            alert('Invalid username or password');
            setUsername('');
            setPassword('');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-300 p-6">
            <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold mb-6 text-center">ChatUI</h1>
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
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
                <p className="text-center text-sm mt-4">
                    Don't have an account? <span onClick={() => navigate("/signup")} className="text-blue-500 cursor-pointer hover:underline">Register an account</span> with us.
                </p>
            </form>
        </div>
    );
}

export default Login;
