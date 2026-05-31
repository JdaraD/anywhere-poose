export function drawImageCover(ctx, img, x, y, w, h) {
  const imgRatio = img.width / img.height;
  const slotRatio = w / h;

  let drawWidth;
  let drawHeight;
  let offsetX = 0;
  let offsetY = 0;

  if (imgRatio > slotRatio) {
    drawHeight = h;
    drawWidth = h * imgRatio;
    offsetX = (w - drawWidth) / 2;
  } else {
    drawWidth = w;
    drawHeight = w / imgRatio;
    offsetY = (h - drawHeight) / 2;
  }

  ctx.save();

  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  ctx.drawImage(img, x + offsetX, y + offsetY, drawWidth, drawHeight);

  ctx.restore();
}
