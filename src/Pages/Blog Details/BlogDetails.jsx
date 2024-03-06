import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const BlogDetails = () => {
    return (
        <>
            <section>
                <div style={{ backgroundImage: `url('https://i.ibb.co/wYnDMD1/Footers-bg.png')` }} className="text-center py-10 md:py-16 lg:py-28 space-y-4 md:space-y-6 lg:space-y-10 bg-no-repeat bg-cover">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white">BLOG</h1>
                    <h3 className="py-3.5 px-6 md:py-5 md:px-16 bg-gray-600 bg-opacity-50 text-base md:text-base inline-block rounded-[4px] font-semibold text-white"><span className="flex items-center gap-2"><IoHomeOutline></IoHomeOutline> HOME <IoIosArrowForward></IoIosArrowForward> BLOG <IoIosArrowForward></IoIosArrowForward> DETAILS  </span></h3>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;