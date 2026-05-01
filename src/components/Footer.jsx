import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            🌞 SunCart
          </h2>
          <p className="text-sm">
            Your go-to store for summer essentials like outfits, skincare,
            sunglasses and beach accessories.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>
          <p>Email: support@suncart.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Chattogram, Bangladesh</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="border-t border-gray-700 py-5">
        <div className="flex justify-center gap-6 text-lg">
          <a href="#" className="text-blue-500"><FaFacebook /></a>
          <a href="#" className="text-blue-500"><FaTwitter /></a>
          <a href="#" className="text-red-500"><FaInstagram /></a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 pb-5">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;