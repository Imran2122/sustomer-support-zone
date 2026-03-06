import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-16">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-2  lg:grid-cols-5 gap-8">
        
        {/* 1 */}
        <div>
          <h1 className="text-xl font-bold mb-4">CS — Ticket System</h1>
          <p className="text-sm text-gray-400">
            A smart customer support ticket management system designed to
            organize, track and resolve issues efficiently.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h1 className="font-semibold mb-4">Company</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h1 className="font-semibold mb-4">Support</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h1 className="font-semibold mb-4">Resources</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h1 className="font-semibold mb-4">Social Links</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 w-11/12 mx-auto" />

      <div className="text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} CS Ticket System. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
