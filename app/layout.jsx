import "./global.css";

import { Fira_Sans, Oswald } from "next/font/google";

export const FiraFont = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fira-sans",
});

export const OswaldFont = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-oswald',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${FiraFont.variable} ${OswaldFont.variable}`}>
      <head>
        <link rel="icon" href="ecosolution/favicon.png" sizes="any" />

        
      </head>
      <body>{children}</body>
    </html>
  );
}
