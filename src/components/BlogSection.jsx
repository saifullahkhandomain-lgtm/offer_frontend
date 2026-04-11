import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Best Ways to Save Money While Shopping Online",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    date: "Dec 15, 2024",
    tag: "Saving Tips",
    tagColor: "bg-violet-500",
  },
  {
    id: 2,
    title: "Black Friday 2024: The Ultimate Shopper's Guide",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop",
    date: "Dec 10, 2024",
    tag: "Guides",
    tagColor: "bg-pink-500",
  },
  {
    id: 3,
    title: "How to Stack Coupons Like a Pro",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop",
    date: "Dec 5, 2024",
    tag: "Pro Tips",
    tagColor: "bg-emerald-500",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-background py-24 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="section-tag">📝 Savings Tips</div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mt-1">
              Shop Smarter With Us
            </h2>
            <p className="text-gray-500 mt-1">
              Expert tips to maximize your savings every day
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group shrink-0"
          >
            All Articles
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="relative rounded-2xl overflow-hidden group h-72 block shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background image */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className={`self-start text-xs font-bold text-white px-3 py-1 rounded-full mb-3 ${post.tagColor}`}>
                  {post.tag}
                </span>
                <h3 className="font-bold text-lg text-white leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <span className="text-white/50 text-xs mt-2">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            📚 Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
