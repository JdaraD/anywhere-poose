import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          Anywhere Poose
        </Link>

        <nav className="flex gap-6">
          <Link to="/" className="hover:text-purple-600 transition">
            Home
          </Link>

          <Link to="/select-frame" className="hover:text-purple-600 transition">
            Frames
          </Link>
        </nav>
      </div>
    </header>
  );
}
