import { useNavigate } from "react-router-dom";

import FrameCard from "./FrameCard";

const frames = [
  "/frames/frame1.png",
  "/frames/frame2.png",
  "/frames/frame3.png",
];

export default function FrameSelector() {
  const navigate = useNavigate();

  function handleSelect(frame) {
    sessionStorage.setItem("selectedFrame", frame);

    navigate("/camera");
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6"
    >
      {frames.map((frame) => (
        <FrameCard key={frame} frame={frame} onSelect={handleSelect} />
      ))}
    </div>
  );
}
