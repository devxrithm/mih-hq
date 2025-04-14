// fonts.ts (or wherever you define fonts)
import { Pixelify_Sans } from "next/font/google";
import localFont from "next/font/local";

// Local fonts
const greatVibes = localFont({
  src: "./Game-Paused-DEMO.woff",
  display: "swap",
});

const born2b = localFont({
  src: "./Born2bSportyFS.otf",
  display: "swap",
});

// Google font
const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
});

export { greatVibes, pixelifySans, born2b };