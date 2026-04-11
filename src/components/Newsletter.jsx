const Newsletter = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0050] via-[#3b0764] to-[#7C3AED] p-8 md:p-16 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            📧 Newsletter
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Never Miss a <span className="text-shimmer">Deal Again!</span>
          </h2>
          <p className="text-purple-200 mb-10 text-lg">
            Join <span className="text-white font-bold">1,000,000+</span> savvy
            shoppers — get the latest verified coupons &amp; exclusive offers
            straight to your inbox.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent/60 transition-all"
            />
            <button className="bg-gradient-to-r from-accent to-orange-400 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
              Subscribe Free 🚀
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-sm text-purple-300">
            <div className="flex items-center gap-1.5">
              <span className="text-success">✓</span> No spam, ever
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-success">✓</span> Unsubscribe anytime
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-success">✓</span> Exclusive deals only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
