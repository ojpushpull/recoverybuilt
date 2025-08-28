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

return 


