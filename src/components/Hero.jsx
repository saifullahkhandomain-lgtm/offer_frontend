import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState({ stores: [], coupons: [] });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [data, setData] = useState({ stores: [], coupons: [] });
  const navigate = useNavigate();

  // Fetch stores and coupons for autocomplete
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [storesRes, couponsRes] = await Promise.all([
          fetch(`${API_URL}/api/stores`),
          fetch(`${API_URL}/api/coupons?limit=100`), // Get more for search
        ]);

        const stores = await storesRes.json();
        const couponsData = await couponsRes.json();

        // Handle new response format { coupons: [], pagination: {} }
        const coupons = couponsData.coupons || couponsData;
        const storesArray = Array.isArray(stores) ? stores : [];
        const couponsArray = Array.isArray(coupons) ? coupons : [];

        setData({ stores: storesArray, coupons: couponsArray });
      } catch (error) {
        console.error("Error fetching search data:", error);
        setData({ stores: [], coupons: [] }); // Set empty on error
      }
    };
    fetchData();
  }, []);

  // Filter suggestions as user types
  React.useEffect(() => {
    if (searchQuery.length > 0) {
      const query = searchQuery.toLowerCase();

      const matchingStores = data.stores
        .filter((store) => store.name.toLowerCase().includes(query))
        .slice(0, 3);

      const matchingCoupons = data.coupons
        .filter(
          (coupon) =>
            coupon.title.toLowerCase().includes(query) ||
            coupon.storeName.toLowerCase().includes(query),
        )
        .slice(0, 3);

      if (matchingStores.length > 0 || matchingCoupons.length > 0) {
        setSuggestions({ stores: matchingStores, coupons: matchingCoupons });
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery, data]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      // Default to searching stores if generic search
      navigate(`/stores?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleStoreClick = (storeName) => {
    setSearchQuery(storeName);
    setShowSuggestions(false);
    navigate(`/store/${storeName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleCouponClick = (coupon) => {
    setSearchQuery(coupon.title);
    setShowSuggestions(false);
    const path = coupon.type === "Deal" ? "/deals" : "/coupons";
    navigate(`${path}?search=${encodeURIComponent(coupon.title)}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a0050] via-[#3b0764] to-[#7C3AED]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        ></div>
      </div>

      {/* Floating Deal Badges */}
      <div className="absolute top-24 left-8 xl:left-24 animate-float hidden lg:block z-10">
        <div className="bg-white rounded-2xl px-4 py-3 shadow-2xl border border-purple-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <div className="text-accent font-bold text-sm leading-none">
                50% OFF
              </div>
              <div className="text-gray-400 text-xs">Flash Deal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-32 right-8 xl:right-24 animate-float-delay hidden lg:block z-10">
        <div className="bg-white rounded-2xl px-4 py-3 shadow-2xl border border-purple-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <div>
              <div className="text-success font-bold text-sm leading-none">
                Verified
              </div>
              <div className="text-gray-400 text-xs">Coupon Code</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-32 left-12 xl:left-32 animate-bounce-badge hidden lg:block z-10">
        <div className="bg-accent text-white rounded-2xl px-4 py-3 shadow-2xl font-bold text-sm">
          🎁 Free Shipping
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div
          className="max-w-4xl mx-auto text-center"
          onClick={() => setShowSuggestions(false)}
        >
          {/* Top Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 glass text-white/90 text-sm font-medium px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            100,000+ Verified Coupons Updated Daily
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up text-5xl md:text-7xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
            Shop Smarter. <span className="text-shimmer">Save Bigger.</span>
            <br />
            Live Better.
          </h1>

          <p className="animate-slide-up-delay text-lg md:text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            Unlock{" "}
            <span className="text-white font-semibold">exclusive coupons</span>{" "}
            &amp;{" "}
            <span className="text-white font-semibold">unbeatable deals</span>{" "}
            from <span className="text-accent font-semibold">5,000+</span> top
            stores — all in one place.
          </p>

          {/* Search Bar */}
          <div className="animate-slide-up-delay2 relative mb-10 max-w-2xl mx-auto z-20">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search stores, coupons, deals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() =>
                      searchQuery.length > 0 && setShowSuggestions(true)
                    }
                    className="w-full h-14 px-6 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-accent focus:bg-white/15 focus:ring-2 focus:ring-accent/30 shadow-lg text-base transition-all"
                    onClick={(e) => e.stopPropagation()}
                  />
                  {/* Suggestions Dropdown */}
                  {showSuggestions &&
                    (suggestions.stores.length > 0 ||
                      suggestions.coupons.length > 0) && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden text-left z-50 max-h-96 overflow-y-auto">
                        {/* Stores Section */}
                        {suggestions.stores.length > 0 && (
                          <div className="border-b border-gray-100 last:border-0">
                            <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Stores
                            </div>
                            {suggestions.stores.map((store) => (
                              <div
                                key={store._id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStoreClick(store.name);
                                }}
                                className="px-6 py-3 hover:bg-primary-light cursor-pointer flex items-center justify-between group"
                              >
                                <div className="flex flex-col items-center gap-3">
                                  {store.logo && (
                                    <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden text-lg">
                                      {store.logo}
                                    </div>
                                  )}
                                  <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
                                    {store.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Coupons Section */}
                        {suggestions.coupons.length > 0 && (
                          <div>
                            <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              Coupons & Deals
                            </div>
                            {suggestions.coupons.map((coupon) => (
                              <div
                                key={coupon._id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCouponClick(coupon);
                                }}
                                className="px-6 py-3 hover:bg-primary-light cursor-pointer group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium text-gray-700 group-hover:text-primary truncate max-w-[200px] md:max-w-sm">
                                      {coupon.title}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      {coupon.storeName}
                                    </p>
                                  </div>
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full whitespace-nowrap">
                                    {coupon.discount || "Deal"}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                </div>
                <button
                  type="submit"
                  className="bg-accent text-white px-8 h-14 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-lg shadow-accent/30 whitespace-nowrap active:scale-95"
                >
                  🔍 Find Deals
                </button>
              </div>
            </form>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-in-delay flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$1B+</div>
              <div className="text-purple-300 text-xs mt-1 uppercase tracking-wide">
                Saved by Shoppers
              </div>
            </div>
            <div className="w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5,000+</div>
              <div className="text-purple-300 text-xs mt-1 uppercase tracking-wide">
                Partner Stores
              </div>
            </div>
            <div className="w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100K+</div>
              <div className="text-purple-300 text-xs mt-1 uppercase tracking-wide">
                Active Coupons
              </div>
            </div>
            <div className="w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Daily</div>
              <div className="text-purple-300 text-xs mt-1 uppercase tracking-wide">
                Fresh Updates
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Savings Ticker */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden py-3 border-y border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex gap-0 animate-ticker" style={{ width: "max-content" }}>
          {[
            "🎉 Ahmed saved $48 at Nike",
            "🛍️ Sara grabbed 30% OFF at ASOS",
            "💸 James saved $120 at Apple",
            "🔥 Priya used SAVE20 at Myntra",
            "✅ Luis saved $15 at Uber Eats",
            "🎁 Emma got free shipping at ZARA",
            "💰 Kevin saved $90 at Samsung",
            "🚀 Aisha used code DEAL50 at H&M",
            "🎉 Ahmed saved $48 at Nike",
            "🛍️ Sara grabbed 30% OFF at ASOS",
            "💸 James saved $120 at Apple",
            "🔥 Priya used SAVE20 at Myntra",
            "✅ Luis saved $15 at Uber Eats",
            "🎁 Emma got free shipping at ZARA",
            "💰 Kevin saved $90 at Samsung",
            "🚀 Aisha used code DEAL50 at H&M",
          ].map((item, i) => (
            <span key={i} className="text-white/80 text-sm font-medium px-8 whitespace-nowrap border-r border-white/10">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 34.7C840 45.3 960 58.7 1080 61.3C1200 64 1320 56 1380 52L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F0FDFA"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
