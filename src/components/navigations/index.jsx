import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Home from "../../assets/Images/sidenav/HouseLine.svg";
export default function Navigations() {

  const navigate = useNavigate();
  const params = useLocation()
  const current_path = params.pathname

  return (
    <div className="bg-black  h-screen">
      <div className="navigation">
        <div className={`menu text-center py-3 leading-4 ${current_path === '/' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/')} type='button' className={`leading-4 ${current_path === '/' ? 'text-primary ' : ''}`}>
            <div className="icon flex justify-center">
              <img src={Home} alt="home" />
            </div>
            <span className="text-xs">Home</span>
          </button>
        </div>
        

      </div>
    </div>
  )
}