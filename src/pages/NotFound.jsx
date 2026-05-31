import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="mt-4 text-xl">Halaman tidak ditemukan</p>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
