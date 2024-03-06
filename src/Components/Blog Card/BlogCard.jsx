import { MdOutlineDateRange } from "react-icons/md";

const BlogCard = ({blog}) => {
    

    console.log(blog);
    const {title, banner_image, images, tags, category, posted_date, author, descriptions, goal_descriptions} = blog;
    return (
        <>
            <div className=" flex flex-col justify-between gap-5 ">
                <div>
                    <img className="w-full rounded " src={banner_image} alt="" />
                </div>
                <div className="flex-1 flex-flex-col gap-3 justify-between">
                    <div className="h-full flex flex-col gap-3 justify-between">
                        <h1 className="text-xl font-bold">{title}</h1>
                        <p className="text-sm md:text-base font-medium ">{descriptions.description1.slice(0, 80)} ...</p>
                        <div className=" py-3 border-t border-b">
                            <span className="flex items-center gap-2 text-sm md:text-base font-medium "><MdOutlineDateRange className="text-xl"></MdOutlineDateRange> {posted_date} </span>
                        </div>
                        <button className=" text-[#F01543] w-full px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border rounded btn-1 hover:text-white border-[#F01543] duration-1000 ">See More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;