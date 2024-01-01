import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { Link } from ".";

function Download({ qrValue }) {
  const qrCodeRef = useRef();

  const handleDownloadClick = () => {
    const qrCodeElement = qrCodeRef.current;

    toPng(qrCodeElement)
      .then(function (dataUrl) {
        saveAs(dataUrl, "qrcode.png");
      })
      .catch(function (error) {
        console.error("Error converting to image", error);
      });
  };

  return (
    <div className="center">
      <QRCode ref={qrCodeRef} value={qrValue} />
      <Link linkValue={qrValue} />
      <button onClick={handleDownloadClick}>
        Download QR Code
      </button>
    </div>
  );
}

export default Download;
