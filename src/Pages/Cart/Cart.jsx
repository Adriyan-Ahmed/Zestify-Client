import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AuthContext } from "../../Contexts/Authentication/Authentication";

const Cart = () => {


    const [usersFood, setUsersFood] = useState([]);


    const { User } = useContext(AuthContext);


    useEffect(() => {

        axios.get(`http://localhost:5000/api/v1/cart?email=${ User.email }`)

        .then(res => setUsersFood(res.data));

    }, [])
    return (
        <>
            <section>
                <div style={{ backgroundImage: `url('https://i.ibb.co/wYnDMD1/Footers-bg.png')` }} className="text-center py-10 md:py-16 lg:py-28 space-y-4 md:space-y-6 lg:space-y-10 bg-no-repeat bg-cover">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-white">FOOD CART</h1>
                    <h3 className="py-3.5 px-6 md:py-5 md:px-16 bg-gray-600 bg-opacity-50 text-base md:text-base inline-block rounded-[4px] font-semibold text-white"><span className="flex items-center gap-2"><MdOutlineDashboardCustomize></MdOutlineDashboardCustomize> DASHBOARD <IoIosArrowForward></IoIosArrowForward> CART </span></h3>
                </div>
            </section>
            <section>

            </section>
        </>
    );
};

export default Cart;