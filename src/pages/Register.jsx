import {useState} from "react";
import {auth} from "../firebase/firebaseConfig.js";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const [notMatch,setNotMatch] = useState("");
    const navigate = useNavigate();
    const registerUser = async (e) => {
        e.preventDefault();
      if(password === confirmPassword) {
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            navigate("/")
        } catch(err) {
            setError(err.message);
            setTimeout(() => {
                setError("")
            },2000)
        }
      } else {
          setNotMatch("Passwords do not match");
          setTimeout(() => {
            setNotMatch("")
        },2000)
      }
    }
    return (
        <>
         <section  class="grid place-items-center w-full h-full">
        <div class="border border-t-gray-100 mt-8 mb-5 w-80 sm:w-full max-w-sm shadow-2xl rounded-md">
            <div class="text-center mt-2">
                <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-300">Register</h2>
            </div>
            <form class="bg-white w-full px-6 py-4 pb-5" id="form" onSubmit={registerUser}>
                <div class="pb-4">
                    <label class="font-bold block pb-2">Email</label>
                    <input type="email" id="email" class="py-2 px-2 appearance-none focus:outline-none rounded-md w-full border border-gray-300 shadow-sm" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="pb-6">
                    <label class="font-bold block pb-2">Password</label>
                    <input type="password" id="password" class="py-2 px-2 appearance-none focus:outline-none rounded-md w-full border border-gray-300 shadow-sm" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="pb-1">
                    <label class="font-bold block pb-2">Confirm Password</label>
                    <input type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} class="py-2 px-2 appearance-none focus:outline-none rounded-md w-full border border-gray-300 shadow-sm" placeholder="ConfirmPassword"/>
                </div>
                <div class="pb-2">
                    <p class="text-red-500 font-bold" id="error">{error}</p>
                    <p class="text-red-500 font-bold" id="error">{notMatch}</p>
                </div>
                <div class="pb-2 pt-1">
                   <button type="submit" class="py-2 font-bold hover:bg-blue-600 px-3 bg-blue-500 text-white w-full shadow-md rounded-md">Sign Up</button>
                </div>
            
            </form>
        </div>
</section>
        </>
    )
}
export default Register;