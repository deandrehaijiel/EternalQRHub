import React, { useState } from "react";

function Input({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return ( 
    <div style={{ display: "inline" }}>
      <strong>Text: &nbsp;</strong><input style={{ marginTop: '10px' }} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default Input;
