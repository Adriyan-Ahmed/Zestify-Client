import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <section className=" py-10 lg:py-20 bg-cover bg-no-repeat " style={{ backgroundImage: "url('https://i.ibb.co/wYnDMD1/Footers-bg.png')" }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            <div className="text-white space-y-5">
                                <div className="flex items-center gap-0">
                                    <img className=" h-16" src="https://i.ibb.co/4MjkZCX/Zestify-Logo.png" alt="LOGO" />
                                    <h1 className=" text-2xl font-bold">ZESTIFY</h1>
                                </div>
                                <div>
                                    <p className="font-medium lg:w-96">At Zestify, we invite you to embark on a journey of taste and delight.Our tables are more than just places.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link>
                                        <button className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                            <FaFacebookF className="text-xl"></FaFacebookF>
                                        </button>
                                    </Link>
                                    <Link>
                                        <button className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                            <FaTwitter className="text-xl"></FaTwitter>
                                        </button>
                                    </Link>
                                    <Link>
                                        <button className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                            <FaInstagram className="text-xl"></FaInstagram>
                                        </button>
                                    </Link>
                                    <Link>
                                        <button className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#F01543] hover:text-white focus:bg-[#F01543] focus:text-white duration-500 ">
                                            <FaYoutube className="text-xl"></FaYoutube>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-10 justify-around w-full">
                                <div className="space-y-5 xl:px-8">
                                    <h1 className="text-xl font-bold text-white border-b-2 border-dashed pb-3 max-w-max ">ABOUT US</h1>
                                    <div className="space-y-3">
                                        <Link className="block">
                                            <span className="text-slate-300 font-medium hover:text-[#F01543] focus:text-[#F01543] duration-300 ">Our Story</span>
                                        </Link>
                                        <Link className="block">
                                            <span className="text-slate-300 font-medium hover:text-[#F01543] focus:text-[#F01543] duration-300 ">Our Expert</span>
                                        </Link>
                                        <Link className="block">
                                            <span className="text-slate-300 font-medium hover:text-[#F01543] focus:text-[#F01543] duration-300 ">Reviews</span>
                                        </Link>
                                        <Link className="block">
                                            <span className="text-slate-300 font-medium hover:text-[#F01543] focus:text-[#F01543] duration-300 ">Blog</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="space-y-5 xl:px-8">
                                    <h1 className="text-xl font-bold text-white border-b-2 border-dashed pb-3 max-w-max ">OPENING HOURS</h1>
                                    <ul className="space-y-3 text-slate-300 font-medium ">
                                        <li className="flex gap-4 justify-between pb-2 border-b border-slate-600 ">
                                            <span>Mon - Tues :</span>
                                            <span>6.00 am - 10.00 pm</span>
                                        </li>
                                        <li className="flex gap-4 justify-between pb-2 border-b border-slate-600 ">
                                            <span>Wednes - Thurs :</span>
                                            <span>8.00 am - 12.00 pm</span>
                                        </li>
                                        <li className="flex gap-4 justify-between pb-2 border-b border-slate-600 ">
                                            <span>Lunch</span>
                                            <span>Everyday</span>
                                        </li>
                                        <li className="flex gap-4 justify-between pb-2 border-b border-slate-600 ">
                                            <span>Friday</span>
                                            <span className="text-[#F01543]">Closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;