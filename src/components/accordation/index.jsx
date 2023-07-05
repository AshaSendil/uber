import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="border-t-2 border-gray-500 flex justify-between">
        <h3 className="hover:text-decorative hover:underline font-m text-xl leading-[5rem]">{title}</h3>
        <span className="font-m text-xl leading-[5rem]">{expanded ? <KeyboardArrowUpIcon className='font-m'/> : <KeyboardArrowDownIcon/>}</span>
        </div>
      </div>
      {expanded && (
        <div className="accordion-content text-center">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
