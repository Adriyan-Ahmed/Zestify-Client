// -------------------------------- //
// -------- Imported Items -------- //
// -------------------------------- //

import { Link, NavLink } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";




const Navbar = () => {



    const Links = [
        <NavLink className={({ isActive }) => isActive ? ` bg-[#F01543] bg-opacity-10 lg:bg-transparent py-2.5 px-5 text-[#F01543] lg:border-b-2 lg:border-[#F01543] font-bold text-sm md:text-base rounded lg:rounded-none` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/" >HOME</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#0FCFEC] bg-opacity-10 py-2.5 px-5 text-[#0FCFEC] font-bold text-sm md:text-base rounded` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/add-product" >ADD PRODUCT</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#0FCFEC] bg-opacity-10 py-2.5 px-5 text-[#0FCFEC] font-bold text-sm md:text-base rounded` : `bg-transparent py-2.5 px-5 font-bold text-sm md:text-base  rounded `} to="/my-cart" >MY CART</NavLink>,
    ]



    return (
        <>
            <section className="">
                <div className="container mx-auto">
                    <div className="navbar py-3 md:py-4 lg:py-6">
                        <div className="navbar-start space-x-3">
                            <Link className=" hidden xl:flex">
                                <div className="flex items-center gap-2">
                                    <img className=" h-14" src="https://i.ibb.co/4MjkZCX/Zestify-Logo.png" alt="LOGO" />
                                    <h1 className=" text-sm md:text-base lg:text-lg xl:text-xl font-bold">Zestify</h1>
                                </div>
                            </Link>
                            <div className="dropdown xl:hidden ">
                                <label tabIndex={0} className="btn btn-ghost btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200  shadow-md rounded-md w-52 z-10 gap-3">
                                    <Link className="">
                                        <div className="flex items-center justify-center gap-0">
                                            <img className=" h-14" src="https://i.ibb.co/4MjkZCX/Zestify-Logo.png" alt="LOGO" />
                                            <h1 className=" text-sm md:text-lg lg:text-lg xl:text-xl font-bold">Zestify</h1>
                                        </div>
                                    </Link>
                                    {
                                        Links.map((Link, i) => <li key={i}>{Link}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="hidden xl:flex">
                                <nav className="flex items-center gap-3">
                                    {
                                        Links.map((Link, i) => <span key={i}>{Link}</span>)
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className="navbar-end">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                                    <MdOutlineAddShoppingCart className="text-2xl"></MdOutlineAddShoppingCart>
                                    </div>
                                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                        <div className="card-body">
                                            <span className="font-bold text-lg">8 Items</span>
                                            <span className="text-info">Subtotal: $999</span>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square avatar">
                                        <div className="w-10 rounded-lg">
                                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div >
            </section>
        </>
    );
};

export default Navbar;