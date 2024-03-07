import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LuDollarSign } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";

const FoodDetails = () => {


    const [food, setFood] = useState({});

    const { id } = useParams();


    useEffect(() => {


        axios.get(`http://localhost:5000/api/v1/food?id=${id}`)

            .then(res => setFood(res.data));

    }, [])

    console.log(food);



    return (
        <>
            
        </>
    );
};

export default FoodDetails;