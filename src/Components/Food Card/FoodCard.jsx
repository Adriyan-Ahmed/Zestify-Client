import { FaStar } from "react-icons/fa";
import { TbBrandKbin } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";


const FoodCard = ({food}) => {


    const {_id, category, name, image, price,} = food;
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="rounded-tl-lg rounded-tr-lg">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between pb-3 border-b">
                        <h2 className="text-[#F01543] text-xl font-bold ">${price}</h2>
                        <div className="rating rating-sm gap-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="pt-3 space-y-4">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="flex items-center gap-2 font-semibold"><TbBrandKbin className="text-[#F01543] text-2xl "></TbBrandKbin><span className="text-[#F01543]">Category : </span>{category}</p>
                        {/* <p className="flex items-center gap-2 font-semibold"><MdOutlineBloodtype className="text-[#0FEC2D] text-2xl "></MdOutlineBloodtype><span className="text-[#0FEC2D]">Type :</span>{type}</p> */}
                    </div>
                    <div className="mt-6">
                        <Link to={`/food/${_id}`}>
                            <button className=" text-[#F01543] w-full px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 flex items-center justify-center gap-2 ">
                                <TfiShoppingCartFull className="text-2xl"></TfiShoppingCartFull>
                                <span>Add To Cart</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;