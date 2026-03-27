import React from "react";
import { motion } from "framer-motion";

const categories = [
    { name: "Home Appliance", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/51.webp" },
    { name: "Electronics", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/123.webp" },
    { name: "Laptops / Computers", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/74.webp" },
    { name: "Furniture", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/72.webp" },
    { name: "Medical Equipment & Service", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/127.webp" },
    { name: "Musical Instruments", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/148.webp" },

    { name: "Kids Utilities", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/91.webp" },
    { name: "Fitness & Sports Equipment", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/99.webp" },
    { name: "Generators", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/69.webp" },
    { name: "Vending Machine", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/24.webp" },
    { name: "Machines & Tools", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/73.webp" },
    { name: "Camera & Lenses", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/74.webp" },

    { name: "Automobiles", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/106.webp" },
    { name: "Mobile Washrooms", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/76.webp" },
    { name: "Drones", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/68.webp" },
    { name: "Events", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/30.webp" },
    { name: "Biking & Hiking Gears", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/67.webp" },
    { name: "Gaming Consoles", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/10.webp" },

    { name: "Gardening", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/1.webp" },
    { name: "Security Equipment", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/35.webp" },
    { name: "Construction Machines & Equipment", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/34.webp" },
    { name: "Services", img: "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/category/20.webp" },
];
const Categories = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-orange-500">
                    Top Rented Categories
                </h2>

                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white px-4 py-2 rounded-lg shadow text-sm font-medium hover:bg-blue-950 hover:text-white transition"
                >
                    All Categories
                </motion.button>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-6"
            >
                {categories.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.07,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex flex-col items-center text-center cursor-pointer group"
                    >
                        <motion.div
                            whileHover={{
                                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                            }}
                            className="w-20 h-20 border rounded-xl flex items-center justify-center bg-white transition"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-14 h-14 object-contain"
                            />
                        </motion.div>

                        <p className="mt-2 text-sm font-medium text-gray-700 group-hover:text-orange-500 leading-tight">
                            {item.name}
                        </p>
                    </motion.div>
                ))}

            </motion.div>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#f8e1cf] via-[#f6d2b8] to-[#f3c6a5] 
    rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-md"
                >

                    <div>
                        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                            Give on Rent
                        </h2>

                        <p className="text-sm text-gray-700 mt-2 max-w-xl leading-relaxed">
                            Earn from your Skills and Unused products. List your freelancing
                            services or spare items on Rentit4me - Start earning today
                        </p>

                        <div className="flex gap-4 mt-5">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white px-5 py-2 rounded-lg shadow-sm text-sm font-medium 
          hover:bg-gray-900 hover:text-white transition-all duration-300"
                            >
                                List Your Product
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white px-5 py-2 rounded-lg shadow-sm text-sm font-medium 
          hover:bg-gray-900 hover:text-white transition-all duration-300"
                            >
                                List Your Service
                            </motion.button>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white p-3 rounded-full shadow-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19.615 3.184C21.403 3.66 22 5.402 22 7.2v9.6c0 1.798-.597 3.54-2.385 4.016C17.885 21.3 12 21.3 12 21.3s-5.885 0-7.615-.484C2.597 20.34 2 18.598 2 16.8V7.2c0-1.798.597-3.54 2.385-4.016C6.115 2.7 12 2.7 12 2.7s5.885 0 7.615.484zM10 15.5l5-3.5-5-3.5v7z" />
                            </svg>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Categories;