import { SatoriOptions } from "next/dist/compiled/@vercel/og/satori";
import { cache } from "react";

export const getFonts = cache(async () => {
  const [sans, sansBold] = await Promise.all([
    loadBuffer(new URL("../public/assets/Figtree-Regular.ttf", import.meta.url)),
    loadBuffer(new URL("../public/assets/Figtree-Bold.ttf", import.meta.url)),
  ]);
  const fonts: SatoriOptions["fonts"] = [
    { name: "Figtree", data: sans, style: "normal", weight: 400 },
    { name: "Figtree", data: sansBold, style: "normal", weight: 700 },
  ];
  return fonts;
});

export async function loadBuffer(url: URL) {
  return fetch(url).then((res) => res.arrayBuffer());
}
