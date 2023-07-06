import React, { useState } from 'react';
import User from '../../assets/Images/user.png';
import Dots from "../../assets/Images/sidenav/DotsNine.svg";
import Calendar from "../../assets/Images/sidenav/Calendar.svg";
import Setting from "../../assets/Images/sidenav/setting.svg";
import Help from "../../assets/Images/sidenav/help.svg";
import { Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [refreshToken, setrefreshToken] = useState('');
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const  Signout =  (e) =>{
        e.preventDefault();
        sessionStorage.clear();
        navigate("/")
    }
  
      
    return (
    <div className="w-full h-12">
    <nav className="bg-black rounded dark:bg-black">
        <div className="flex flex-wrap items-center mx-auto w-full justify-between md:justify-between lg:justify-between xl:justify-between">
           <div className='flex'>
            {/* <div className="leading-[48px] hover:bg-[#FAFAFA]">
                <button className="relative bottom-[3px] min-w-[68px]" title="App launcher" onClick={showDrawer}>
                    <img src={Dots} className="inline-block" alt="dots" />
                </button>
            </div> */}


            <div className="company-name flex items-center ml-3">
                <span className="text-white text-base font-semibold uppercase">Uber Clone</span>
            </div>

            <div className="search-box min-w-[408px] m-auto hidden md:block lg:block xl:block ml-5">
                <div className="flex relative items-center">
                    <input className="h-10 border border-solid rounded pr-8 pl-10 outline-none w-[468px]" placeholder="Search" />
                    <div className="left-[10px] absolute  w-3 h-3">
                        <i className={`ri-search-line ri-lg`}></i>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="right hidden md:flex lg:flex xl:flex h-[48px] justify-between">
                <div className="date flex items-center leading-[48px] hover:bg-[#FAFAFA]">
                    <button className="flex justify-center bg-white rounded-full h-8 justify-center items-center min-w-[64px]" title="Settings">
                        <img src={Setting} alt="setting" />
                    </button>
                </div>
                <div className="date flex items-center leading-[48px] hover:bg-[#FAFAFA]">
                    <button className="flex justify-center min-w-[64px] ml-2 bg-white rounded-full h-8 justify-center items-center"  title="Help">
                        <img src={Help} alt="setting"/>
                    </button>
                </div>
                <div className="group relative h-[48px] hover:bg-[#FAFAFA] block md:hidden lg:hidden xl:hidden">
                <button className="text-black rounded leading-[48px]">
                    <i className="ri-more-line ri-lg mr-1.5 leading-[55px]"></i>
                </button>
                <nav tabindex="0" className="absolute right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                    <ul className="py-1 PX-5">
                        <li>
                            <a href="/" className="block px-4 py-2 " title="My Day">
                                <i className="ri-calendar-check-fill ri-lg mr-1.5 align-sub"></i>
                                My Day
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block px-4 py-2" title="Settings">
                                <i className="ri-settings-5-fill  ri-lg mr-1.5 align-sub"></i>
                                Settings
                            </a>
                        </li>

                        <li>
                            <a href="/" className="block px-4 py-2" title="Help">
                                <i className="ri-question-fill ri-lg mr-1.5 align-sub"></i>
                                Help
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>

            <div className="group relative h-[48px] hover:bg-[#FAFAFA]">
                <button className="text-black rounded w-[32px] h-[32px] m-2 leading-[48px]">
                    <img src={User} className="rounded-full" alt="user" />
                </button>
                <nav tabindex="0" className="absolute right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                    <ul className="py-1 PX-5">
                        <li>
                            <a href="/sign-in" className="block px-4 py-2 ">
                                <i className="ri-user-line ri-lg mr-1.5 align-sub"></i>
                                My Account
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2" onClick={Signout}>
                                <i className="ri-logout-circle-r-line  ri-lg mr-1.5 align-sub"></i>
                                Signout
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>

            
        </div>
    </nav>
</div>
  )
}

