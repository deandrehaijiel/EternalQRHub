import React, { useState } from "react";
import { Title, Input, QR, Footer } from "./components";

function App() {
  const [qrValue, setQrValue] = useState("https://linktr.ee/deandrehaijiel");

  const handleInputChange = (value) => {
    setQrValue(value);
  };

  return (
    <>
      <Title />
      <div className="center transition-in">
        <Input onInputChange={handleInputChange} />
        <QR qrValue={qrValue} />
      </div>
      <Footer />
    </>
  );
}

export default App;