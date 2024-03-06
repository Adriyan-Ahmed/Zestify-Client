import { IoIosArrowForward } from "react-icons/io";
import Blogs from "../../Components/Blogs/Blogs";
import { IoHomeOutline } from "react-icons/io5";

const Blog = () => {
    return (
        <>
            <section>
                <div style={{ backgroundImage: `url('https://i.ibb.co/wYnDMD1/Footers-bg.png')` }} className="text-center py-10 md:py-16 lg:py-28 space-y-4 md:space-y-6 lg:space-y-10 bg-no-repeat bg-cover">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white">BLOG</h1>
                    <h3 className="py-2.5 px-6 md:py-3.5 md:px-9 bg-black bg-opacity-50 text-xl md:text-2xl lg:text-text-3xl inline-block rounded-[4px] font-semibold text-white"><span className="flex items-center gap-2"><IoHomeOutline></IoHomeOutline> HOME <IoIosArrowForward></IoIosArrowForward> BLOG  </span></h3>
                </div>
            </section>
            <section>
                <Blogs></Blogs>
            </section>
        </>
    );
};

export default Blog;