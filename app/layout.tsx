import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamarind Group Enterprise Platforms | Digital Infrastructure Hub",
  description: "Official institutional ecosystem powering financial governance, AI guest sentiment, Dhow sailing operations, and workforce excellence across Tamarind Group properties.",
  keywords: [
    "Tamarind Group",
    "Tamarind Management Limited",
    "Hospitality Enterprise Software",
    "Carnivore Restaurant",
    "Tamarind Dhow",
    "platforms.tamarind.co.ke"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo2.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#fbfbf9] text-slate-900 selection:bg-[#004d40] selection:text-white">
        {children}
      </body>
    </html>
  );
}
