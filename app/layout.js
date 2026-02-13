 // app/layout.js
import "./globals.css";
import TopNav from "./components/layouts/TopNav";
import BottomNav from "./components/layouts/BottomNav";

export const metadata = {
  title: "THORFIN STORE",
  description: "Premium E-commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Direct Google Font Import taake Turbopack error na de */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" />
      </head>
      <body className="antialiased font-sans bg-white text-black">
        <TopNav />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}