export default function DownloadButton() {
  const handleDownload = () => {
    const image = sessionStorage.getItem("finalImage");

    const link = document.createElement("a");

    link.href = image;

    link.download = "photobooth.png";

    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-600 text-white py-3 rounded-xl"
    >
      Download
    </button>
  );
}
