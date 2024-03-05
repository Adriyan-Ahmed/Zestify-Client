const OurCategories = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4  space-y-9">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
                        <h1 data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" 
                            className="text-2xl md:text-4xl font-bold text-[#F01543] ">OUR CATEGORIES</h1>
                        <button data-aos="fade-left"
                                data-aos-offset="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" 
                                className="px-8 py-3.5 text-sm md:text-base lg:text-lg font-semibold border-2 rounded btn-1 hover:text-white hover:border-[#F01543] duration-1000 ">See More</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default OurCategories;