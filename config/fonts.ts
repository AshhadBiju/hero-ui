// import localFont from "next/font/local";
// const myFont = localFont({ src: "/public/fonts/nothing-mono.otf" });

// export const fontMono = localFont({
//   src: `${myFont}`,
//   variable: "--font-mono",
//   display: "swap",
// });
import localFont from "next/font/local";

export const fontNothing = localFont({
  src: "../public/fonts/nothing-mono.woff2",
  variable: "--font-nothing",
});
