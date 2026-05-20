import { useState } from "react";
import { Cart } from "@boxicons/react";
import logo from '../../assets/favicon.svg'
import CartWidget from "./CartWidget";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";



const Navbar = ({ cantidad }) => {



    return (
        <div className="navbar bg-base-100 shadow-sm pl-5">
            <div className="flex-1">
                <Link to='productos/' className="flex items-center gap-1 cursor-pointer font-bold w-50">
                    <img src={logo} alt="" className="h-10 w-auto rounded-full"/>
                    Optica Glasses
                </Link>
            </div>
            <div className="flex-none pr-4">
                <CartWidget cantidad={cantidad} />
                <Avatar />
            </div>
        </div>
    );
};


export default Navbar;