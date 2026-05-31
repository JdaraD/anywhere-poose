export default function FrameCard({ frame, onSelect }) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-lg
      overflow-hidden
      hover:scale-105
      transition"
    >
      <img src={frame} alt="frame" className="w-full h-80 object-cover" />

      <button
        onClick={() => onSelect(frame)}
        className="
        w-full
        py-3
        bg-purple-600
        text-white
        hover:bg-purple-700"
      >
        Gunakan Frame
      </button>
    </div>
  );
}
