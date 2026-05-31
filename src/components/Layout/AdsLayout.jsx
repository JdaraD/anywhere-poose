import Header from "./Header";
import Footer from "./Footer";

import LeftAds from "../Ads/LeftAds";
import RightAds from "../Ads/RightAds";

import { useLocation } from "react-router-dom";

export default function AdsLayout({ children }) {
  const location = useLocation();

  const showAds =
    location.pathname === "/select-frame" || location.pathname === "/preview";

  return (
    <>
      <Header />

      <main
        className="
        min-h-screen
        max-w-7xl
        mx-auto
        px-4
        py-6
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-6"
      >
        {showAds && (
          <aside className="hidden lg:block lg:col-span-2">
            <LeftAds />
          </aside>
        )}

        <section className={showAds ? "lg:col-span-8" : "lg:col-span-12"}>
          {children}
        </section>

        {showAds && (
          <aside className="hidden lg:block lg:col-span-2">
            <RightAds />
          </aside>
        )}
      </main>

      {showAds && (
        <div className="lg:hidden px-4 pb-4">
          <LeftAds />
        </div>
      )}

      <Footer />
    </>
  );
}
