import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: `I rented a freezer from them and it was a smooth process for me.

Would love to rent again.`,
        name: "Charanjeet Singh",
        city: "Gurugram",
        bgColor: "bg-orange-50",
        textColor: "text-gray-800",
        accent: "text-orange-500",
    },
    {
        text: `I had ordered a Casio for 2 days.

Received the same in excellent condition.`,
        name: "Chandra Kant Raheja",
        city: "Delhi",
        bgColor: "bg-blue-50",
        textColor: "text-gray-800",
        accent: "text-blue-500",
    },
    {
        text: `Nice product working fine.

Quality is also good and on-time delivery.`,
        name: "Yatin Sarna",
        city: "Delhi",
        bgColor: "bg-green-50",
        textColor: "text-gray-800",
        accent: "text-green-500",
    },
];

const blogs = [
    {
        title: "What to Do With Appliances When You Move to a New City or Location",
        img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/blog/69c23cae6c535.jpg",
    },
    {
        title: "How Refrigerators Have Completely Changed the Way We Store and Preserve Food",
        img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/blog/69c0cca94b2af.jpg",
    },
    {
        title: "Buying vs Renting an Air Conditioner: Which Option is Better for You?",
        img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/blog/69bd0d2e5638b.jpg",
    },
    {
        title: "Complete Guide to Choosing the Right Washing Machine for Your Home Needs",
        img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/blog/69bbe51f1d9b0.jpg",
    },
];
const Testinomal = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">

            <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-blue-900">
                    Testimonials
                </h2>
                <p className="text-xl font-semibold mt-2">
                    We don’t just Rent Products,<br />We Build Relationships!
                </p>
            </div>

            <div className="overflow-hidden mb-20">
                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition relative"
                        >


                            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                                {item.text}
                            </p>

                            <div className="mt-5 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                    {item.name[0]}
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-blue-800">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">{item.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-orange-500">
                    Latest Blogs
                </h2>

                <button className="bg-white px-4 py-2 rounded-lg shadow text-sm hover:shadow-md transition">
                    View All
                </button>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {blogs.map((blog, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        whileHover={{ y: -10 }}
                        className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
                    >
                        <div className="relative overflow-hidden h-64">
                            <motion.img
                                src={blog.img}
                                alt=""
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.12 }}
                                transition={{ duration: 0.5 }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full shadow">
                                Blog
                            </div>
                        </div>

                        <div className="p-4">
                            <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-orange-500 transition">
                                {blog.title}
                            </p>

                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Testinomal;