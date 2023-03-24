import React, { useState } from "react";
import { ReactComponent as ChevronDown } from "../assets/chevron_down.svg";
import { ReactComponent as ChevronUp } from "../assets/chevron_up.svg";

const Collapse = ({ title, content }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="collapse">
      <div className="title" onClick={toggleSelection}>
        <h4>{title}</h4>
        {isSelected ? <ChevronDown fill="white" /> : <ChevronUp fill="white" />}
      </div>
      <div className={isSelected ? "content show" : "content"}>{content}</div>
    </div>
  );
};

export default Collapse;
