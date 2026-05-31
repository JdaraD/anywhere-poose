import { drawImageCover } from "./drawImageCover";

export async function generateStrip(photos, frameConfig) {
  return new Promise((resolve, reject) => {
    if (!frameConfig || !frameConfig.slots || !frameConfig.image) {
      reject(new Error("Invalid frame configuration"));
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = frameConfig.canvasWidth;
    canvas.height = frameConfig.canvasHeight;

    const ctx = canvas.getContext("2d");
    const frameImage = new Image();
    frameImage.src = frameConfig.image;

    frameImage.onload = async () => {
      try {
        for (let i = 0; i < frameConfig.slots.length; i++) {
          const slot = frameConfig.slots[i];
          const photoSrc = photos[i];

          if (!photoSrc) {
            continue;
          }

          await new Promise((done, fail) => {
            const img = new Image();
            img.onload = () => {
              drawImageCover(ctx, img, slot.x, slot.y, slot.width, slot.height);
              done();
            };
            img.onerror = fail;
            img.src = photoSrc;
          });
        }

        ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/png"));
      } catch (error) {
        reject(error);
      }
    };

    frameImage.onerror = () => reject(new Error("Failed to load frame image"));
  });
}
