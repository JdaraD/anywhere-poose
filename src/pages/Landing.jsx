import { useNavigate } from "react-router-dom";
import banner from "../assets/background/Poose.png";

export default function Landing() {
  const navigate = useNavigate();

  const handleStart = () => {
    sessionStorage.setItem("started", "true");

    navigate("/select-frame");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-700 via-pink-500 to-orange-400 flex items-center justify-center px-4 select-none">
      {/* Container Utama Banner */}
      <div className="relative bg-white lg:rounded-3xl md:rounded-3xl rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full">
        {/* Gambar Banner */}
        <img
          src={banner}
          alt="banner"
          className="w-full h-auto block pointer-events-none"
        />

        {/* Tombol Start yang Sangat Responsif */}
        <button
          onClick={() => navigate("/select-frame")}
          className="absolute bg-[#9333ea] text-white lg:rounded-xl md:rounded-xl rounded-lg hover:bg-purple-700 active:scale-95 transition-all z-10 font-semibold shadow-md
                 lg:left-[22%] md:left-[22%] left-[22%] lg:bottom-[22%] md:bottom-[22%] bottom-[18%] transform -translate-x-1/2
                 lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 md:text-lg text-xs"
        >
          Start
        </button>
      </div>
    </div>
  );
}
