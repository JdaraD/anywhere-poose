export default function Countdown({ count }) {
  if (!count) return null;

  return (
    <div
      className="
      lg:text-6xl md:text-5xl text-4xl
      font-bold
      text-purple-500
      animate-pulse"
    >
      {count}
    </div>
  );
}
