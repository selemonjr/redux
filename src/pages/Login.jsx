import {useState} from "react";
import {auth} from "../firebase/firebaseConfig.js";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate,Link} from "react-router-dom";
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();
    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password);
            navigate("/")
        } catch(err) {
            setError(err.message);
            setTimeout(() => {
                setError("")
            },2000)
        }
    }
    return (
        <>
         <section  class="grid place-items-center w-full h-full">
        <div class="border border-t-gray-100 mt-8 mb-5 w-80 sm:w-full max-w-sm shadow-2xl rounded-md">
            <div class="text-center mt-2">
                <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-300">Login</h2>
            </div>
            <form class="bg-white w-full px-6 py-4 pb-5" id="form" onSubmit={loginUser}>
                <div class="pb-4">
                    <label class="font-bold block pb-2">Email</label>
                    <input type="email" id="email" class="py-2 px-2 appearance-none focus:outline-none rounded-md w-full border border-gray-300 shadow-sm" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="pb-6">
                    <label class="font-bold block pb-2">Password</label>
                    <input type="password" id="password" class="py-2 px-2 appearance-none focus:outline-none rounded-md w-full border border-gray-300 shadow-sm" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="pb-2">
                    <p class="text-red-500 font-bold" id="error">{error}</p>
                </div>
                <div class="pb-2 pt-1">
                   <button type="submit" class="py-2 font-bold hover:bg-blue-600 px-3 bg-blue-500 text-white w-full shadow-md rounded-md">Sign In</button>
                </div>
                <div className="grid place-items-center mt-2">
                    <p className="font-bold">Don't have an account ? <span><Link to="/register" className="text-sky-500">Register</Link></span></p>
                </div>
            </form>
        </div>
</section>
        </>
    )
}
export default Login;