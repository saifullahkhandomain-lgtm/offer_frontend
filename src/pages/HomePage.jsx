import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedStores from "../components/FeaturedStores";
import TrendingCoupons from "../components/TrendingCoupons";
import PopularStores from "../components/PopularStores";
import LatestCoupons from "../components/LatestCoupons";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

import SEO from "../components/SEO";

function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data.slice(0, 12));
        }
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setCategories([]); // Set empty array on error
      });
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Discover the best coupons, promo codes, and deals for your favorite stores. Save money on every purchase with DealClick."
        keywords="coupons, promo codes, deals, discounts, savings, online shopping"
      />
      <Hero />
      <FeaturedStores />
      <TrendingCoupons />
      <PopularStores />
      <LatestCoupons />
      <BlogSection />

      {/* Categories Section */}
      <section className="bg-white py-20 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="section-tag mx-auto">🗂️ Browse by Category</div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain">
              Top Categories
            </h2>
            <p className="text-gray-500 mt-2">
              Find the best deals in your favourite shopping category
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat._id || cat.name}
                to={`/coupons?category=${encodeURIComponent(cat.name.toLowerCase())}`}
                className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

export default HomePage;
