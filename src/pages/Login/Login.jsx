import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4560079/pexels-photo-4560079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex justify-center items-center gap-5">
                        <div className="max-w-xl">
                            <h1 className="font-bold text-4xl">Login Today and Let the magic of productivity begin</h1>
                        </div>
                        <div className="bg-black p-6 bg-opacity-50 shadow-xl rounded-md">
                            <form className="flex flex-col gap-2">
                                <input type="text" className="input input-lg input-ghost bg-black bg-opacity-50" placeholder="user@email.com" />
                                <input type="text" className="input input-lg input-ghost bg-black bg-opacity-50" placeholder="password" />
                                <input type="submit" value="Login" className="btn btn-md" />
                            </form>
                            <div>
                                <p className="text-left mt-2">New user? <Link className="font-medium" to="/register">Register Now!</Link></p>
                            </div>
                            <div className="divider">Or</div>
                            <div className="flex justify-center items-center gap-2">
                                <button className="btn btn-circle text-2xl"><FcGoogle></FcGoogle></button>
                                <button className="btn btn-circle text-2xl text-blue-500"><FaFacebook></FaFacebook></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;