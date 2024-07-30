
import { useForm } from "react-hook-form";

import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/axiosPublic/axiosPublic";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;


const AddDoctor = () => {


    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {

        console.log(data);

        // image uploaded  to imageBb and then get an url 

        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })

        if(res.data.success){

            const doctorAdding = {
                name:data.name,
                email:data.email,
                image:res.data.data.display_url,
                category:data.category

            }

            const doctorRes = await axiosSecure.post('/doctorList',doctorAdding);
            
            console.log(doctorRes.data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add a Doctor Sucessfully",
                showConfirmButton: false,
                timer: 1500
              });




        }



    } 




 
    return (
        <div>
            <h2 className="text-3xl">Add doctor</h2>

            <div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text"> Name*</span>

                            </div>
                            <input type="text"
                                placeholder="Name"
                                {...register('name')}

                                className="input input-bordered w-full " />

                        </label>


                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text"> Email*</span>

                            </div>
                            <input type="email"
                                placeholder="Email"
                                {...register('email')}

                                className="input input-bordered w-full " />

                        </label>


                  

                        <div className="flex gap-6">



                            <label className="form-control w-full my-6">
                                <div className="label">
                                    <span className="label-text">Category*</span>

                                </div>
                                <select defaultValue='default' {...register('category', { required: true })}
                                    className="select select-primary w-full ">
                                    <option disabled value='default'>select a category?</option>
                                    <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                                    <option value="Cosmetic Dentisty">Cosmetic Dentisty</option>
                                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                                    <option value="Oral Surgery">Oral Surgery</option>
                                    <option value="Pediatric Dental">Pediatric Dental</option>
                                </select>
                            </label>
                        </div>

                 


                        

                        <div className="form-control w-full my-6">
                            <input {...register('image')} type="file" className="file-input file-input-ghost w-full max-w-xs" />
                        </div>












                        <button className="btn">
                            Add Doctor 
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddDoctor;