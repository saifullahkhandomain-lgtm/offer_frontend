import { useState } from "react";
import { Link } from "react-router-dom";
import CouponCard from "./CouponCard";
import Loader from "./Loader";
import { useGetCouponsQuery } from "../store/api/publicEndpoints";

const LatestCoupons = () => {
  const { data, isLoading: loading } = useGetCouponsQuery({ limit: 20 });
  const coupons = data?.coupons || [];
  const [filter, setFilter] = useState("All"); // All, Code, Deal

  const filteredCoupons = coupons
    .filter((c) => {
      if (filter === "All") return true;
      return c.type === filter;
    })
    .slice(0, 9); // Display top 9 after filtering

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="section-tag">🎟️ Fresh Picks</div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain">
              Latest Coupons &amp; Deals
            </h2>
            <p className="text-gray-500 mt-1">
              Discover the best verified coupons from top stores
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setFilter("All")}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === "All" ? "bg-primary text-white shadow-sm shadow-primary/30" : "bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Code")}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === "Code" ? "bg-primary text-white shadow-sm shadow-primary/30" : "bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
            >
              Codes
            </button>
            <button
              onClick={() => setFilter("Deal")}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === "Deal" ? "bg-primary text-white shadow-sm shadow-primary/30" : "bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
            >
              Deals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full"><Loader text="Loading coupons..." /></div>
          ) : filteredCoupons.map((coupon) => (
            <CouponCard key={coupon._id} coupon={coupon} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/coupons"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            🎫 Explore All Coupons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCoupons;
