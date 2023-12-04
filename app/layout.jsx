import "./global.css";
// import { Fira_Sans, Oswald } from "next/font/google";

// export const FiraFont = Fira_Sans({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-fira-sans",
// });

// export const OswaldFont = Oswald({
//     subsets: ['latin-ext'],
//     weight: ['400', '700'],
//     variable: '--font-oswald',
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="ecosolution/favicon.png" sizes="any" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
