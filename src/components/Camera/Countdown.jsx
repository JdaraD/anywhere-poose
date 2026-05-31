export default function Countdown({ count }) {
  if (!count) return null;

  return (
    <div
      className="
      text-6xl
      font-bold
      text-purple-500
      animate-pulse"
    >
      {count}
    </div>
  );
}
