import Header from "./Header";
import Footer from "./Footer";

import LeftAds from "../Ads/LeftAds";
import RightAds from "../Ads/RightAds";

export default function AdsLayout({ children }) {
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
        <aside className="hidden lg:block lg:col-span-2">
          <LeftAds />
        </aside>

        <section className="lg:col-span-8">{children}</section>

        <aside className="hidden lg:block lg:col-span-2">
          <RightAds />
        </aside>
      </main>

      <div className="lg:hidden px-4 pb-4">
        <LeftAds />
      </div>

      <Footer />
    </>
  );
}
