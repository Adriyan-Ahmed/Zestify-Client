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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        <div data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" 
                            className="flex items-center gap-4 p-5 bg-[#F4F4F6] rounded-md slide-to-right category-item ">
                            <div id="icon-container" className="p-5  rounded-3xl duration-500">
                                <img id="default-icon" className="w-16 h-16" src="https://i.ibb.co/Gnwz68G/burger-750924.png" alt="" />
                                <img id="hover-icon" className="w-16 h-16 " src="https://i.ibb.co/CJXnrM1/burger-944801.png" alt="" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-xl font-bold">Bacon Burger</h1>
                                <p className="font-medium">16 Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurCategories;