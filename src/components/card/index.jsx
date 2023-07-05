import React from "react";

const Card = ({ children, cardStyle }) => {
  return (
    <div className={`overflow-visible relative w-full border border-gray-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] ${cardStyle}`}>
      {children}
    </div>
  );
};

export default Card;
