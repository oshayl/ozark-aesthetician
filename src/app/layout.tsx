import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Ozark Aesthetician | Advanced Skincare & Hydrafacial at the Lake",
  description: "Lake of the Ozarks' premier aesthetician. 18+ years of expertise in Hydrafacial, microneedling, chemical peels, and customized skincare. Best of the Lake 2026 winner.",
  keywords: "aesthetician, hydrafacial, microneedling, chemical peel, lake of the ozarks, camdenton, skincare, acne treatment, facial, laser specialist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}