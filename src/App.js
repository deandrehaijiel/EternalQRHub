import React, { useState } from "react";
import { Title, Input, Download } from "./components";

function App() {
  const [qrValue, setQrValue] = useState("https://linktr.ee/deandrehaijiel");

  const handleInputChange = (value) => {
    setQrValue(value);
  };

  return (
    <div className="center">
      <Title />
      <Input onInputChange={handleInputChange} />
      <Download qrValue={qrValue} />
    </div>
  );
}

export default App;