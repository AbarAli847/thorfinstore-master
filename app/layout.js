// app/layout.js
import "./globals.css";
import TopNav from "./components/layouts/TopNav";
import BottomNav from "./components/layouts/BottomNav";

// ✅ Correct Google Fonts import
import { Inter } from "next/font/google";

// Inter font setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Thorfinstore",
  description: "Thorfinstore e-commerce site built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Top Navigation */}
        <TopNav />

        {/* Main Content */}
        <main>{children}</main>

        {/* Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
