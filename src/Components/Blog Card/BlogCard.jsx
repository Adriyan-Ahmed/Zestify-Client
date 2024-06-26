import { MdOutlineDateRange } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
    

    const { _id, title, banner_image, category, posted_date, descriptions, } = blog;

    
    return (
        <>
            <div data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" 
                className=" flex flex-col justify-between gap-5 ">
                <div className="overflow-hidden">
                    <img className="w-full rounded hover:scale-125 duration-500 " src={banner_image} alt="" />
                </div>
                <div className="flex-1 flex-flex-col gap-3 justify-between">
                    <div className="h-full flex flex-col gap-3 justify-between">
                        <h1 className="text-xl font-bold">{title}</h1>
                        <p className="text-sm md:text-base font-medium ">{descriptions?.description1.slice(0, 80)} ...</p>
                        <div className="space-y-3">
                            <div className=" py-3 border-t flex justify-between">
                                <span className="flex items-center gap-2 text-sm md:text-base font-medium "><MdOutlineDateRange className="text-xl"></MdOutlineDateRange> {posted_date} </span>
                                <span className="flex items-center gap-2 text-sm md:text-base font-medium "><BiCategoryAlt className="text-xl"></BiCategoryAlt> {category} </span>
                            </div>
                            <Link to={`details/${_id}`}>
                                <button className=" text-[#F01543] w-full px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 ">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;