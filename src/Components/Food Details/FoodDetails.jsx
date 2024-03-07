import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LuDollarSign } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoIosCheckboxOutline } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

const FoodDetails = () => {


    const [food, setFood] = useState({});

    const { id } = useParams();


    useEffect(() => {


        axios.get(`http://localhost:5000/api/v1/food?id=${id}`)

            .then(res => setFood(res.data));

    }, [])



    const {category, name, image, price, description, ingredients, preparations } = food;






    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div>
                        <div className="flex flex-col lg:flex-row justify-center md:justify-normal gap-5">
                            <div className="flex-1 space-y-4 md:space-y-2 lg:space-y-8">
                                <div>
                                    <img className="w-full rounded-lg " src={image} alt="Product Image" />
                                    <div className="py-5 border-y flex items-center justify-between xl:px-4">
                                        <div className="flex items-center gap-3 flex-1">
                                            <img className=" w-14 h-14 rounded-md " src='https://i.ibb.co/zH98DLb/images-q-tbn-ANd9-Gc-R77i-Oan-UEw-D6c-R1bth7-E0y0jn-AJCn-DH6-Zp1-Q-usqp-CAU.jpg' alt="Author" />
                                            <span className="font-semibold">Adriyan Ahemd</span>
                                        </div>
                                        <div className="flex-1 flex justify-end">
                                            <div className="space-y-2.5">
                                                <span className="flex items-center gap-2 text-sm md:text-base font-medium "><MdOutlineDateRange className="text-xl"></MdOutlineDateRange> 3/8/2024 </span>
                                                <span className="flex items-center gap-2 text-sm md:text-base font-medium "><BiCategoryAlt className="text-xl"></BiCategoryAlt> {category} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 md:space-y-6 xl:space-y-8 w-full">
                                <div className=" py-4 bg-[#F9FAFB] border px-6 rounded-md">
                                    <h1 className=" text-xl lg:text-2xl xl:text-3xl font-semibold ">{name}</h1>
                                </div>
                                <p className="text-gray-500 text-sm md:text-base font-medium text-justify leading-8">{description}</p>

                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:flex-1 space-y-4">
                                        <h1 className="text-lg font-semibold">Ingredients :</h1>
                                        <ul className="pl-5 flex md:flex-col flex-wrap items-center md:items-start gap-4 md:gap-1" l>
                                            {
                                                ingredients?.map((ingredient, i) => <li key={i} className="flex items-center gap-2 text-gray-500 text-sm md:text-base font-medium "> • <span>{ingredient}</span> </li>)
                                            }
                                        </ul>
                                    </div>

                                    <div className="md:flex-1 space-y-4">
                                        <h1 className="text-lg font-semibold">Preparations :</h1>
                                        <div className="space-y-3 pl-5">
                                            {
                                                preparations?.map((pre, i) => <p key={i} className="text-gray-500 text-sm md:text-base font-medium text-justify grid grid-cols-[auto,1fr] gap-2  "> <IoIosCheckboxOutline className="text-lg text-[#F01543] mt-1"></IoIosCheckboxOutline> {pre}</p> )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 font-bold lg:text-lg">
                                    <LuDollarSign></LuDollarSign>
                                    <h1>PRICE :</h1>
                                    <span>{price} <span className="text-[#F01543]">TAKA</span></span>
                                </div>
                                <button className=" text-[#F01543] w-full px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 ">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;