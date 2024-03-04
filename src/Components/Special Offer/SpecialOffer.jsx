//  Imported items ..........

import { FaArrowTrendUp } from "react-icons/fa6";


const SpecialOffer = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4 space-y-9">
                    <div data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine" 
                        className="text-center lg:text-left space-y-6 ml-10 pl-10 border-[#F01543] border-l-8">
                        <h1 className="text-2xl md:text-4xl font-bold text-[#F01543] ">SPECIAL OFFERS</h1>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-9 font-medium md:w-96 ">We are providing you best food. Here are some Special Offers for you. We hope you will enjoy it.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-4 ">
                        <div data-aos="fade-up"
                             data-aos-duration="2000" 
                             className="flex flex-col md:flex-row items-center gap-3 py-8  border-2 overflow-hidden md:max-w-[660px] mx-auto ">
                            <div className="space-y-5 md:flex-[1] text-center md:text-left md:pl-8">
                                <h1 className="text-5xl font-bold flex items-center justify-center md:justify-normal gap-1"><span className="text-2xl font-semibold">-</span> 50 <span className="text-xl">%</span></h1>
                                <h4 className="text-xl font-bold">Discount for all burgers!</h4>
                                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium ">Limited Offer Only for you.</p>
                                <div>
                                    <button className=" mx-auto md:ml-0 flex items-center gap-3 px-8 bg-[#F01543] rounded text-white font-bold py-3.5 text-sm md:text-base lg:text-lg hover:bg-transparent hover:py-3 border-[#F01543] hover:border-2 hover:text-[#F01543] focus:text-[#F01543] focus:border-2 focus:py-2.5 focus:bg-transparent duration-500 ">
                                        <FaArrowTrendUp></FaArrowTrendUp>
                                        <span>Get it now</span>
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex-[1] relative">
                                <img className="bounce-image max-h-[400px]" src="https://i.ibb.co/Z6SH2CG/burger.png" alt="" />
                                <div className=" w-14 h-14 mx-auto rounded  border-8  absolute bg-transparent border-[#F01543] bounce-image -bottom-10 right-4 "></div>
                                <div className=" w-14 h-14 mx-auto rounded  border-8  absolute bg-transparent border-[#F01543] bounce-image -top-10 left-4 "></div>
                            </div>
                        </div>
                        <div 
                             data-aos="fade-up"
                             data-aos-duration="2000"
                             className="flex flex-col md:flex-row items-center gap-3 py-8  border-2 overflow-hidden md:max-w-[660px] mx-auto ">
                            <div className="space-y-5 md:flex-[3] text-center md:text-left md:pl-8">
                                <h4 className="text-xl font-bold">Visit Zestify & get your coffee</h4>
                                <h1 className="text-5xl font-bold ">For Free</h1>
                                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">This is a welcome drink for our coustomers.</p>
                                <div>
                                    <button className=" mx-auto md:ml-0 flex items-center gap-3 px-8 bg-[#F01543] rounded text-white font-bold py-3.5 text-sm md:text-base lg:text-lg hover:bg-transparent hover:py-3 border-[#F01543] hover:border-2 hover:text-[#F01543] focus:text-[#F01543] focus:border-2 focus:py-2.5 focus:bg-transparent duration-500 ">
                                        <FaArrowTrendUp></FaArrowTrendUp>
                                        <span>Get it now</span>
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex-[2] relative">
                                <img className="bounce-image w-8/12 mx-auto" src="https://i.ibb.co/9gkxSp4/Coffee-cup.png" alt="" />
                                <div className=" w-14 h-14 mx-auto rounded  border-8  absolute bg-transparent border-[#F01543] bounce-image -bottom-10 left-4 "></div>
                                <div className=" w-14 h-14 mx-auto rounded  border-8  absolute bg-transparent border-[#F01543] bounce-image -top-10 right-4 "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialOffer;