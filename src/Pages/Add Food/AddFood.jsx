import { IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { IoSaveOutline } from "react-icons/io5";

const AddFood = () => {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState('No Selected File')
    const [category, setCategory] = useState('Select Category')
    return (
        <>
            <section>
                <div style={{ backgroundImage: `url('https://i.ibb.co/wYnDMD1/Footers-bg.png')` }} className="text-center py-10 md:py-16 lg:py-28 space-y-4 md:space-y-6 lg:space-y-10 bg-no-repeat bg-cover">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white">ADD FOOD</h1>
                    <h3 className="py-3.5 px-6 md:py-5 md:px-16 bg-gray-600 bg-opacity-50 text-base md:text-base inline-block rounded-[4px] font-semibold text-white"><span className="flex items-center gap-2"><IoHomeOutline></IoHomeOutline> HOME <IoIosArrowForward></IoIosArrowForward> ADD FOOD </span></h3>
                </div>
            </section>


            <form>
                <section>
                    <div className="container mx-auto">
                        <div className="mx-4">
                            <div className="space-y-6">


                                <div className="flex items-center justify-between">
                                    <h1 className="flex items-end gap-3"><img className="w-10" src="https://i.ibb.co/2y25x3W/add-food-icon.png" alt="" /> <span className="text-2xl font-semibold">Add New Food</span></h1>
                                    <div className=" hidden md:flex flex-row-reverse items-center gap-5">
                                        <button className="px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border-2 rounded btn-1 hover:text-white hover:border-[#F01543] duration-1000 flex items-center gap-2 "><FaCheck></FaCheck> Add Food</button>
                                        <span className="px-10 bg-[#F01543] rounded text-white font-bold py-3.5 text-sm md:text-base lg:text-lg hover:bg-transparent hover:py-2.5 border-[#F01543] hover:border-2 hover:text-[#F01543] focus:text-[#F01543] focus:border-2 focus:py-2.5 focus:bg-transparent duration-500 flex items-center gap-2 cursor-pointer "><IoSaveOutline></IoSaveOutline> Save Draft</span>
                                    </div>
                                </div>


                                <div className="flex flex-col lg:flex-row gap-6">



                                    <div className="flex-[7] space-y-9 ">


                                        <div className="p-5 bg-[#F9FAFB] rounded-md space-y-4 ">
                                            <h4 className="text-xl font-semibold">General Information</h4>

                                            <div className="">
                                                <span className="font-semibold ml-6">Food name</span>
                                                <div className="p-2 bg-white rounded-md">
                                                    <input className="bg-[#F9FAFB] p-5 w-full rounded-md outline-none " type="text" placeholder="Food Name" required />
                                                </div>
                                            </div>

                                            <div className="">
                                                <span className="font-semibold ml-6">Description Product</span>
                                                <div className="p-2 bg-white rounded-md">
                                                    <textarea className="bg-[#F9FAFB] p-5 w-full rounded-md outline-none " placeholder="Write a Description about your food ." name="description" id="" cols="" rows="6"></textarea>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                    <div className="flex-[3] space-y-5">
                                        
                                    </div>
                                </div>


                                <button className=" md:hidden mt-6 text-[#F01543] w-full px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 flex items-center justify-center gap-3 "> <FaCheck></FaCheck> Add Food</button>

                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
};

export default AddFood;