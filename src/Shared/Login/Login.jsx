import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/Provider';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const captcharef = useRef(null)
    const [desabol, setdesabol] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)
    const { googlesignup } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        loginUser(data.email, data.password)
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: "success",
                    title: "Success Register",
                    text: "Thanks For Register",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                navigate(from, { replace: true })
            })
            .catch(
                console.error())
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    };

    const handleCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = captcharef.current.value
        if (validateCaptcha((user_captcha_value))) {
            setdesabol(false)
        }
        else {
            setdesabol(true)
        }
        console.log(user_captcha_value)
    };

    const googlesubmit = () => {
        googlesignup()
            .then(res => {
                console.log(res)
                navigate(from, { replace: true })
            })
            .catch(console.error())
    };

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-4">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password")} placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleCaptcha} ref={captcharef} name="captcha" placeholder="Captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={desabol} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mx-5 form-control mb-6">
                        <button disabled={desabol} onClick={googlesubmit} className="btn btn-outline btn-secondary px-6 text-2xl"><FcGoogle /></button>
                    </div>
                    <h2 className="text-xl mx-5 mb-2">Don't Have An Acoount <Link className="text-green-500" to='/register'>Register</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;