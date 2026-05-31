import { useEffect, useState } from "react";
import { generateStrip } from "../../untils/generateStrip";

export default function ResultImage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function createResult() {
      try {
        const photos = JSON.parse(sessionStorage.getItem("photos") || "[]");

        const frameConfig = JSON.parse(sessionStorage.getItem("selectedFrame"));

        console.log("photos:", photos);
        console.log("frameConfig:", frameConfig);

        const finalImage = await generateStrip(photos, frameConfig);

        console.log("finalImage:", finalImage);

        setResult(finalImage);

        sessionStorage.setItem("finalImage", finalImage);
      } catch (error) {
        console.error("ERROR:", error);
      }
    }

    createResult();
  }, []);

  if (!result) {
    return <p>Loading...</p>;
  }

  return (
    <img
      src={result}
      alt="Photobooth"
      className="mx-auto rounded-xl shadow-xl w-60 h-auto"
    />
  );
}
