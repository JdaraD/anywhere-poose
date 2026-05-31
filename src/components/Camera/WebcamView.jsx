import Webcam from "react-webcam";
import { useRef } from "react";

export default function WebcamView({ webcamRef }) {
  return (
    <Webcam
      ref={webcamRef}
      audio={false}
      screenshotFormat="image/png"
      className="
      rounded-3xl
      shadow-2xl
      w-full
      lg:max-w-xl md:max-w-lg max-w-base"
    />
  );
}
