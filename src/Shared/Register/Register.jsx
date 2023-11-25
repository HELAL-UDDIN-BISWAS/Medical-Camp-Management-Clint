import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../Provider/Provider";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Register = () => {
    const { createuser, ubdateUser, googlesignup } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
   const asiosPublic = useAxiosPublic()
    const onesubmit = async (data) => {
        const imageFile = new FormData();
        imageFile.append('image', data.photo[0]);
        createuser(data.email, data.password)
            .then(async (res) => {
                const { data: imagedata } = await axios.post('https://api.imgbb.com/1/upload?key=b425eed4264500ee966fabfc8c973be7', imageFile);
                ubdateUser(data.name, imagedata.data.display_url)
                const userInfo={
                    name: data.name,
                    email:data.email
                }
                asiosPublic.post('/user',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        Swal.fire({
                            icon: "success",
                            title: "Success Register",
                            text: "Thanks For Register",
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    }
                })
                
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.error(error)
            });
    }
    const googlesubmit = () => {
        googlesignup()
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-4">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onesubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"   {...register("name")} placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        <input type="password"  {...register("password", {
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
                        })} placeholder="password" className="input input-bordered" required />
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500">type mast be 6 character</p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-500">max 20 character</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-500">please type one upercase lowarecase and number</p>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file"  {...register("photo")} placeholder="Name" className="" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="mx-5 form-control mb-6">
                    <button onClick={googlesubmit} className="btn btn-outline btn-secondary px-6 text-2xl"><FcGoogle /></button>
                </div>
                <h2 className="text-xl mx-5 mb-2">Have't acoount <Link className="text-green-500" to='/login'>Login</Link></h2>
            </div>
        </div>
    );
};

export default Register;