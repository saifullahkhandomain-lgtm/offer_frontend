import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Stores", href: "/stores" },
    { name: "Categories", href: "/categories" },
    { name: "Coupons", href: "/coupons" },
    { name: "Deals", href: "/deals" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-purple-50 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src="/logo.png"
            alt="DealClick"
            className="h-20 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback text logo */}
          <div className="flex-col hidden" style={{ display: "none" }}>
            <span className="text-2xl font-bold text-primary">
              Deal<span className="text-accent">Click</span>
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">
              Save With Us
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-textMain hover:text-primary font-medium transition-colors relative group"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          backgroundImage: "linear-gradient(160deg, #faf8ff 0%, #fff 100%)",
        }}
      >
        <div className="flex flex-col h-full pt-36 px-6 pb-6">
          <nav className="flex flex-col space-y-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors border-b border-gray-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
