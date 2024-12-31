import "./globals.css"; // Ensure this imports your global styles
import Footer from "./components/Footer";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

// import Loader from "./components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black flex flex-col min-h-screen">
        {/* <Loader /> */}
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1">{children}</main>
        <CookieBanner />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
