import React from 'react'
import { MapPin, Truck, Search, Smartphone, ShoppingCart } from 'lucide-react'

const Navbar = () => {
    const categories = [
        { name: "Hospital Beds" },

        {
            name: "Home Appliance",
            sub: [
                "Refrigerator", "Washing Machine", "Microwave", "Air Purifier",
                "TV", "Fan", "Heater", "Mixer", "Cooler"
            ]
        },

        { name: "Bikes & Scooters" },
        { name: "Geyser" },
        { name: "Wheel Chairs" },

        {
            name: "Musical Instruments",
            sub: [
                "Guitar", "Keyboard", "Drum", "Piano",
                "Violin", "Flute", "Tabla", "DJ Set"
            ]
        },

        { name: "AC & Coolers" },

        {
            name: "Generators",
            sub: [
                "Small Generator", "Industrial Generator",
                "Inverter", "Battery", "Solar Generator"
            ]
        },

        { name: "All Categories" }
    ]
    return (
        <div>
            <div className="bg-gray-900 text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">

                    <div className='font-semibold text-lg'>
                        Welcome to <span className="font-semibold">rent4me</span>
                    </div>

                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 font-semibold">
                            <MapPin size={16} />
                            <span>Delivery to Surat, India</span>
                        </div>

                        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300 font-semibold">
                            <Truck size={16} />
                            <span>Track your order</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="shadow">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    <div className="flex items-center gap-6 w-full">

                        <img
                            src="https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/new-theme/img/logo.png"
                            alt="logo"
                            className="h-10"
                        />

                        <div className="flex items-center border rounded-md overflow-hidden w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-3 py-2 w-full outline-none"
                            />
                            <button className="bg-gray-900 text-white px-4 py-2">
                                <Search size={18} />
                            </button>
                        </div>

                    </div>

                    <div className="flex items-center gap-4 ml-6">

                        <div className="flex items-center gap-3 cursor-pointer whitespace-nowrap">
                            <Smartphone size={22} />
                            <span className="text-base font-medium leading-none">Download App</span>
                        </div>

                        <div className="h-6 w-px bg-gray-300"></div>

                        <div className="text-base font-medium cursor-pointer whitespace-nowrap">
                            Partner with rent4me
                        </div>

                        <div className="h-6 w-px bg-gray-300"></div>

                        <button className="text-base font-semibold whitespace-nowrap">
                            Login / Signup
                        </button>

                        <div className="h-6 w-px bg-gray-300"></div>

                        <div className="cursor-pointer">
                            <ShoppingCart size={24} />
                        </div>

                    </div>

                </div>
            </div>

            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

                    {categories.map((item, index) => (
                        <div key={index} className="relative group">

                            <button className="bg-white px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-orange-500 hover:text-white whitespace-nowrap flex items-center gap-1 transition">
                                {item.name}

                                {item.sub && (
                                    <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                                        ▼
                                    </span>
                                )}
                            </button>

                            {item.sub && (
                                <div className="absolute left-0 top-[110%] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                                    <div className="bg-white shadow-lg rounded-md min-w-[220px] py-2">

                                        {item.sub.map((subItem, i) => (
                                            <div
                                                key={i}
                                                className="px-4 py-2 text-sm cursor-pointer hover:bg-orange-500 hover:text-white transition"
                                            >
                                                {subItem}
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            )}

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Navbar