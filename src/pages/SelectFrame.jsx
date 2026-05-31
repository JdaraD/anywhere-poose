import AdsLayout from "../components/Layout/AdsLayout";
import { useNavigate } from "react-router-dom";
import { frameConfigs } from "../config/frameConfig";

const frames = frameConfigs;

export default function SelectFrame() {
  const navigate = useNavigate();

  function selectFrame(frame) {
    sessionStorage.setItem("selectedFrame", JSON.stringify(frame));

    navigate("/camera");
  }

  return (
    <AdsLayout>
      <div className="min-h-screen bg-linear-to-br from-purple-700 via-pink-500 to-orange-400 flex flex-col items-center p-4 select-none rounded-2xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-white">
          Pilih Frame
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[90vh] overflow-y-auto pr-2">
          {frames.map((frame) => (
            <div key={frame.id} className="border rounded-xl p-4 bg-white/20">
              <img
                src={frame.image}
                alt={frame.name}
                className="rounded-lg w-full h-auto"
              />

              <button
                onClick={() => selectFrame(frame)}
                className="w-full mt-4 bg-purple-600 text-white py-2 rounded"
              >
                Gunakan
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdsLayout>
  );
}
