import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
     <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
                <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 block">
                Website
                </Link>
                <p className="text-gray-400 mb-4 max-w-md">
                Footer Text in a paragraph
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-semibold mb-4"> Links </h3>
                <ul className="space-y-2">
                 <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                    </Link>
                 </li>
                 <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                    </Link>
                 </li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                    <p>email@example.com</p>
                    <p></p>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
<p>&copy;{currentYear}MyApp.All rights reserved.</p>
    </div>
  
</footer>
 );
};
export default Footer;