import React from "react";
import IMG8 from "../assets/Images/8.JPG";
import IMG9 from "../assets/Images/9.JPG";
import IMG16 from "../assets/Images/16.JPG";

const BlogSection = () => {
  const blogs = [
    {
      image: IMG8,
      title: "Luqaimat Delight",
      message: "Experience the authentic taste of traditional Luqaimat, freshly prepared with a touch of sweetness and served with premium hospitality.",
      readTime: "5 min read",
    },
    {
      image: IMG9,
      title: "Tea Time Perfection",
      message: "Savor the perfect cup of tea, expertly brewed and served to provide a comforting and delightful experience for every guest.",
      readTime: "5 min read",
    },
    {
      image: IMG16,
      title: "Sweet Treats Galore",
      message: "Indulge in a selection of exquisite sweets, crafted with care to bring joy and flavor to every moment of your event.",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="bg-gray-100 pb-16 px-4" id="Gallery">
      <div className="max-w-6xl mx-auto">
        {/* Title and description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hospitality Insights and Inspiration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the world of gourmet beverages, from tantalizing seasonal drink selections to the artistry of drink presentation. Discover how every detail enhances your special moments.
          </p>
          <a href="events">
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Explore All Blogs
            </button>
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <a href="/events"><div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-gray-900 opacity-60 text-gray-100 backdrop-blur-xl px-3 py-1 text-sm font-semibold rounded-full">
                {blog.readTime}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.message}</p>
                <div className="flex justify-end mt-4">
                  <button className="text-black group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </button>
                </div>
              </div>
            </div></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
