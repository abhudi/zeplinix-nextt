import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your global styles
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";

export const metadata: Metadata = {
  title: "Zeplinix Technologies Pvt Ltd",
  description: "Zeplinix Technologies Pvt Ltd",

  icons: {
    icon: "/favicon.ico", // Path to the favicon file in the public folder
    // You can also add other sizes or formats if needed
    // icon: "/favicon.png", // Uncomment and use if you prefer a PNG
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black flex flex-col min-h-screen">
        <Loader />
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
