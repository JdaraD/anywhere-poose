export default function CaptureButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      mt-6
      px-8
      py-4
      rounded-xl
      bg-purple-600
      text-white
      hover:bg-purple-700"
    >
      Capture
    </button>
  );
}
