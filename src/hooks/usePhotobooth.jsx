import { useState } from "react";

export default function usePhotobooth() {
  const [photos, setPhotos] = useState([]);
  const [countdown, setCountdown] = useState(null);

  const capturePhoto = (photo) => {
    setPhotos((prev) => [...prev, photo]);
  };

  const startCountdown = (callback) => {
    let count = 3;

    setCountdown(count);

    const timer = setInterval(() => {
      count--;

      if (count > 0) {
        setCountdown(count);
      } else {
        clearInterval(timer);
        setCountdown(null);

        if (callback) {
          callback();
        }
      }
    }, 1000);
  };

  return {
    photos,
    capturePhoto,
    countdown,
    startCountdown,
  };
}
