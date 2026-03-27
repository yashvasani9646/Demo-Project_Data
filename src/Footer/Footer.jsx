import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#0b1f4a] via-[#0d2a66] to-[#0a1a3a] text-white pt-16 pb-6">

            <div className="max-w-7xl mx-auto px-4">

                <div className="border-b border-white/10 pb-6 mb-10">
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">
                        Popular Searches
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Bikes on rent | Electronics on rent | Furniture on rent | Fitness Equipment |
                        Cameras | Generators | Tools | Gaming Consoles | Drones | Events | Wedding Items |
                        Gardening | Jewellery | Security Equipment
                    </p>
                </div>x
                <div className="grid md:grid-cols-4 gap-10">

                    <div>
                        <h2 className="text-3xl font-bold text-orange-400 mb-4">
                            <img src="https://d1dvdt1hm0c9qh.cloudfront.net/v1.0.1/public/assets/frontend/new-theme/img/logo-light.png" />
                        </h2>

                        <p className="text-sm text-gray-300 leading-6">
                            Plot Number 150, Udyog Vihar <br />
                            Phase 1, Sector 20 <br />
                            Gurgaon - 122002 <br />
                            <span className="font-medium text-white">+91-9319866277</span>
                        </p>

                        <div className="flex gap-4 mt-6 text-gray-300">
                            <FaFacebook className="hover:text-orange-400 cursor-pointer" />
                            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
                            <FaTwitter className="hover:text-orange-400 cursor-pointer" />
                            <FaLinkedin className="hover:text-orange-400 cursor-pointer" />
                        </div>
                    </div>



                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">
                            Menu
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer">Partner with us</li>
                            <li className="hover:text-white cursor-pointer">Submit Requirement</li>
                            <li className="hover:text-white cursor-pointer">Contact us</li>
                            <li className="hover:text-white cursor-pointer">About us</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">
                            Pages
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer">Home Appliance</li>
                            <li className="hover:text-white cursor-pointer">AC & Coolers</li>
                            <li className="hover:text-white cursor-pointer">Bikes & Scooters</li>
                            <li className="hover:text-white cursor-pointer">Hospital Beds</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">
                            Support
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm mb-6">
                            <li className="hover:text-white cursor-pointer">Support Team</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms of Use</li>
                            <li className="hover:text-white cursor-pointer">FAQ</li>
                        </ul>

                        <div className="flex gap-3">
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                className="h-10"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                className="h-10"
                            />
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
                    © 2026 All rights reserved • Rentit4me Clone UI
                </div>

            </div>
        </footer>
    );
};

export default Footer;