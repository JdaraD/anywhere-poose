import AdsLayout from "../components/Layout/AdsLayout";

import ResultImage from "../components/Preview/ResultImage";
import DownloadButton from "../components/Preview/DownloadButton";
import PrintButton from "../components/Preview/PrintButton";
import RetakeButton from "../components/Preview/RetakeButton";

export default function Preview() {
  return (
    <AdsLayout>
      <section className="p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Hasil Photobooth
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-y-auto p-6">
          <ResultImage />

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
              mt-8
            "
          >
            <DownloadButton />
            <PrintButton />
            <RetakeButton />
          </div>
        </div>
      </section>
    </AdsLayout>
  );
}
