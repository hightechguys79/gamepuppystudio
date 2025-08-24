export const metadata = {
  title: "GamePuppy — VibeGaming",
  description: "Parent-powered, psychology-aware VibeGaming. √ of AI: smart & safe.",
};

import "./globals.css";

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head><link rel="icon" href="/paw.svg" /></head>
      <body>{children}</body>
    </html>
  );
}
