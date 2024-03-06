import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = () => {

    const {id} = useParams();

    const [blog, setBlog] = useState({})



    useEffect(() => {

        axios.get(`http://localhost:5000/api/v1/blog?id=${id}`)

            .then(res => setBlog(res.data));

    }, [])

    
    return (
        <>
            <section>
                <div style={{ backgroundImage: `url('https://i.ibb.co/wYnDMD1/Footers-bg.png')` }} className="text-center py-10 md:py-16 lg:py-28 space-y-4 md:space-y-6 lg:space-y-10 bg-no-repeat bg-cover">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white">BLOG</h1>
                    <h3 className="py-3.5 px-6 md:py-5 md:px-16 bg-gray-600 bg-opacity-50 text-base md:text-base inline-block rounded-[4px] font-semibold text-white"><span className="flex items-center gap-2"><IoHomeOutline></IoHomeOutline> HOME <IoIosArrowForward></IoIosArrowForward> BLOG <IoIosArrowForward></IoIosArrowForward> DETAILS  </span></h3>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <div className="mx-4">
                        <div className="flex flex-col-reverse xl:flex-row  gap-6">
                            <div className="xl:flex-[5] grid grid-cols-1 md:grid-cols-2 gap-4">
                                
                            </div>
                            <aside className="xl:flex-[2] space-y-8">
                                
                                <div className="p-5 bg-[#F9FAFB] rounded-md space-y-4 ">
                                    <h4 className="text-xl font-semibold">Search</h4>
                                    <div className="relative">
                                        <input className="bg-white border p-5 w-full rounded-md outline-none " type="text" placeholder="What you Search?" required />
                                        <span className="absolute top-2.5 right-2.5">
                                            <button className=" text-[#F01543] p-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 "><IoIosSearch></IoIosSearch></button>
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 bg-[#F9FAFB] rounded-md space-y-4 ">
                                    <h4 className="text-xl font-semibold">Categories</h4>
                                    <div>
                                        <ul className="grid grid-cols-1 md:grid-cols-2">
                                            <li className="font-medium py-3 px-4 border-t hover:text-[#F01543] duration-300 flex items-center gap-2"><BiCategoryAlt></BiCategoryAlt><span>Exploration</span></li>
                                            <li className="font-medium py-3 px-4 border-t hover:text-[#F01543] duration-300 flex items-center gap-2"><BiCategoryAlt></BiCategoryAlt><span>Recipes</span></li>
                                            <li className="font-medium py-3 px-4 border-t hover:text-[#F01543] duration-300 border-b flex items-center gap-2"><BiCategoryAlt></BiCategoryAlt><span>Lifestyle</span></li>
                                            <li className="font-medium py-3 px-4 border-t hover:text-[#F01543] duration-300 border-b flex items-center gap-2"><BiCategoryAlt></BiCategoryAlt><span>Health</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-5 bg-[#F9FAFB] rounded-md space-y-4 ">
                                    <h4 className="text-xl font-semibold">Follow Us</h4>
                                    <div className="flex items-center justify-center xl:justify-normal gap-3">
                                        <Link>
                                            <button className="p-3.5 bg-white rounded-lg text-[#F01543] hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                                <FaFacebookF className="text-xl"></FaFacebookF>
                                            </button>
                                        </Link>
                                        <Link>
                                            <button className="p-3.5 bg-white rounded-lg text-[#F01543] hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                                <FaTwitter className="text-xl"></FaTwitter>
                                            </button>
                                        </Link>
                                        <Link>
                                            <button className="p-3.5 bg-white rounded-lg text-[#F01543] hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                                <FaInstagram className="text-xl"></FaInstagram>
                                            </button>
                                        </Link>
                                        <Link>
                                            <button className="p-3.5 bg-white rounded-lg text-[#F01543] hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                                <FaYoutube className="text-xl"></FaYoutube>
                                            </button>
                                        </Link>
                                    </div>
                                </div>


                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;