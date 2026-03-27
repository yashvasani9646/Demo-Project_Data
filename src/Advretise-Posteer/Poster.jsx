import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/banner/69b29b1977c42.webp",
  "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/banner/69b29b0c03d8c.webp",
  "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/banner/69ae59605fde6.webp",
  "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/images/banner/69b29b2b55395.webp",
];

const Poster = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-5 overflow-hidden rounded-lg">
      <div className="relative h-[300px]">

        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="banner"
            className="absolute w-full h-full object-cover rounded-lg"
            
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}

            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Poster;