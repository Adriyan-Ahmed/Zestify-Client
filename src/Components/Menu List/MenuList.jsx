import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../Food Card/FoodCard";

const MenuList = () => {



    const [foods, setFoods] = useState([]);




    useEffect(() => {
        
        axios.get('http://localhost:5000/api/v1/menu')
        
        .then(res => setFoods(res.data))
    
    }, [])

console.log(foods);


    return (
        <>
            <div className="container mx-auto">
                <div className="mx-4">
                    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
                        {
                            foods.slice(0,10).map(food => <FoodCard key={food._id} food={food}></FoodCard> )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuList;