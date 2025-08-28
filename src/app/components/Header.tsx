import React from 'react';
import Link from 'next/link';
import { NavItem } from '../types';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { label: 'Home', href: '/'},
        { label : 'About', href: '/about'},
        { label: 'Services', href '/services'},
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
        </div>
      </nav>
     </header>
)


