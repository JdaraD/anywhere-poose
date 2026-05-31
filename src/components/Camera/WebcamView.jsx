import Webcam from "react-webcam";
import { useRef, useState } from "react";

export default function WebcamView({ webcamRef }) {
  const [facingMode, setFacingMode] = useState("user");

  return (
    <div>
      <Webcam
        className="rounded-xl overflow-hidden"
        ref={webcamRef}
        audio={false}
        screenshotQuality={1}
        mirrored={facingMode === "user"}
        screenshotFormat="image/png"
        videoConstraints={{
          facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        }}
        onUserMedia={(stream) => {
          const track = stream.getVideoTracks()[0];

          console.log(track.getSettings());
        }}
        audio={false}
        screenshotFormat="image/png"
        videoConstraints={{
          facingMode,
        }}
      />

      <button
        onClick={() =>
          setFacingMode((prev) => (prev === "user" ? "environment" : "user"))
        }
        className="absolute lg:bottom-1 md:bottom-1 bottom-2 m-6 p-4 bg-pink-600 rounded-xl text-white hover:bg-pink-700 transition-colors"
        aria-label="Ganti Kamera"
      >
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}
