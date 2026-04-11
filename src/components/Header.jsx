import { useState } from "react";
import { Link } from "react-router-dom";

const DealClickLogo = () => (
  <svg width="160" height="44" viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon mark — violet tag shape */}
    <rect x="0" y="8" width="28" height="28" rx="7" fill="#7C3AED" />
    <path d="M7 22 L14 15 L21 22 L14 29 Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" />
    <circle cx="18" cy="16" r="2.2" fill="#06B6D4" />
    {/* "Deal" text */}
    <text x="34" y="30" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="20" fill="#2E1065">Deal</text>
    {/* "Click" text in violet */}
    <text x="79" y="30" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="20" fill="#7C3AED">Click</text>
    {/* Tagline */}
    <text x="34" y="41" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="8" fill="#a78bfa" letterSpacing="2">SAVE WITH US</text>
  </svg>
);

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
          <DealClickLogo />
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
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
              className={`block w-6 h-0.5 bg-purple-800 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-purple-800 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-purple-800 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          backgroundImage: "linear-gradient(160deg, #f0fdfa 0%, #fff 100%)",
        }}
      >
        <div className="flex flex-col h-full pt-36 px-6 pb-6">
          <nav className="flex flex-col space-y-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-bold text-textMain hover:text-primary transition-colors border-b border-purple-100 pb-2"
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
