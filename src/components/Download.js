import React, { useState, useRef, useEffect, useMemo } from "react";
import QRCodeStyling from "qr-code-styling";
import { Link } from ".";

function Download({ qrValue }) {
  const [isAdvancedMode, setIsAdvancedMode] = useState(true);

  const [fileExt, setFileExt] = useState("png");
  const [chosenImage, setChosenImage] = useState(null);

  const [dotsColor, setDotsColor] = useState("#4267b2");
  const [dotsColorType, setDotsColorType] = useState("single");
  const [dotsGradientType, setDotsGradientType] = useState(null);
  const [dotsGradientRotation, setDotsGradientRotation] = useState(0);
  const [dotsGradientStops, setDotsGradientStops] = useState([
    { offset: 0, color: "#4267b2" },
    { offset: 1, color: "#4267b2" },
  ]);
  const [dotsType, setDotsType] = useState("rounded");

  const [cornersSquareColor, setCornersSquareColor] = useState("#4267b2");
  const [cornersSquareColorType, setCornersSquareColorType] = useState("single");
  const [cornersSquareGradientType, setCornersSquareGradientType] = useState(null);
  const [cornersSquareGradientRotation, setCornersSquareGradientRotation] = useState(0);
  const [cornersSquareGradientStops, setCornersSquareGradientStops] = useState([
    { offset: 0, color: "#4267b2" },
    { offset: 1, color: "#4267b2" },
  ]);
  const [cornersSquareType, setCornersSquareType] = useState("dot");

  const [cornersDotColor, setCornersDotColor] = useState("#4267b2");
  const [cornersDotColorType, setCornersDotColorType] = useState("single");
  const [cornersDotGradientType, setCornersDotGradientType] = useState(null);
  const [cornersDotGradientRotation, setCornersDotGradientRotation] = useState(0);
  const [cornersDotGradientStops, setCornersDotGradientStops] = useState([
    { offset: 0, color: "#4267b2" },
    { offset: 1, color: "#4267b2" },
  ]);
  const [cornersDotType, setCornersDotType] = useState("dot");

  const qrCodeRef = useRef();

  const qrCode = useMemo(() => {
    return new QRCodeStyling({
      width: 300,
      height: 300,
      data: qrValue,
      image: chosenImage,
      dotsOptions: {
        color: dotsColor,
        dotsColorType: dotsColorType,
        gradient: {
          type: dotsGradientType,
          rotation: dotsGradientRotation,
          colorStops: dotsGradientStops,
        },
        type: dotsType,
      },
      cornersSquareOptions: {
        color: cornersSquareColor,
        cornersSquareColorType: cornersSquareColorType,
        gradient: {
          type: cornersSquareGradientType,
          rotation: cornersSquareGradientRotation,
          colorStops: cornersSquareGradientStops,
        },
        type: cornersSquareType,
      },
      cornersDotOptions: {
        color: cornersDotColor,
        cornersDotColorType: cornersDotColorType,
        gradient: {
          type: cornersDotGradientType,
          rotation: cornersDotGradientRotation,
          colorStops: cornersDotGradientStops,
        },
        type: cornersDotType,
      },
    });
  }, [
    qrValue,
    chosenImage,
    dotsColor,
    dotsColorType,
    dotsGradientType,
    dotsGradientRotation,
    dotsGradientStops,
    dotsType,
    cornersSquareColor,
    cornersSquareColorType,
    cornersSquareGradientType,
    cornersSquareGradientRotation,
    cornersSquareGradientStops,
    cornersSquareType,
    cornersDotColor,
    cornersDotColorType,
    cornersDotGradientType,
    cornersDotGradientRotation,
    cornersDotGradientStops,
    cornersDotType,
  ]);

  useEffect(() => {
    qrCode.append(qrCodeRef.current);
    return () => {};
  }, [qrCode]);

  useEffect(() => {
    qrCode.update({
      data: qrValue,
      image: chosenImage,
    });
  }, [qrCode, qrValue, chosenImage]);

  useEffect(() => {
    if (dotsColorType === 'single') {
      setDotsGradientType(null);
      setDotsGradientRotation(0);
      setDotsGradientStops([
        { offset: 0, color: dotsColor },
        { offset: 1, color: dotsColor },
      ]);
    }
  }, [dotsColorType, dotsColor]);

  useEffect(() => {
    if (cornersSquareColorType === 'single') {
      setCornersSquareGradientType(null);
      setCornersSquareGradientRotation(0);
      setCornersSquareGradientStops([
        { offset: 0, color: cornersSquareColor },
        { offset: 1, color: cornersSquareColor },
      ]);
    }
  }, [cornersSquareColorType, cornersSquareColor]);

  useEffect(() => {
    if (cornersDotColorType === 'single') {
      setCornersDotGradientType(null);
      setCornersDotGradientRotation(0);
      setCornersDotGradientStops([
        { offset: 0, color: cornersDotColor },
        { offset: 1, color: cornersDotColor },
      ]);
    }
  }, [cornersDotColorType, cornersDotColor]);

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'isAdvancedMode':
        setIsAdvancedMode(value);
        break;

      case 'dotsColor':
        setDotsColor(value);
        break;
      case 'dotsColorType':
        setDotsColorType(value);
        if (value === 'single') {
          setDotsGradientType(null);
          setDotsGradientRotation(null);
          setDotsGradientStops([
            { offset: 0, color: dotsColor },
            { offset: 1, color: dotsColor },
          ]);
        }
        break;
      case 'dotsGradientType':
        setDotsGradientType(value);
        break;
      case 'dotsGradientRotation':
        setDotsGradientRotation(value);
        break;
      case 'dotsGradientStops':
        setDotsGradientStops(value);
        break;
      case 'dotsType':
        setDotsType(value);
        break;
  
      case 'cornersSquareColor':
        setCornersSquareColor(value);
        break;
      case 'cornersSquareColorType':
        setCornersSquareColorType(value);
        if (value === 'single') {
          setCornersSquareGradientType(null);
          setCornersSquareGradientRotation(null);
          setCornersSquareGradientStops([
            { offset: 0, color: cornersSquareColor },
            { offset: 1, color: cornersSquareColor },
          ]);
        }
        break;
      case 'cornersSquareGradientType':
        setCornersSquareGradientType(value);
        break;
      case 'cornersSquareGradientRotation':
        setCornersSquareGradientRotation(value);
        break;
      case 'cornersSquareGradientStops':
        setCornersSquareGradientStops(value);
        break;
      case 'cornersSquareType':
        setCornersSquareType(value);
        break;

      case 'cornersDotColor':
        setCornersDotColor(value);
        break;
      case 'cornersDotColorType':
        setCornersDotColorType(value);
        if (value === 'single') {
          setCornersDotGradientType(null);
          setCornersDotGradientRotation(null);
          setCornersDotGradientStops([
            { offset: 0, color: cornersDotColor },
            { offset: 1, color: cornersDotColor },
          ]);
        }
        break;
      case 'cornersDotGradientType':
        setCornersDotGradientType(value);
        break;
      case 'cornersDotGradientRotation':
        setCornersDotGradientRotation(value);
        break;
      case 'cornersDotGradientStops':
        setCornersDotGradientStops(value);
        break;
      case 'cornersDotType':
        setCornersDotType(value);
        break;
  
      default:
        break;
    }
  };  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setChosenImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const handleDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div className="center">
      <div className="switch-container">
        <span className={`switch-label ${isAdvancedMode ? '' : 'active'}`}>Basic</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={isAdvancedMode}
            onChange={(e) => handleInputChange('isAdvancedMode', e.target.checked)}
          />
          <span className="slider"></span>
        </label>
        <span className={`switch-label ${isAdvancedMode ? 'active' : ''}`}>Advance</span>
      </div>
      <div style={{ display: "flex", gap: "100px" }}>
        <div className="center">
          <div ref={qrCodeRef}></div>
          <Link linkValue={qrValue} />
        </div>

        {isAdvancedMode && (
          <div style={{ display: "flex", flexDirection: "column", textAlign: "start", gap: "10px" }}>

            {/* Input fields for Dots Options */}
            <label>Dots Color: &nbsp;
              <input type="color" value={dotsColor} onChange={(e) => handleInputChange('dotsColor', e.target.value)} />
            </label>
            <div>
              <span>Dots Color Type: &nbsp;</span>
              <label>
                <input
                  type="radio"
                  value="single"
                  checked={dotsColorType === "single"}
                  onChange={() => handleInputChange('dotsColorType', "single")}
                />
                Single Color &nbsp; &nbsp;
              </label>
              <label>
                <input
                  type="radio"
                  value="gradient"
                  checked={dotsColorType === "gradient"}
                  onChange={() => handleInputChange('dotsColorType', "gradient")}
                />
                Color Gradient
              </label>
            </div>

            {dotsColorType === 'gradient' && (
              <>
                <label>Dots Gradient Type: &nbsp;
                  <select value={dotsGradientType} onChange={(e) => handleInputChange('dotsGradientType', e.target.value)}>
                    <option value="linear">Linear</option>
                    <option value="radial">Radial</option>
                  </select>
                </label>
                <label>Dots Gradient Rotation: &nbsp;
                  <input type="number" value={dotsGradientRotation} onChange={(e) => handleInputChange('dotsGradientRotation', e.target.value)} />
                </label>
                <label>Dots Gradient: &nbsp;
                  <input 
                    type="color" 
                    value={dotsGradientStops[0].color} 
                    onChange={(e) => handleInputChange('dotsGradientStops', [{ ...dotsGradientStops[0], color: e.target.value }, dotsGradientStops[1]])} 
                  />
                  <input 
                    type="color" 
                    value={dotsGradientStops[1].color} 
                    onChange={(e) => handleInputChange('dotsGradientStops', [dotsGradientStops[0], { ...dotsGradientStops[1], color: e.target.value }])} 
                  />
                </label>
              </>
            )}

            <label>Dots Type: &nbsp;
              <select value={dotsType} onChange={(e) => handleInputChange('dotsType', e.target.value)}>
                <option value="rounded">Rounded</option>
                <option value="dots">Dots</option>
                <option value="classy">Classy</option>
                <option value="classy-rounded">Classy-Rounded</option>
                <option value="square">Square</option>
                <option value="extra-rounded">Extra-Rounded</option>
              </select>
            </label>

            <hr style={{ border: "1px solid #ddd", width: "100%", margin: "20px 0" }} />

            {/* Input fields for Corners Square Options */}
            <label>Corners Square Color: &nbsp;
              <input type="color" value={cornersSquareColor} onChange={(e) => handleInputChange('cornersSquareColor', e.target.value)} />
            </label>
            <div>
              <span>Corners Square Color Type: &nbsp;</span>
              <label>
                <input
                  type="radio"
                  value="single"
                  checked={cornersSquareColorType === "single"}
                  onChange={() => handleInputChange('cornersSquareColorType', "single")}
                />
                Single Color &nbsp; &nbsp;
              </label>
              <label>
                <input
                  type="radio"
                  value="gradient"
                  checked={cornersSquareColorType === "gradient"}
                  onChange={() => handleInputChange('cornersSquareColorType', "gradient")}
                />
                Color Gradient
              </label>
            </div>

            {cornersSquareColorType === 'gradient' && (
              <>
                <label>Corners Square Gradient Type: &nbsp;
                  <select value={cornersSquareGradientType} onChange={(e) => handleInputChange('cornersSquareGradientType', e.target.value)}>
                    <option value="linear">Linear</option>
                    <option value="radial">Radial</option>
                  </select>
                </label>
                <label>Corners Square Gradient Rotation: &nbsp;
                  <input type="number" value={cornersSquareGradientRotation} onChange={(e) => handleInputChange('cornersSquareGradientRotation', e.target.value)} />
                </label>
                <label>Corners Square Gradient: &nbsp;
                  <input 
                    type="color" 
                    value={cornersSquareGradientStops[0].color} 
                    onChange={(e) => handleInputChange('cornersSquareGradientStops', [{ ...cornersSquareGradientStops[0], color: e.target.value }, cornersSquareGradientStops[1]])} 
                  />
                  <input 
                    type="color" 
                    value={cornersSquareGradientStops[1].color} 
                    onChange={(e) => handleInputChange('cornersSquareGradientStops', [cornersSquareGradientStops[0], { ...cornersSquareGradientStops[1], color: e.target.value }])} 
                  />
                </label>
              </>
            )}

            <label>Corners Square Type: &nbsp;
              <select value={cornersSquareType} onChange={(e) => handleInputChange('cornersSquareType', e.target.value)}>
                <option value="dot">Dot</option>
                <option value="square">Square</option>
                <option value="extra-rounded">Extra-Rounded</option>
                <option value="">None</option>
              </select>
            </label>

            <hr style={{ border: "1px solid #ddd", width: "100%", margin: "20px 0" }} />

            {/* Input fields for Corners Dot Options */}
            <label>Corners Dot Color: &nbsp;
              <input type="color" value={cornersDotColor} onChange={(e) => handleInputChange('cornersDotColor', e.target.value)} />
            </label>
            <div>
              <span>Corners Dot Color Type: &nbsp;</span>
              <label>
                <input
                  type="radio"
                  value="single"
                  checked={cornersDotColorType === "single"}
                  onChange={() => handleInputChange('cornersDotColorType', "single")}
                />
                Single Color &nbsp; &nbsp;
              </label>
              <label>
                <input
                  type="radio"
                  value="gradient"
                  checked={cornersDotColorType === "gradient"}
                  onChange={() => handleInputChange('cornersDotColorType', "gradient")}
                />
                Color Gradient
              </label>
            </div>

            {cornersDotColorType === 'gradient' && (
              <>
                <label>Corners Dot Gradient Type: &nbsp;
                  <select value={cornersDotGradientType} onChange={(e) => handleInputChange('cornersDotGradientType', e.target.value)}>
                    <option value="linear">Linear</option>
                    <option value="radial">Radial</option>
                  </select>
                </label>
                <label>Corners Dot Gradient Rotation: &nbsp;
                  <input type="number" value={cornersDotGradientRotation} onChange={(e) => handleInputChange('cornersDotGradientRotation', e.target.value)} />
                </label>
                <label>Corners Dot Gradient: &nbsp;
                  <input 
                    type="color" 
                    value={cornersDotGradientStops[0].color} 
                    onChange={(e) => handleInputChange('cornersDotGradientStops', [{ ...cornersDotGradientStops[0], color: e.target.value }, cornersDotGradientStops[1]])} 
                  />
                  <input 
                    type="color" 
                    value={cornersSquareGradientStops[1].color} 
                    onChange={(e) => handleInputChange('cornersDotGradientStops', [cornersDotGradientStops[0], { ...cornersDotGradientStops[1], color: e.target.value }])} 
                  />
                </label>
              </>
            )}

            <label>Corners Dot Type: &nbsp;
              <select value={cornersDotType} onChange={(e) => handleInputChange('cornersDotType', e.target.value)}>
                <option value="dot">Dot</option>
                <option value="square">Square</option>
                <option value="">None</option>
              </select>
            </label>

          </div>
        )}
      </div>
      <input style={{ margin: "30px 0" }} type="file" accept="image/*" onChange={handleImageChange} />
      <select style={{ marginBottom: "30px" }} onChange={handleExtensionChange} value={fileExt}>
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
        <option value="webp">WEBP</option>
        <option value="svg">SVG</option>
      </select>
      <button onClick={handleDownloadClick}>
        Download QR Code
      </button>
    </div>
  );
}

export default Download;
