import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

import SEO from "../components/SEO";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import HowItWorks from "../components/HowItWorks";
import FeaturedStores from "../components/FeaturedStores";
import TrendingCoupons from "../components/TrendingCoupons";
import LatestCoupons from "../components/LatestCoupons";
import WhyUs from "../components/WhyUs";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";

// Category emoji map — fallback if category has no icon stored
const CATEGORY_ICONS = {
  fashion: "👗", clothing: "👗", shoes: "👟", electronics: "💻",
  food: "🍔", travel: "✈️", beauty: "💄", health: "💊",
  sports: "⚽", home: "🏠", gaming: "🎮", books: "📚",
  toys: "🧸", baby: "👶", pets: "🐾", automotive: "🚗",
  garden: "🌿", jewelry: "💍", music: "🎵", movies: "🎬",
};

const getCategoryIcon = (name = "") => {
  const key = name.toLowerCase();
  for (const [k, v] of Object.entries(CATEGORY_ICONS)) {
    if (key.includes(k)) return v;
  }
  return "🏷️";
};

const CARD_ACCENTS = [
  "border-purple-200 bg-violet-50 hover:bg-violet-100",
  "border-pink-200 bg-pink-50 hover:bg-pink-100",
  "border-emerald-200 bg-emerald-50 hover:bg-emerald-100",
  "border-amber-200 bg-amber-50 hover:bg-amber-100",
  "border-sky-200 bg-sky-50 hover:bg-sky-100",
  "border-violet-200 bg-violet-50 hover:bg-violet-100",
];

function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setCategories(data.slice(0, 12));
      })
      .catch(() => setCategories([]));
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Discover the best coupons, promo codes, and deals for your favorite stores. Save money on every purchase with DealDash."
        keywords="coupons, promo codes, deals, discounts, savings, online shopping"
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. How It Works */}
      <HowItWorks />

      {/* 4. Featured Stores */}
      <FeaturedStores />

      {/* 5. Trending Coupons */}
      <TrendingCoupons />

      {/* 6. Category Showcase — icon grid */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">🗂️ Browse by Category</div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mt-1">
              Top Categories
            </h2>
            <p className="text-gray-500 mt-2">
              Find the best deals in your favourite shopping category
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {categories.map((cat, i) => (
              <Link
                key={cat._id || cat.name}
                to={`/coupons?category=${encodeURIComponent(cat.name.toLowerCase())}`}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${CARD_ACCENTS[i % CARD_ACCENTS.length]}`}
              >
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {cat.icon || getCategoryIcon(cat.name)}
                </span>
                <span className="text-sm font-bold text-textMain group-hover:text-primary transition-colors text-center leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Latest Coupons */}
      <LatestCoupons />

      {/* 8. Why DealDash */}
      <WhyUs />

      {/* 9. Blog */}
      <BlogSection />

      {/* 10. Newsletter */}
      <Newsletter />
    </>
  );
}

export default HomePage;
