import React, { useState } from "react";

function Input({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return ( 
    <input style={{ marginBottom: '30px'}} type="text" value={inputValue} onChange={handleChange} />
  );
}

export default Input;
