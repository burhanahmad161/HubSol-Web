import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Logo from "../Assets/logo-white.png"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-blue-800 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Company Info */}
                <div>
                    <Image src={Logo} alt="HubSol Logo" width={200} height={40} className="mb-4" />
                    <p>
                        We are creative and professional website designing company in Lahore Pakistan. We are offering the
                        best solutions of web development, logo designing, graphic design, domain registration, web hosting
                        and all IT solutions in Pakistan.
                    </p>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-8">
                    {/* Quick Links */}
                    <div className="md:ml-16">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Our Services</a></li>
                            <li><a href="#" className="hover:text-white">Portfolio</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Web Development</a></li>
                            <li><a href="#" className="hover:text-white">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-white">Web Design</a></li>
                            <li><a href="#" className="hover:text-white">Profile Design</a></li>
                            <li><a href="#" className="hover:text-white">E-Commerce</a></li>
                            <li><a href="#" className="hover:text-white">Graphic Designing</a></li>
                            <li><a href="#" className="hover:text-white">SEO Services</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-2">
                            <a className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white">
                                <MdPhone className="text-xl" />
                            </a>
                            <span>+92 309 0883377</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <a className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white">
                                <MdPhone className="text-xl" />

                            </a>
                            <span>+92 321 888 3377</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <a className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white">
                                <MdEmail className="text-xl" />
                            </a>
                            <span>info@hubsol.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <a className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-white">
                                <MdLocationOn className="text-xl" />
                            </a>
                            <span>Al.madina Street Dharampura Lahore</span>
                        </li>
                    </ul>

                </div>
                {/* Social Media */}
            </div>
            <div className="flex gap-4 mt-6 justify-center">
                <a href="#" className="bg-white hover:bg-blue-500 p-3 rounded-full text-black">
                    <FaFacebookF />
                </a>
                <a href="#" className="bg-white hover:bg-blue-400 p-3 rounded-full text-black">
                    <FaTwitter />
                </a>
                <a href="#" className="bg-white hover:bg-pink-500 p-3 rounded-full text-black">
                    <FaInstagram />
                </a>
                <a href="#" className="bg-white hover:bg-blue-600 p-3 rounded-full text-black">
                    <FaLinkedinIn />
                </a>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                © 2025 HubSol. All rights reserved.
            </div>
        </footer>
    );
}
