import { useState } from "react";
import { Link } from "react-router-dom";

const GrabYourPromosLogo = () => (
  <svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>

    {/* Icon background */}
    <rect x="0" y="4" width="40" height="40" rx="11" fill="url(#logoGrad)" />

    {/* Price-tag shape (pointing right) */}
    <path d="M8 16 H22 L31 24 L22 32 H8 V16 Z" fill="white" />

    {/* Tag hole */}
    <circle cx="13.5" cy="24" r="2.5" fill="#6D28D9" />

    {/* "Grab" wordmark */}
    <text
      x="50" y="31"
      fontFamily="Poppins, system-ui, sans-serif"
      fontWeight="800"
      fontSize="23"
      fill="#1E0A4E"
    >
      Grab
    </text>

    {/* "Promos" wordmark in brand violet */}
    <text
      x="117" y="31"
      fontFamily="Poppins, system-ui, sans-serif"
      fontWeight="800"
      fontSize="23"
      fill="#7C3AED"
    >
      Promos
    </text>
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
          <GrabYourPromosLogo />
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
