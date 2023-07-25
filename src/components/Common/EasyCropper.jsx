import { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../core/services/cropImage";

const EasyCropper = ({ image, returnImage, closeModal }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImage);
      returnImage(croppedImage);
      closeModal();
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  return (
    <div>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={3 / 3}
        cropShape="round"
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <button
        onClick={showCroppedImage}
        className="bg-blue-500 p-2 text-white absolute bottom-0"
      >
        Show Result
      </button>
    </div>
  );
};

export { EasyCropper };
