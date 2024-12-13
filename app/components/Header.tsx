"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path ? "text-primary" : "text-gray-400";

  return (
    <header className="bg-black text-white px-4 py-3 mx-0 lg:mx-10">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="flex items-center z-10">
          <Link href="/">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={150}
              height={50}
              className="object-contain sm:w-40 lg:w-48"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex sm:absolute inset-x-0 mx-auto justify-center space-x-6">
          <Link href="/" className={`${isActive("/")}`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive("/about")}`}>
            About
          </Link>
          <Link href="/service" className={`${isActive("/service")}`}>
            Services
          </Link>
          <Link href="/portfolio" className={`${isActive("/portfolio")}`}>
            Portfolio
          </Link>
          {/* <Link href="/blog" className={`${isActive("/blog")}`}>
            Blog
          </Link> */}
        </nav>

        {/* Contact Button and Hamburger Menu */}
        <div className="flex items-center space-x-4 z-10">
          {/* Contact Button (Visible on Large Devices) */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-primary-light">
                <FaPhoneAlt />
                <p>Contact</p>
              </button>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button className="lg:hidden flex items-center" onClick={toggleMenu}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Sliding Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <nav className="mt-16 flex flex-col space-y-4 px-6">
          <Link href="/" className={`${isActive("/")}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive("/about")}`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/service"
            className={`${isActive("/service")}`}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`${isActive("/portfolio")}`}
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          {/* <Link
            href="/blog"
            className={`${isActive("/blog")}`}
            onClick={toggleMenu}
          >
            Blog
          </Link> */}
          {/* Contact Button Inside Side Panel (Visible on Small Devices) */}
          <div className="lg:hidden mt-4">
            <Link href="/contact" onClick={toggleMenu}>
              <button className="bg-primary text-white px-3 py-1 rounded-md flex items-center space-x-2 hover:bg-primary-light text-sm">
                <FaPhoneAlt className="text-fs-14" />
                <p>Contact</p>
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
