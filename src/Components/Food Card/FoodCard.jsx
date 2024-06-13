import { FaStar } from "react-icons/fa";
import { TbBrandKbin } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BiDetail } from "react-icons/bi";

const FoodCard = ({food}) => {


    const {_id, category, name, image, price,} = food;
    return (
        <>
            <div data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" 
                className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="rounded-tl-lg rounded-tr-lg">
                    <img className="w-full h-[260px] md:h-[220px] lg:h-[270px] xl:h-[270px] " src={image} alt="" />
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
                    <div className=" h-full flex flex-col justify-between gap-5">
                        <div className="pt-3 ">
                            <h1 className="text-2xl font-bold">{name}</h1>
                        </div>
                        <div className="">
                            <p className="flex items-center gap-2 font-semibold"><TbBrandKbin className="text-[#F01543] text-2xl "></TbBrandKbin><span className="text-[#F01543]">Category : </span>{category}</p>
                            <Link className="" to={`/food/${_id}`}>
                                <button className=" mt-6 flex items-center gap-3 justify-center text-[#F01543] w-full px-8 py-3 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 "><BiDetail className="text-2xl"></BiDetail> Details</button>
                            </Link>
                            <button className=" mt-3 w-full flex items-center gap-3 justify-center bg-[#F01543] rounded text-white font-semibold py-3 text-sm md:text-base lg:text-lg hover:bg-transparent border-[#F01543] border hover:text-[#F01543] focus:text-[#F01543]  focus:py-3 focus:bg-transparent duration-500 "><MdOutlineAddShoppingCart className="text-2xl"></MdOutlineAddShoppingCart> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;