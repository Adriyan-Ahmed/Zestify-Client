import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from '../../Contexts/Authentication/Authentication';
import { toast } from 'react-toastify';
import axios from 'axios';

const RegisterForm = () => {



    const { CreateAccount, updatingProfile, GoogleLogin } = useContext(AuthContext);




    const Location = useLocation();




    const navigation = useNavigate();




    const navigate = () => {

        console.log(Location.state);

        navigation(Location?.state ? Location.state : "/")

    }




    const handleRegister = e => {

        e.preventDefault()

        const form = e.target;
        
        const email = form.email.value;
        
        const pass = form.password.value;
        
        const photo = form.photo.value;
        
        const name = form.name.value;

        const user = {name, photo, email, pass};
        


        CreateAccount(email, pass)

            .then(res => {

                if (res.user.email) {
                
                    updatingProfile(res, name, photo)
                
                    toast.success('Congratulations ! Registration completed Successfully ! 🤩💕')

                    saveUserInfo(name, photo, email, pass)
                
                    form.reset();

                    navigate();
                
                }
            
            })
            
            
            .catch(err => {
            
                if (err.message == "Firebase: Error (auth/email-already-in-use).") {
            
                    toast.error("The Email already in use")
            
                }
            
                else {
            
                    toast.error(err.message);
            
                }
            
            })

    }


    


    const handleGGLLogin = () => {

        GoogleLogin()

            .then(res => {

                if (res) {

                    toast.success('Login successful! You now have access. 🎉😊', {

                        position: "top-center"

                    })

                    navigate();

                }

            })

            .catch(err => {

                toast.error(err.message)

            })

    }



    const saveUserInfo = (name, image, email, pass) => {

        let user = {name, image, email, pass };

        console.log(user);

        axios.post(`http://localhost:5000/api/v1/user`, user )
        .then(res => console.log(res))
    }



    return (
        <>
            <div className='mx-4 my-10 min-'>
                <div className='flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-7 lg:gap-0 w-full'>
                    <div className='lg:flex-1'>
                        <div className='py-8 px-6 shadow-xl w-full md:w-8/12 mx-auto bg-base-100 rounded-md space-y-8 '>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold'>REGISTER</h1>
                                <p className='font-medium text-gray-400'>Have an account in the website ? <Link className='text-[#F01543] font-semibold underline'  to="/login">Sign in</Link> </p>
                            </div>
                            <div>
                                <form onSubmit={handleRegister} className='space-y-5'>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Name</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="name" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR NAME</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Photo URL</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="photo" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR PHOTO URL</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>E-mail Address</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="email" name="email" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                                        </div>
                                    </div>
                                    <div className='space-y-3'>
                                        <h6 className='font-bold'>Password</h6>
                                        <div className="relative input-box">
                                            <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="password" name="password" required />
                                            <span className="absolute left-3 text-gray-400 duration-300 ">YOUR PASSWORD</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-[#F01543] py-2 md:py-3 w-full text-white font-bold  rounded">REGISTER</button>
                                    </div>
                                </form>
                            </div>
                            <div className='flex items-center'>
                                <div className='border-2 w-full'></div>
                                <span className='font-medium text-gray-400 w-full text-center'>or Register with</span>
                                <div className='border-2 w-full'></div>
                            </div>
                            <div>
                                <button onClick={handleGGLLogin} className='flex items-center justify-center gap-3 border-[#F01543] border-2 py-2.5 w-full rounded-md '>
                                    <FaGoogle></FaGoogle>
                                    <span className='font-bold text-[#F01543] '>GOOGLE</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-1'>
                        <img className='w-full md:w-10/12 mx-auto' src="https://i.ibb.co/51h04cj/ezgif-7-6a69fdc182.gif" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;