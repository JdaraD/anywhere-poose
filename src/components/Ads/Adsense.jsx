import { useEffect } from "react";

export default function Adsense({ slot }) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];

      window.adsbygoogle.push({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
      }}
      data-ad-client="ca-pub-1365740428794161"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
