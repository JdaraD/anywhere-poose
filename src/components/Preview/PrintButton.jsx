export default function PrintButton() {
  const handlePrint = () => {
    const image = sessionStorage.getItem("finalImage");

    if (!image) return;

    const win = window.open("", "_blank");
    if (!win) return;

    win.document.write(`
      <html>
        <head>
          <title>Print Photo</title>
          <style>
            @page {
              size: auto;
              margin: 0;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              width: 100vw;
              height: 100vh;
              min-height: 100vh;
              background: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              box-sizing: border-box;
            }

            img {
              width: 100vw;
              height: 100vh;
              object-fit: contain;
              display: block;
              background: transparent;
              page-break-inside: avoid;
              break-inside: avoid;
              margin: 0;
              padding: 0;
            }

            @media print {
              html,
              body {
                width: 100vw;
                height: 100vh;
                background: transparent;
              }

              img {
                width: 100vw;
                height: 100vh;
              }
            }
          </style>
        </head>
        <body>
          <img src="${image}" alt="Photobooth print" />
        </body>
      </html>
    `);

    win.document.close();
    win.focus();
    win.onload = () => {
      win.print();
      win.close();
    };
  };

  return (
    <button
      onClick={handlePrint}
      className="bg-blue-600 text-white py-3 rounded-xl"
    >
      Print
    </button>
  );
}
