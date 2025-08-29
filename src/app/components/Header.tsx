'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '../types';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { label: 'Home', href: '/'},
        { label : 'About', href: '/about'},
        { label: 'Services', href: '/services'},
        { label: 'Contact', href: '/contact'}
    ];

    useEffect(() => {
        const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
        
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
    <header
     className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
     }`}
     >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
            MyApp
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
             {navItems.map((item) => (
                <Link
                 key={item.href}
                 href={item.href}
                 className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
                 >
                    {item.label}
                 </Link>
             ))}
            </div>

            {/* Mobile menu button */}
            <button
             className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700  hover:text-base"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                <span className="sr-only">Open main menu </span>
                {isMobileMenuOpen ? (
                    <svg className="blog h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="block:h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                
                )}
             </button>
        </div>

        {/* Mobile Navigationn */}
        {isMobileMenuOpen && (
           <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
                <Link
                 key={item.href}
                 href={item.href}
                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
                 onClick={() => setIsMobileMenuOpen(false)}
                 >
                    {item.label}
                 </Link>
            ))}
            </div>
           </div>
        )}
      </nav>
     </header>
)

};
