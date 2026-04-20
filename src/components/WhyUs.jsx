const features = [
  {
    icon: "🛡️",
    title: "100% Verified Coupons",
    desc: "Every coupon is tested and verified by our team before going live. No expired codes, ever.",
    accent: "bg-violet-50 border-purple-100",
    iconBg: "bg-violet-100",
  },
  {
    icon: "⚡",
    title: "Updated Daily",
    desc: "Our system checks and updates deals every 24 hours so you always get the freshest offers.",
    accent: "bg-pink-50 border-pink-100",
    iconBg: "bg-pink-100",
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    desc: "We never ask for payment info. Browse, find deals, and save — completely free, always.",
    accent: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "🎯",
    title: "5,000+ Partner Stores",
    desc: "From fashion to electronics to food — we cover every category so you save everywhere.",
    accent: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mx-auto">🏆 Why GrabYourPromos?</div>
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mt-2">
            Trusted by <span className="text-gradient-violet">Millions</span> of Shoppers
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We don't just list deals — we verify them, curate them, and deliver them fresh daily
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 p-6 ${f.accent} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className={`w-14 h-14 ${f.iconBg} rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-textMain mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
