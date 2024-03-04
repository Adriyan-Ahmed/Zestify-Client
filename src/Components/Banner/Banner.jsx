const Banner = () => {
    return (
        <>
            <div className=" bg-opacity-90 bg-cover bg-no-repeat lg:min-h-screen  " style={{ backgroundImage: "url('https://i.ibb.co/wYnDMD1/Footers-bg.png')" }} >
                <div className="bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/X78bGM5/lot-red-hot-chili-peppers-white-background-68196-2337-Photoroom-png-Photoroom.png')"}} >
                    <div className=" container mx-auto text-white " >
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 py-10 md:py-20">
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" 
                                className="flex-1 text-center md:text-left mx-4">
                                <div className=" xl:w-[600px] mx-auto ">
                                    <h5 className=" text-base md:text-lg lg:text-2xl font-semibold text-[#FFFF00] ">Gastronome Haven</h5>
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl xl:leading-normal font-bold mt-3 mb-6 ">A Symphony of <span className=" text-[#F01543] ">Culinary</span>  Delights</h1>
                                    <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-loose ">Embark on a culinary journey at Gastronome Haven. Indulge in a symphony of flavors, where every bite tells a story.</p>
                                    <div className="mt-3 lg:mt-5 xl:mt-6">
                                        <button className="px-10 bg-[#F01543] rounded text-white font-bold py-3.5 text-sm md:text-base lg:text-lg hover:bg-transparent hover:py-2.5 border-[#F01543] hover:border-2 hover:text-[#F01543] focus:text-[#F01543] focus:border-2 focus:py-2.5 focus:bg-transparent duration-500 ">Our Menu</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 mx-4 overflow-hidden ">
                                <div className="">
                                    <img className="mx-auto rotate-image w-full " src="https://i.ibb.co/2YnYn10/delicious-cheese-pizza-isolated-transparent-background-84443-1205-removebg-preview-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;