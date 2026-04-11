const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Search a Store or Brand",
    desc: "Type any store name or browse by category to find exactly what you're shopping for.",
    color: "from-violet-400 to-violet-600",
    badge: "Quick & Easy",
  },
  {
    number: "02",
    icon: "🎫",
    title: "Pick Your Coupon or Deal",
    desc: "Browse verified codes and deals. Filter by discount type, category, or expiry date.",
    color: "from-pink-400 to-pink-600",
    badge: "100% Verified",
  },
  {
    number: "03",
    icon: "💰",
    title: "Save Money Instantly",
    desc: "Copy the code, head to the store, and watch your total drop at checkout. It's that simple.",
    color: "from-emerald-400 to-emerald-600",
    badge: "Instant Savings",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* subtle bg grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto">⚡ Simple Process</div>
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mt-2 leading-tight">
            How <span className="text-gradient-violet">DealDash</span> Works
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            From search to savings in under 60 seconds — no membership required
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-gradient-to-r from-violet-200 via-pink-200 to-emerald-200 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              {/* Number + icon circle */}
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl leading-none">{step.icon}</span>
                <span className="text-white/70 text-xs font-bold mt-1">{step.number}</span>
              </div>

              {/* Badge */}
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary-light text-primary mb-3 uppercase tracking-wide">
                {step.badge}
              </span>

              <h3 className="text-xl font-bold text-textMain mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
