import { MdOutlineDateRange } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

const BlogCard = ({blog}) => {
    

    console.log(blog);
    const {title, banner_image, images, tags, category, posted_date, author, descriptions, goal_descriptions} = blog;
    return (
        <>
            <div data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" 
                className=" flex flex-col justify-between gap-5 ">
                <div>
                    <img className="w-full rounded " src={banner_image} alt="" />
                </div>
                <div className="flex-1 flex-flex-col gap-3 justify-between">
                    <div className="h-full flex flex-col gap-3 justify-between">
                        <h1 className="text-xl font-bold">{title}</h1>
                        <p className="text-sm md:text-base font-medium ">{descriptions.description1.slice(0, 80)} ...</p>
                        <div className="space-y-3">
                            <div className=" py-3 border-t border-b flex justify-between">
                                <span className="flex items-center gap-2 text-sm md:text-base font-medium "><MdOutlineDateRange className="text-xl"></MdOutlineDateRange> {posted_date} </span>
                                <span className="flex items-center gap-2 text-sm md:text-base font-medium "><BiCategoryAlt className="text-xl"></BiCategoryAlt> {category} </span>
                            </div>
                            <button className=" text-[#F01543] w-full px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;