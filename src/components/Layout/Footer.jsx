export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Anywhere Poose</p>

        <p className="text-sm text-gray-400 mt-2">
          Download, Print dan Bagikan Foto Favoritmu
        </p>
      </div>
    </footer>
  );
}
