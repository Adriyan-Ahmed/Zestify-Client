import axios from "axios";
import { useEffect, useState } from "react";

const MenuList = () => {



    const [foods, setFoods] = useState([]);




    useEffect(() => {
        
        axios.get('http://localhost:5000/api/v1/menu')
        
        .then(res => setFoods(res.data))
    
    }, [])

console.log(foods);


    return (
        <>
            
        </>
    );
};

export default MenuList;