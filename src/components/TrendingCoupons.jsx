import { Link } from "react-router-dom";
import { useGetCouponsQuery } from "../store/api/publicEndpoints";
import CouponCard from "../components/CouponCard";

const TrendingCoupons = () => {
  const { data } = useGetCouponsQuery({ trending: true });
  const trendingCoupons = data?.coupons || [];

  const overlayColors = [
    "from-violet-400/20 to-violet-600/20",
    "from-yellow-400/20 to-yellow-600/20",
    "from-pink-400/20 to-pink-600/20",
    "from-violet-400/20 to-violet-600/20",
    "from-blue-400/20 to-blue-600/20",
    "from-orange-400/20 to-orange-600/20",
  ];

  return (
    <section className="bg-white py-20 border-y border-gray-100 relative overflow-hidden">
      {/* decorative bg */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="section-tag">🔥 Hot Right Now</div>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain">
            Trending Coupons &amp; Promotions
          </h2>
          <p className="text-gray-500 mt-1">
            The hottest deals everyone is grabbing right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCoupons.map((coupon, index) => (
            <div key={coupon._id} className="relative">
              {/* Colored overlay background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${overlayColors[index % overlayColors.length]} rounded-xl -z-10`}
              ></div>
              <CouponCard coupon={coupon} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/trending"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            🔥 View All Trending Coupons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingCoupons;
