import { ArrowRight, Calendar, User } from "lucide-react";
import React from "react";
import { Blog } from "../types";

// Mock data - in a real app, this would come from an API
const blogs: Blog[] = [
  {
    id: "1",
    title: "New Launch: Premium Residences in New Cairo",
    excerpt:
      "Discover our latest residential project featuring luxury apartments and world-class amenities.",
    content: "Full article content here...",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    author: "Ahmed Hassan",
    date: "2024-03-15",
    category: "launch",
  },
  {
    id: "2",
    title: "Market Analysis: Real Estate Trends in 2024",
    excerpt:
      "An in-depth look at the current state of Egypt's real estate market and future predictions.",
    content: "Full article content here...",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
    author: "Sarah Ahmed",
    date: "2024-03-10",
    category: "market-update",
  },
  {
    id: "3",
    category: "market-update",
    title: "Market Analysis: Real Estate Trends in 2024",
    excerpt:
      "An in-depth look at the current state of Egypt's real estate market and future predictions.",
    content: "Full article content here...",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
    author: "Sarah Ahmed",
    date: "2024-03-10",
  },
];

const categories = [
  { id: "all", name: "All Posts" },
  { id: "launch", name: "New Launches" },
  { id: "market-update", name: "Market Updates" },
  { id: "news", name: "Industry News" },
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Real Estate Insights
        </h1>
        <p className="mt-2 text-gray-600">
          Stay updated with the latest news and market trends
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden group"
          >
            <div className="relative h-48">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-primary">
                  {categories.find((c) => c.id === blog.category)?.name}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary">
                {blog.title}
              </h2>
              <p className="mt-2 text-gray-600 line-clamp-2">{blog.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                </div>
                <button className="flex items-center text-primary hover:text-indigo-700">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
