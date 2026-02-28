import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Wedding Trends for 2026",
    excerpt: "Discover the latest wedding trends that are making waves in Chennai's event scene this year.",
    author: "Cheerbucks Team",
    date: "2026-02-15",
    readTime: "5 min read",
    category: "Weddings",
    image: "/assets/Corporate_Events/corporate event 2.jpeg",
    slug: "top-10-wedding-trends-2026"
  },
  {
    id: 2,
    title: "How to Plan the Perfect Corporate Event",
    excerpt: "Essential tips and strategies for organizing memorable corporate events that impress.",
    author: "Event Planning Experts",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Corporate Events",
    image: "/assets/Corporate_Events/corporate event 3.jpeg",
    slug: "perfect-corporate-event-planning"
  },
  {
    id: 3,
    title: "Birthday Party Ideas for All Ages",
    excerpt: "Creative birthday celebration ideas that work for kids, teens, and adults alike.",
    author: "Creative Team",
    date: "2026-02-05",
    readTime: "4 min read",
    category: "Birthdays",
    image: "/assets/Corporate_Events/corporate event 4.jpeg",
    slug: "birthday-party-ideas-all-ages"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4"
          >
            📝 Blog & Resources
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
          >
            Event Planning <span className="italic text-primary-600">Tips & Trends</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Expert advice, latest trends, and inspiring ideas to make your events unforgettable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-[20%_0] transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-600">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full transition-colors font-medium"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
