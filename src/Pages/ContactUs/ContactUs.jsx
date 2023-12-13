
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Log form values
        console.log("Name:", form.current.user_name.value);
        console.log("Email:", form.current.user_email.value);
        console.log("Message:", form.current.message.value);

        emailjs
            .sendForm(
                "service_3jskkuc",
                "template_upmm4sl",
                form.current,
                "hAj2KjKC5N2pIHhr-"
            )
            .then(
                (result) => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="min-h-[60vh] flex mt-14 mb-20">

            <div className="md:flex gap-20 md:w-9/12 items-center justify-center p-3 mx-auto">
                <form ref={form} onSubmit={sendEmail} className="flex flex-1  flex-col space-y-5">
                    <input required type="text" name="user_name" placeholder="Name" className="bordered input border rounded-full bg-slate-100 p-4  " />
                    <input required type="email" name="user_email" placeholder="Email" className="bordered input border rounded-full bg-slate-100 p-4  " />
                    <textarea required name="message" placeholder="Write your Message" className=" rounded-full bg-slate-100 p-4 h-20  "></textarea>
                    <input type="submit" className="btn border rounded-full bg-slate-100 p-4  " />
                </form>
                <div className="flex-1 mt-10">
                <div>
                    <h3 className="flex items-center text-gray-500 text-2xl gap-2"><MdEmail /> <p>mdhelal6775@gmail.com</p></h3>
                    <h3 className="flex items-center text-gray-500 text-2xl gap-2"><FaPhone/><p>01858179115</p></h3>
                 
                    <div className="flex gap-2  text-white">
                        <Link className="m-4 text-xl bg-gray-500 rounded p-2"><FaFacebookF></FaFacebookF></Link>
                        <Link className="m-4 text-xl bg-gray-500 rounded p-2"><FaGoogle></FaGoogle></Link>
                        <Link className="m-4 text-xl bg-gray-500 rounded p-2"><FaGithub></FaGithub></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;