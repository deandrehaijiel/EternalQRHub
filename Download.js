{/* Input fields for Corners Square Options */}
<label>Corners Square Color: <input type="color" value={cornersSquareColor} onChange={(e) => setCornersSquareColor(e.target.value)} /></label>
<label>Corners Square Gradient Type: <input type="text" value={cornersSquareGradientType} onChange={(e) => setCornersSquareGradientType(e.target.value)} /></label>
{/* Add similar input fields for other Corners Square Options attributes */}

{/* Input fields for Corners Dot Options */}
<label>Corners Dot Color: <input type="color" value={cornersDotColor} onChange={(e) => setCornersDotColor(e.target.value)} /></label>
<label>Corners Dot Gradient Type: <input type="text" value={cornersDotGradientType} onChange={(e) => setCornersDotGradientType(e.target.value)} /></label>
{/* Add similar input fields for other Corners Dot Options attributes */}

{/* Input fields for Background Options */}
<label>Background Color: <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} /></label>
<label>Background Gradient Type: <input type="text" value={backgroundGradientType} onChange={(e) => setBackgroundGradientType(e.target.value)} /></label>
{/* Add similar input fields for other Background Options attributes */}

{/* Input fields for Image Options */}
<label>Hide Background Dots: <input type="checkbox" checked={imageBackgroundDots} onChange={(e) => setImageBackgroundDots(e.target.checked)} /></label>
<label>Image Size: <input type="number" value={imageSize} onChange={(e) => setImageSize(e.target.value)} /></label>
<label>Margin: <input type="number" value={imageMargin} onChange={(e) => setImageMargin(e.target.value)} /></label>

{/* Input fields for QR Options */}
<label>QR Type Number: <input type="number" value={qrTypeNumber} onChange={handleQrTypeNumberChange} min={0} max={40} /></label>

cornersSquareColor,
    cornersSquareGradientType,
    cornersSquareGradientRotation,
    cornersSquareGradientStops,
    cornersSquareType,
    cornersDotColor,
    cornersDotGradientType,
    cornersDotGradientRotation,
    cornersDotGradientStops,
    cornersDotType,
    backgroundColor,
    backgroundGradientType,
    backgroundGradientRotation,
    backgroundGradientStops,
    imageBackgroundDots,
    imageSize,
    imageMargin,
    imageCrossOrigin,
    qrTypeNumber,

    cornersSquareOptions: {
        color: cornersSquareColor,
        gradient: {
          type: cornersSquareGradientType,
          rotation: cornersSquareGradientRotation,
          colorStops: cornersSquareGradientStops,
        },
        type: cornersSquareType,
      },
      cornersDotOptions: {
        color: cornersDotColor,
        gradient: {
          type: cornersDotGradientType,
          rotation: cornersDotGradientRotation,
          colorStops: cornersDotGradientStops,
        },
        type: cornersDotType,
      },
      backgroundOptions: {
        color: backgroundColor,
        gradient: {
          type: backgroundGradientType,
          rotation: backgroundGradientRotation,
          colorStops: backgroundGradientStops,
        },
      },
      imageOptions: {
        hideBackgroundDots: imageBackgroundDots,
        imageSize: imageSize,
        margin: imageMargin,
        crossOrigin: imageCrossOrigin,
      },
      qrOptions: {
        typeNumber: qrTypeNumber,
        mode: "Byte",
        errorCorrectionLevel: "H",
      }

      const [cornersSquareColor, setCornersSquareColor] = useState("#4267b2");
  const [cornersSquareGradientType, setCornersSquareGradientType] = useState("linear");
  const [cornersSquareGradientRotation, setCornersSquareGradientRotation] = useState(0);
  const [cornersSquareGradientStops, setCornersSquareGradientStops] = useState([
    { offset: 0, color: "#4267b2" },
    { offset: 1, color: "#ffffff" },
  ]);
  const [cornersSquareType, setCornersSquareType] = useState("rounded");

  const [cornersDotColor, setCornersDotColor] = useState("#4267b2");
  const [cornersDotGradientType, setCornersDotGradientType] = useState("linear");
  const [cornersDotGradientRotation, setCornersDotGradientRotation] = useState(0);
  const [cornersDotGradientStops, setCornersDotGradientStops] = useState([
    { offset: 0, color: "#4267b2" },
    { offset: 1, color: "#ffffff" },
  ]);
  const [cornersDotType, setCornersDotType] = useState("rounded");

  const [backgroundColor, setBackgroundColor] = useState("#e9ebee");
  const [backgroundGradientType, setBackgroundGradientType] = useState("linear");
  const [backgroundGradientRotation, setBackgroundGradientRotation] = useState(0);
  const [backgroundGradientStops, setBackgroundGradientStops] = useState([
    { offset: 0, color: "#4267b2" },
    { offset: 1, color: "#ffffff" },
  ]);

  const [imageBackgroundDots, setImageBackgroundDots] = useState(true);
  const [imageSize, setImageSize] = useState(0.1);
  const [imageMargin, setImageMargin] = useState(0);
  const [imageCrossOrigin, setImageCrossOrigin] = useState("anonymous");

  const [qrTypeNumber, setQrTypeNumber] = useState(0);