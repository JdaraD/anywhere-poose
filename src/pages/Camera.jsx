import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import WebcamView from "../components/Camera/WebcamView";
import Countdown from "../components/Camera/Countdown";

export default function Camera() {
  const webcamRef = useRef(null);

  const navigate = useNavigate();

  const [photos, setPhotos] = useState([]);
  const [countdown, setCountdown] = useState(null);

  const selectedFrame = JSON.parse(sessionStorage.getItem("selectedFrame"));

  const requiredPhotos = selectedFrame.slots.length;

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (!imageSrc) {
      alert("Gagal mengambil foto");
      return;
    }

    const updatedPhotos = [...photos, imageSrc];

    setPhotos(updatedPhotos);

    sessionStorage.setItem("photos", JSON.stringify(updatedPhotos));

    console.log(updatedPhotos);

    if (updatedPhotos.length === requiredPhotos) {
      navigate("/preview");
    }
  };

  const startCountdown = () => {
    let count = 3;

    setCountdown(count);

    const timer = setInterval(() => {
      count--;

      if (count > 0) {
        setCountdown(count);
      } else {
        clearInterval(timer);

        setCountdown(null);

        capture();
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Ambil Foto</h1>

      <WebcamView webcamRef={webcamRef} />

      <Countdown count={countdown} />

      <div className="flex items-center gap-4 justify-center select-none">
        <button
          onClick={() => navigate("/select-frame")}
          className="mt-6 px-8 py-3 bg-pink-600 rounded-xl"
        >
          Pilih Frame
        </button>

        <p className="mt-4">
          {photos.length}/{requiredPhotos} Foto
        </p>

        <button
          onClick={startCountdown}
          className="mt-6 px-8 py-3 bg-purple-600 rounded-xl"
        >
          Capture
        </button>
      </div>
    </div>
  );
}
