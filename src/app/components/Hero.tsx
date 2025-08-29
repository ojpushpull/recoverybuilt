import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                        Hero Text and or image{''}
                        <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                            Recovbuild
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        
                    </p>
                </div>
            </div>
        </section>
    )
}