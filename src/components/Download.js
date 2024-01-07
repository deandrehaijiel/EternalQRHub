import React, { useState, useRef, useEffect, useMemo } from "react";
import QRCodeStyling from "qr-code-styling";
import { Link } from ".";

function Download({ qrValue }) {
  const [fileExt, setFileExt] = useState("png");
  const [selectedImage, setSelectedImage] = useState(null);
  const qrCodeRef = useRef();

  const qrCode = useMemo(() => {
    return new QRCodeStyling({
      width: 300,
      height: 300,
      data: qrValue,
      image: selectedImage,
    });
  }, [qrValue, selectedImage]);

  useEffect(() => {
    qrCode.append(qrCodeRef.current);
    return () => {};
  }, [qrCode]);

  useEffect(() => {
    qrCode.update({
      data: qrValue,
      image: selectedImage,
    });
  }, [qrCode, qrValue, selectedImage]);

  const handleExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div className="center">
      <div ref={qrCodeRef}></div>
      <Link linkValue={qrValue} />
      <input style={{ marginBottom: "30px" }} type="file" accept="image/*" onChange={handleImageChange} />
      <select style={{ marginBottom: "30px" }} onChange={handleExtensionChange} value={fileExt}>
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WEBP</option>
      </select>
      <button onClick={handleDownloadClick}>
        Download QR Code
      </button>
    </div>
  );
}

export default Download;
