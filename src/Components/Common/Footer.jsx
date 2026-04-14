import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244d3b] text-white py-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                <h2 className="text-5xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h2>

                <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center gap-4 mb-12">
                    <span className="text-lg font-medium">Social Links</span>

                    <div className="flex gap-4">
                        <a className="p-2 rounded-full cursor-pointer bg-white text-black">
                            <CiInstagram size={28} />
                        </a>

                        <a className="p-2 rounded-full bg-gray-50 text-black cursor-pointer ">
                            <FaFacebook size={28} />
                        </a>

                        <a className="p-2 rounded-full bg-white text-black cursor-pointer ">
                            <FaXTwitter size={28} />
                        </a>
                    </div>
                </div>

                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-8">
                        <a className="hover:text-white transition-colors">Privacy Policy</a>
                        <a className="hover:text-white transition-colors">Terms of Service</a>
                        <a className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;