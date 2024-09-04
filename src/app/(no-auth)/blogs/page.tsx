"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./_components/blog-card";

const blogs = [
  {
    title: "The Future of AI in Hospitality",
    description: "Explore how AI is transforming the hospitality industry.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Top 10 Digital Menu Trends",
    description: "Stay ahead with the latest trends in digital menus.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Boosting Customer Engagement",
    description: "Learn strategies to enhance customer engagement.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Innovative Dishes with AI",
    description: "Discover how AI can help create innovative dishes.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "AI in Food Delivery",
    description: "How AI is revolutionizing food delivery services.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Sustainable Practices in Restaurants",
    description: "Implementing sustainable practices in the food industry.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "AI and Customer Service",
    description: "Enhancing customer service with AI technology.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Future of Contactless Dining",
    description: "The rise of contactless dining experiences.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "AI in Inventory Management",
    description: "Optimizing inventory management with AI.",
    link: "#",
    image: "https://via.placeholder.com/150",
  },
];

export default function BlogsPage() {
  return (
    <>
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Discover our latest insights and stories.
            </p>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-5xl">
              Our Blogs
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <BlogCard
                  author="Aziz"
                  readTime="2 min read"
                  title={blog.title}
                  description={blog.description}
                  avatar="https://via.placeholder.com/150"
                  backgroundImage={blog.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
