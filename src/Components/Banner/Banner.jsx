const Banner = () => {
    return (
        <>
            <div className=" bg-opacity-90 bg-cover bg-no-repeat  " style={{ backgroundImage: "url('https://i.ibb.co/wYnDMD1/Footers-bg.png')" }} >
                <div>
                    <div className=" container mx-auto bg-cover bg-no-repeat text-white " >
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 py-10">
                            <div className="flex-1 text-center md:text-left mx-4">
                                <div className=" xl:w-[600px] mx-auto ">
                                    <h5 className=" text-base md:text-lg xl:text-2xl font-semibold text-[#F01543] ">Gastronome Haven</h5>
                                    <h1 className="text-2xl md:text-[23px] lg:text-3xl xl:text-6xl xl:leading-normal font-bold mt-3 mb-6 ">A Symphony of <span className=" text-[#F01543] ">Culinary</span>  Delights</h1>
                                    <p className="text-sm md:text-sm xl:text-lg font-medium">Embark on a culinary journey at Gastronome Haven. Indulge in a symphony of flavors, where every bite tells a story.</p>
                                    <div className="mt-3 lg:mt-5 xl:mt-6">
                                        <button className="px-10 bg-[#F01543] rounded-md text-white font-bold py-3.5 text-sm md:text-base xl:text-lg hover:bg-transparent hover:py-2.5 border-[#F01543] hover:border-2 hover:text-[#F01543] focus:text-[#F01543] focus:border-2 focus:py-2.5 focus:bg-transparent duration-500 ">Our Menu</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 mx-4">
                                <img className="mx-auto rotate-image w-full" src="https://i.ibb.co/2YnYn10/delicious-cheese-pizza-isolated-transparent-background-84443-1205-removebg-preview-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;