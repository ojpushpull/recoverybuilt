export interface NavItem {
    label: string;
    href: string;
}
//type definitions for  homepage components

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary'|'secondary';
    size?: 'sm'|'md'|'lg';
    onClick?: () => void;
    href?: string;
    className?: string;
}

export interface SectionProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}