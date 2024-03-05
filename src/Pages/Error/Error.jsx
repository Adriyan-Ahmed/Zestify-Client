import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="container mx-auto min-h-screen overflow-hidden">
                <div className="mx-4 min-h-screen flex justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 py-10">
                        <div className="flex-1 ">
                            <img className="scale-150" src="https://i.ibb.co/kS8hgBZ/ezgif-4-3bbdbf4c2e.gif" alt="" />
                        </div>
                        <div data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            className="flex-1 relative text-center md:text-left ">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl xl:leading-normal font-bold mt-3 mb-6 ">Oops, <br /> <span className="text-[#F01543]">Nothing</span> Here ...</h1>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-loose ">Ur oh, we can't find the page you're looking for. Try going back to previous page or contact us for more information.</p>                            
                            <Link to="/">
                                <button className="px-8 py-3.5 text-sm md:text-base text-[#F01543] lg:text-lg font-semibold border-2 border-[#F01543] rounded btn-1 hover:text-white hover:border-[#F01543] duration-1000 ">Go To Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;