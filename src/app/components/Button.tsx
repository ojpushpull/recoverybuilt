
import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    className =''
    
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200'

    const variantClasses = { 
        primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-grey-500'
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href){
        return (
            <Link href={href} className={classes}>
            {children}
            </Link>
        );
    }

    return(
        <button onClick={onClick} className={classes}>
        {children}
        </button>
     );
   };

export default Button;


