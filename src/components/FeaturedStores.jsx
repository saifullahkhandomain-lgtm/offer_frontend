import { Link } from "react-router-dom";
import { useGetStoresQuery } from "../store/api/publicEndpoints";
import StoreCard from "./StoreCard";

const FeaturedStores = () => {
  const { data: allStores = [] } = useGetStoresQuery();
  const stores = Array.isArray(allStores) ? allStores.slice(0, 12) : [];

  return (
    <section className="bg-white py-20 border-t border-gray-50 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="section-tag">🏪 Top Retailers</div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain">
              Featured Stores
            </h2>
            <p className="text-gray-500 mt-1">
              Browse deals from the world's best brands
            </p>
          </div>
          <Link
            to="/stores"
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            View All Stores
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {stores.map((store) => (
            <Link
              key={store._id || store.id}
              to={`/store/${store.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="card-hover"
            >
              <StoreCard store={store} />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/stores" className="text-primary font-semibold">
            View All Stores →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
