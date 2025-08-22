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
}