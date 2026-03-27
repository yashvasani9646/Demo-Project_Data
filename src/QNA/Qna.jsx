import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    "Why Rentit4me?",
    "How does Rentit4me work?",
    "How to Take a Product on rent from Rentit4me?",
    "What things can I Rent from Rentit4me?",
    "Can I cancel my rental order?",
    "What happens if I return the product early?",
    "What if my KYC verification fails?",
];

const allLogos = [
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/VYOM.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Vitto.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/inner.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/FMS%20delhi.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/firefox.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/dexian.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/copy.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-27.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-26.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-25.webp",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-12.png",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-10.png",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-9.png",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-10.png",
    "https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/icons/Asset-8.png",
];



const Qna = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
                Got Questions? <span className="text-orange-500">We’ve Got Answers!</span>
            </h2>

            <div className="space-y-4 mb-20">
                {faqs.map((q, i) => (
                    <div key={i} className="bg-white border rounded-xl shadow-sm overflow-hidden">
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                        >
                            <span>{i + 1}. {q}</span>

                            <motion.span
                                animate={{ rotate: openIndex === i ? 45 : 0 }}
                                className="text-xl font-bold text-orange-500"
                            >
                                +
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-5 pb-4 text-sm text-gray-600"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-bold text-orange-500 mb-8">
                Our Corporate Customers
            </h3>

            <div className="space-y-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                {[0, 1, 2].map((row) => (
                    <div key={row} className="overflow-hidden">
                        <motion.div
                            className="flex gap-6 w-max"
                            animate={{
                                x: row % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 40,
                                ease: "linear",
                            }}
                        >
                            {[...allLogos, ...allLogos].map((logo, i) => (
                                <div
                                    key={i}
                                    className="bg-white border rounded-xl px-6 py-4 flex items-center justify-center shadow-sm min-w-[150px] h-[80px] hover:shadow-md transition"
                                >
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="max-h-10 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}

            </div>



        </div>
    );
};

export default Qna;