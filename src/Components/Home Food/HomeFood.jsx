import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from "axios";
import FoodCard from "../Food Card/FoodCard";

const HomeFood = () => {
    
    const [foods, setFoods] = useState([]);

    const [block, setBlock] = useState(6)


    const Categories = [

        {
            id: 0,
            name: "All Foods"
        },
        {
            id: 1,
            name: "Breakfast"
        },
        {
            id: 2,
            name: "Lunch"
        },
        {
            id: 3,
            name: "Dinner"
        },
        {
            id: 4,
            name: "beverages"
        }
    ];
    const [tabs, setTabs] = useState(Categories[0])

    const url = tabs.name === Categories[0].name ? "http://localhost:5000/api/v1/menu" : `http://localhost:5000/api/v2/menu?category=${tabs.name}`
    useEffect(() => {
        axios.get(url)
            .then(res => setFoods(res.data))
    }, [tabs])


    console.log(foods);

    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="space-y-9">
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" className="w-9/12 md:w-7/12 xl:w-4/12 mx-auto text-center space-y-3 lg:space-y-6 mb-5 md:mb-10 xl:mb-14">
                            <h1 className="text-2xl md:text-4xl font-bold text-[#F01543] ">FEATURED FOODS</h1>
                            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">Browse a Variety of Job Opportunities Categorized for Your Convenience. Find Your Dream Job in the Industry of Your Choice.</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" className="flex gap-2 md:gap-5 xl:gap-7 items-center justify-center">
                            {
                                Categories.map(Category => <button key={Category.id} onClick={() => setTabs(Category)} className={tabs.id === Category.id ? ` py-2 md:py-3 px-3 md:px-6 lg:px-9 relative rounded` : `btn-border py-2 md:py-3 px-3 md:px-6 lg:px-9 font-bold text-xs md:text-sm `}>
                                    {
                                        tabs.id === Category.id && <motion.div layoutId="active category" className={`absolute inset-0 b bg-[#F01543] rounded-md`} />
                                    }
                                    <span className={tabs.id === Category.id ? `relative text-white font-bold text-xs md:text-sm` : `relative card-title-design font-bold text-xs md:text-sm`} >{Category.name}</span>

                                </button>)
                            }
                        </div>
                        <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-5">
                            {
                                foods.slice(0, block ).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                            }
                        </div>
                        <div className="text-center ">
                            <button onClick={() => setBlock(foods.length)} className={`${block == foods.length || !foods.length ? 'hidden' : 'visible'} bg-[#F01543]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded`}>
                                Show More
                            </button>
                            <button onClick={() => setBlock(6)} className={`${block == foods.length ? 'bg-[#F01543]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded' : 'hidden'} `}>
                                Show Less
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFood;