import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { RiRestaurant2Line } from "react-icons/ri";
import { IoIosSearch, IoMdAdd } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {


    const Links = [
        <NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 py-2.5 px-5 text-[#F01543] font-semibold text-sm md:text-base rounded w-full flex items-center gap-2 ` : `bg-transparent py-2.5 px-5 font-semibold text-gray-600 text-sm md:text-base  rounded w-full flex items-center gap-2 `} to="profile" ><CgProfile></CgProfile><span>PROFILE</span></NavLink>,
        <NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 py-2.5 px-5 text-[#F01543] font-semibold text-sm md:text-base rounded w-full flex items-center gap-2 ` : `bg-transparent py-2.5 px-5 font-semibold text-gray-600 text-sm md:text-base  rounded w-full flex items-center gap-2 `} to="cart" ><MdAddShoppingCart></MdAddShoppingCart><span>MY CART</span></NavLink>,
        <NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 py-2.5 px-5 text-[#F01543] font-semibold text-sm md:text-base rounded w-full flex items-center gap-2 ` : `bg-transparent py-2.5 px-5 font-semibold text-gray-600 text-sm md:text-base  rounded w-full flex items-center gap-2 `} to="/add-food" ><span className="flex items-start"><RiRestaurant2Line></RiRestaurant2Line><IoMdAdd className="text-[10px] -ml-1"></IoMdAdd></span> <span>ADD FOOD</span></NavLink>,
        <NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 py-2.5 px-5 text-[#F01543] font-semibold text-sm md:text-base rounded w-full flex items-center gap-2 ` : `bg-transparent py-2.5 px-5 font-semibold text-gray-600 text-sm md:text-base  rounded w-full flex items-center gap-2 `} to="add-food" >ADD FOOD</NavLink>,
    ]



    return (
        <>
            <div>
                <div>
                    <div className="min-h-screen  bg-blue-500">
                        <nav className="fixed top-0 left-0 h-[100%] w-[250px] bg-white space-y-14 z-10 ">
                            <div className="flex items-center pl-4 pt-2">
                                <img className=" h-14" src="https://i.ibb.co/4MjkZCX/Zestify-Logo.png" alt="LOGO" />
                                <h1 className=" text-sm md:text-lg lg:text-lg xl:text-xl font-bold">Zestify</h1>
                            </div>
                            <div className="h-full">
                                <ul className="menu menu-sm dropdown-content rounded-md space-y-3 h-full flex flex-col justify-between ">
                                    <div className="space-y-3">
                                        {
                                            Links.map((Link, i) => <li key={i}>{Link}</li>)
                                        }
                                    </div>
                                    <div className="pb-32 space-y-3 ">
                                        <li className=" font-semibold rounded w-full "><span className="flex items-center gap-2 py-2.5 px-5 rounded"><IoLogOutOutline className="text-2xl"></IoLogOutOutline> <span className="text-sm md:text-base">LOGOUT</span></span></li>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;