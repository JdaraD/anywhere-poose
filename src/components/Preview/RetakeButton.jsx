import { useNavigate } from "react-router-dom";

export default function RetakeButton() {
  const navigate = useNavigate();

  const handleRetake = () => {
    sessionStorage.removeItem("photos");

    navigate("/camera");
  };

  return (
    <button
      onClick={handleRetake}
      className="
        bg-red-600
        hover:bg-red-700
        text-white
        py-3
        rounded-xl
        font-semibold
      "
    >
      Foto Lagi
    </button>
  );
}
