import React from "react";

export default ({ placeholder, type, value, handleInput, name }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
    />
  );
};