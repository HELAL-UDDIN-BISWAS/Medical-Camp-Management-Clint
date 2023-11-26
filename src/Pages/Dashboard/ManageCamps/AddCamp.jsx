
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../Hooks/useAxiosSecure ";
import Swal from "sweetalert2";
import axios from "axios";

const AddCamp = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure()
    const handleAddCamp = async (data) => {
        const imageFile = new FormData();
        imageFile.append('image', data.photo[0]);
        const { data: imagedata } = await axios.post('https://api.imgbb.com/1/upload?key=b425eed4264500ee966fabfc8c973be7', imageFile);

        const userInfo = {
            campName: data.campname,
            price: data.campfees,
            image: imagedata.data?.display_url,
            venueLocation: data.venue,
            specializedServices: data.services,
            healthcare: data.healthcare,
            targetAudience: data.audience,
            longDescription: data.description
        }
        console.log(userInfo)
        axiosSecure.post('/addcamp', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success Register",
                        text: "Thanks For Register",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
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
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-4">
                <div className="rounded bg-base-100">
                    <form onSubmit={handleSubmit(handleAddCamp)} className="card-body">
                        <div className="grid md:grid-cols-2 w-full gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">CampName</span>
                                </label>
                                <input type="text"  {...register("campname")} placeholder="Camp Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file"  {...register("photo")} placeholder="Name" className="" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">CamFees</span>
                                </label>
                                <input type=""  {...register("campfees")} placeholder="Camp Fees" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Venue Location</span>
                                </label>
                                <input type="text"  {...register("venue")} placeholder="Venue Location" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Specialized Services Provided</span>
                                </label>
                                <input type="text"  {...register("services")} placeholder="Specialized Services Provided" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Healthcare Professionals in Attendance</span>
                                </label>
                                <input type="text"  {...register("healthcare")} placeholder="Healthcare" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Target Audience</span>
                                </label>
                                <input type="text"  {...register("audience")} placeholder="Target Audience" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comprehensive Description</span>
                                </label>
                                <input type="text"  {...register("description")} placeholder="Comprehensive Description" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Camp</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddCamp;