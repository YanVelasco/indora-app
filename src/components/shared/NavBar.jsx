import { Link, useLocation } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Badge } from "@mui/material";
import { useState } from "react";

export const NavBar = () => {
    const path = useLocation().pathname;
    const [navBar, setNavBar] = useState(false);

    return (
        <div className="h-[70px] bg-custom-gradient text-white flex items-center z-50 sticky top-0 w-full px-4 lg:px-14 sm:px-8">
            <Link to={'/'} className="flex items-center text-2xl font-bold">
                <FaStore className="mr-2 text-3xl" />
                <span className="font-[Poppins]">E-SHOP</span>
            </Link>

            <div className="flex items-center ml-auto">
                <ul className={`sm:flex sm:gap-4 gap-4 
                text-white absolute sm:static left-0 top-[70px] w-full sm:w-auto sm:bg-none ${navBar ? 'bg-custom-gradient' : 'bg-transparent'} shadow-md sm:shadow-none sm:flex-row flex-col px-4 sm:px-0 transition-all duration-300 ease-in-out ${
                    navBar ? 'h-fit py-4 space-y-4' : 'h-0 py-0 overflow-hidden sm:h-auto sm:py-4'
                }`}>
                    <li className="font-[500] transition-all duration-100">
                        <Link to={'/'} className={`${path === '/' ? 'text-white font-semibold' : 'text-gray-200'}`}>
                            Home
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-100">
                        <Link to={'/products'} className={`${path === '/products' ? 'text-white font-semibold' : 'text-gray-200'}`}>
                            Products
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-100">
                        <Link to={'/about'} className={`${path === '/about' ? 'text-white font-semibold' : 'text-gray-200'}`}>
                            About
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-100">
                        <Link to={'/contact'} className={`${path === '/contact' ? 'text-white font-semibold' : 'text-gray-200'}`}>
                            Contact
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-100">
                        <Link to={'/cart'} className={`${path === '/cart' ? 'text-white font-semibold' : 'text-gray-200'}`}>
                            <Badge showZero badgeContent={0} color="primary">
                                <FaShoppingCart size={25} />
                            </Badge>
                        </Link>
                    </li>
                    <li className="font-[500] transition-all duration-100">
                        <Link to={'/login'} className="flex items-center space-x-2 px-4 bg-gradient-to-r from-purple-600 to-red-400 rounded-md py-1 text-white hover:from-purple-500 hover:to-red-400 transition-all duration-300 ease-in-out">
                            <FaSignInAlt size={25} />
                            <span>Login</span>
                        </Link>
                    </li>
                </ul>

                <button onClick={() => setNavBar(!navBar)} className="sm:hidden flex items-center ml-4 cursor-pointer">
                    {navBar ? (
                        <RxCross2 size={25} className="text-white" />
                    ) : (
                        <IoIosMenu size={25} className="text-white" />
                    )}
                </button>
            </div>
        </div>
    );
};
