import React from "react";

const Icon = ({ children, iconName, onClickHandler }) => {
  return (
    <span onClick={onClickHandler}>
      <i className={`fa-solid fa-${iconName}`}></i> {children}
    </span>
  );
};

export default Icon;
