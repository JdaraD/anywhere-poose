import { useEffect } from "react";

export default function Adsense() {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="bg-gray-200 rounded-xl p-4 text-center">
      <p className="font-semibold">Google Ads</p>

      <div className="h-60 flex items-center justify-center text-gray-500">
        Ad Space
      </div>
    </div>
  );
}
