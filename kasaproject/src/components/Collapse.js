import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isSelected, setIsSelected] = useState(true);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="collapse">
      <div className="title" onClick={toggleSelection}>
        <h4>{title}</h4>
        <FontAwesomeIcon icon={isSelected ? faChevronUp : faChevronDown} />
      </div>
      <div className={isSelected ? "content show" : "content"}>{content}</div>
    </div>
  );
};

export default Collapse;
