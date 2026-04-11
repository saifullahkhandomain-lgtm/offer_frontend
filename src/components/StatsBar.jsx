const stats = [
  { value: "$1B+", label: "Total Saved", icon: "💸" },
  { value: "5,000+", label: "Partner Stores", icon: "🏪" },
  { value: "100K+", label: "Active Coupons", icon: "🎫" },
  { value: "4.9★", label: "User Rating", icon: "⭐" },
];

const StatsBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a0050] via-[#3b0764] to-[#7C3AED] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center py-4 md:py-0 group">
              <span className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </span>
              <div className="text-3xl md:text-4xl font-extrabold text-white leading-none">
                {stat.value}
              </div>
              <div className="text-purple-300 text-sm mt-1 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
