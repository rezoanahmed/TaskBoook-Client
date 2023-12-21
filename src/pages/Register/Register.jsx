import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FirebaseContext } from "../../context/AuthContext";
import Swal from "sweetalert2";


const Register = () => {
    const { googleLogin, register } = useContext(FirebaseContext);
    const navigate = useNavigate();
    // google sign in
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user.email);
                if (result.user.email) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Succeeded, Welcome!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard");
                }
            })
            .catch(err => {
                // console.log(err);
                if(err){
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Something went wrong!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }

    // registration with email and password
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const result = {email, password};
        // console.log(result);
        register(email, password)
        .then(result=>{
            if(result.user.email){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration Succeeded!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/login");
            }
        })
        .catch(err=>{
            if(err){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4560079/pexels-photo-4560079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <div className="max-w-xl">
                            <h1 className="font-bold text-4xl">Login Today and Elevate your effeciency!</h1>
                        </div>
                        <div className="bg-black p-6 bg-opacity-50 shadow-xl rounded-md">
                            <form onSubmit={handleRegister} className="flex flex-col gap-2">
                                <input name="email" type="text" className="input input-lg input-ghost bg-black bg-opacity-50" placeholder="user@email.com" />
                                <input name="password" type="password" className="input input-lg input-ghost bg-black bg-opacity-50" placeholder="password" />
                                <input type="submit" value="Register" className="btn btn-md" />
                            </form>
                            <div>
                                <p className="text-left mt-2">Already Have Account? <Link className="font-medium" to='/login'>Login!</Link></p>
                            </div>
                            <div className="divider">Or</div>
                            <div className="flex justify-center items-center gap-2">
                                <button onClick={handleGoogleLogin} className="btn btn-circle text-2xl"><FcGoogle></FcGoogle></button>
                                <button className="btn btn-circle text-2xl text-blue-500"><FaFacebook></FaFacebook></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;