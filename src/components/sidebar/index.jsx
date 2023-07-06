import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../../components/hooks/useWindowDimensions"
import { Tooltip } from "antd";


const sideBarMenu = [
  {
    id: 1,
    name: "Expenses",
    path: "expenses",
    // image: homeIcon,
  },
 
];



export default function SideBar() {
  const { height, width } = useWindowDimensions();

  const [showSideBar, setShowSideBar] = useState(true);
  const [showLess, setShowLess] = useState({
    isShow: true,
    showLength: sideBarMenu.length,
  });  
  return (
    <>
      {showSideBar ? (
        <div className="w-40 border-r border-gray-50 h-screen bg-white flex flex-col">
          
          <h1 className="font-bold text-base text-center pt-5">Account</h1>
          <div className="py-3  ">
            {sideBarMenu
              .slice(0, showLess.showLength)
              .map((sideMenu, index) => {
                return (
                  <div className="flex  hover:bg-gray-100">
                    <div className=" flex  flex-row items-center">
                     
                      <Link className="px-12 py-4" to={`/${sideMenu.path}`}>
                        {sideMenu.name}
                      </Link>
                    </div>
                  </div>
                );
              })}
           
          </div>
        </div>
      ) : (
        <>
          {width > 446 ? (
            <div className="w-12 items-center border-r border-gray-200 h-screen bg-white flex flex-col">
              <div
                className="cursor-pointer rotate-180"
                onClick={() => setShowSideBar(true)}
              >
                <i className="ri-arrow-left-s-line text-2xl"></i>
                <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
              </div>
              {sideBarMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                  <Tooltip title={`${item.name}`} placement='right'>
                  <img
                      className="max-w-none"
                      src={item.image}
                      alt={`item-${item.id}`}
                    />
                  </Tooltip>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="cursor-pointer rotate-180"
              onClick={() => setShowSideBar(true)}
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
              <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
            </div>
          )}
        </>
      )}
    </>
  );
}