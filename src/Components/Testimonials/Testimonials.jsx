// Imported Items ........

import { FaArrowLeft } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";

import { FaRegComment } from "react-icons/fa";

import "swiper/css/bundle";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import ReviewCard from '../Review Card/ReviewCard';



const Testimonials = () => {


    const [swiperInitialized, setSwiperInitialized] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 2);


    const handleNextButtonClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrevButtonClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };


    const handleSwiperInit = (swiperInstance) => {
        setSwiper(swiperInstance);
        setSwiperInitialized(true);
    };

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);



    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    const cardsInfo = [
        {
            id: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
            title: "BIG MAGIC",
            auther: "by Elizabeth Gilbert",
            color: "#EB5757",
            details:
                "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. Gilbert’s books for years.",
        },
        {
            id: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg",
            title: "Ten Thousand Skies Above",
            auther: "by Claudia Gray",
            color: "#A4E0EB",
            details:
                "The hunt for each splinter of Paul's soul sends Marguerite racing through Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. a war-torn San Francisco.",
        },
        {
            id: 3,
            img: "https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg",
            title: "A Tale For The Time Being",
            auther: "by Ruth Ozeki",
            color: "#EDB9D6",
            details:
                "In Tokyo, sixteen-year-old Nao has decided there’s only Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. one escape from her aching loneliness and her classmates’ bullying.",
        },
        {
            id: 4,
            img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
            title: "The Great Gatsby",
            auther: "by F.Scott Fitzgerald",
            color: "#FDCA95",
            details:
                "The Great Gatsby, F. Scott Fitzgerald’s third Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. book, stands as the supreme achievement of his career.",
        },
        {
            id: 5,
            img: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
            title: "After You",
            auther: "by Jojo Moyes",
            color: "#CBB5E2",
            details:
                "Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent.",
        },
    ];


    return (
        <>

            <div className="container mx-auto">
                <div className=" mx-4 space-y-9">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="text-left flex-1 space-y-3 lg:space-y-6">
                            <h1 className="text-2xl md:text-4xl font-bold text-[#F01543] ">REVIEWS ABOUT US</h1>
                            <p className="text-[12px] md:text-[16px] lg:text-[18px] leading-5 md:leading-7 lg:leading-8 md:w-2/4 lg:w-5/6 xl:w-2/3 mx-auto md:ml-0">While mirth large of on front. Ye he greater related adapted proceed entered an.</p>
                        </div>
                        <div className="flex-1 flex lg:flex-row justify-between items-center lg:justify-end gap-3  lg:gap-4">
                            <div className="flex gap-3">
                                <button onClick={handlePrevButtonClick} className="px-8 hover:bg-[#F01543] rounded hover:text-white font-bold hover:py-3.5 text-sm md:text-base lg:text-lg   border-[#F01543] text-[#F01543] border-2 py-4 bg-transparent duration-500 "><FaArrowLeft></FaArrowLeft></button>
                                <button onClick={handleNextButtonClick} className="px-8 hover:bg-[#F01543] rounded hover:text-white font-bold hover:py-3.5 text-sm md:text-base lg:text-lg   border-[#F01543] text-[#F01543] border-2 py-4 bg-transparent duration-500 "><FaArrowRight></FaArrowRight></button>
                            </div>
                            <button className="flex items-center gap-3 px-8 bg-[#F01543] rounded text-white font-bold py-3 text-sm md:text-base lg:text-lg hover:bg-transparent border-[#F01543] border-2 hover:text-[#F01543] focus:text-[#F01543]  focus:py-3 focus:bg-transparent duration-500 "><FaRegComment></FaRegComment>ALL REVIEWS</button>
                        </div>
                    </div>
                    {/* <div className="md:hidden">
                        <Swiper
                            direction="horizontal"
                            spaceBetween={13}
                            onSwiper={handleSwiperInit}
                            controller={{ control: swiper => (window.swiper = swiper) }}
                            slidesPerView={1}
                        >
                            {swiperInitialized ? (
                                cardsInfo.map((cardInfo) => (
                                    <SwiperSlide key={cardInfo.id}>
                                        <ReviewCard cardinfo={cardInfo}></ReviewCard>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <div className="w-full flex justify-center items-center">
                                    <div className="book">
                                        <div className="book__pg-shadow"></div>
                                        <div className="book__pg"></div>
                                        <div className="book__pg book__pg--2"></div>
                                        <div className="book__pg book__pg--3"></div>
                                        <div className="book__pg book__pg--4"></div>
                                        <div className="book__pg book__pg--5"></div>
                                    </div>
                                </div>
                            )}
                        </Swiper>
                    </div> */}
                    <div className="">
                        <Swiper
                            direction="horizontal"
                            spaceBetween={13}
                            onSwiper={handleSwiperInit}
                            controller={{ control: swiper => (window.swiper = swiper) }}
                            slidesPerView={slidesPerView}
                        >
                            {swiperInitialized ? (
                                cardsInfo.map((cardInfo) => (
                                    <SwiperSlide key={cardInfo.id}>
                                        <ReviewCard cardinfo={cardInfo}></ReviewCard>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <div className="w-full flex justify-center items-center">
                                    <div className="book">
                                        <div className="book__pg-shadow"></div>
                                        <div className="book__pg"></div>
                                        <div className="book__pg book__pg--2"></div>
                                        <div className="book__pg book__pg--3"></div>
                                        <div className="book__pg book__pg--4"></div>
                                        <div className="book__pg book__pg--5"></div>
                                    </div>
                                </div>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;