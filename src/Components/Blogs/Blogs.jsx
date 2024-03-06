import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../Blog Card/BlogCard";
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";


const Blogs = () => {


    const [blogs, setBlogs] = useState([])



    useEffect(() => {

        axios.get('Blogs.json')

        .then(res => setBlogs(res.data));

    },[])


    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="flex flex-col-reverse xl:flex-row  gap-6">
                        <div className="xl:flex-[5] grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                blogs.map((blog, i) => <BlogCard key={i} blog={blog} ></BlogCard>)
                            }
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
        </>
    );
};

export default Blogs;