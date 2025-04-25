import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BookOpen,
  Tag,
  Clock,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Trends in Software Development for 2025",
    excerpt: "Explore the latest innovations shaping the future of software, from AI-driven coding to low-code platforms.",
    category: "Software Development",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG9wJTIwNSUyMFRyZW5kcyUyMGluJTIwU29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Why IT Training is Essential for Your Team",
    excerpt: "Discover how upskilling your workforce in cloud computing and cybersecurity can boost productivity.",
    category: "IT Training",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBUcmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications with React",
    excerpt: "Learn best practices for creating high-performance web apps using React and modern tools.",
    category: "Software Development",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJ1aWxkaW5nJTIwU2NhbGFibGUlMjBXZWIlMjBBcHBsaWNhdGlvbnMlMjB3aXRoJTIwUmVhY3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "The Importance of Cybersecurity Training",
    excerpt: "Protect your organization with expert-led training on ethical hacking and threat detection.",
    category: "IT Training",
    date: "March 20, 2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const categories = [
  "Software Development",
  "IT Training",
  "Cloud Computing",
  "Cybersecurity",
  "Data Analytics",
];

const recentPosts = blogPosts.slice(0, 3);

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-back",
      offset: 120,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-40"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50"
          style={{
            height: "90%",
            top: "10%",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto py-28 px-6 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Our <span className="text-blue-400">Blog</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-sky-200">
              Stay updated with the latest insights, trends, and tips on software development, IT training, and technology solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        {/* Blog Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-8"
              >
                Latest <span className="text-blue-600">Posts</span>
              </motion.h2>
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      damping: 10,
                    }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      onError={() => console.log(`Failed to load image: ${post.image}`)}
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Tag size={16} className="mr-1" />
                        <span>{post.category}</span>
                        <Clock size={16} className="ml-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                      >
                        Read More <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 mb-8"
                data-aos="fade-left"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-600 hover:text-blue-600 flex items-center"
                      >
                        <BookOpen size={16} className="mr-2" />
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
                data-aos="fade-left"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <h4 className="font-semibold">{post.title}</h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-aos="zoom-in"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Stay Informed with Our <span className="text-blue-600">Blog</span>
          </h3>
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tech insights, tips, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center">
              <Mail size={20} className="mr-2" />
              Subscribe Now
            </button>
            <Link
              to="/contact"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;