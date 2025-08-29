import React from 'react';
import { Feature } from '../types';

const Features: React.FC = () => {
    const features: Feature[] = [
        {
         id: 1,
         title: 'TypeScript First',
         description: 'Built with Typescript for a decent development experience',
         icon: ''
        },
    ,
    {
     id: 2,
     title: 'Next.js powered',
     description: 'Using recent next stuff',
     icon: ''
    },
    {
     id: 3,
     title: 'Latest Design',
     description: 'Responsinve and Beautiful',
     icon: ''
    },
    {
     id: 4,
     title: 'Modern styling',
     description: 'Tailwing controlled',
     icon: ''
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                This our site
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Add more content here later
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
           key={feature.id}
           className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
           <div className="text-4xl mb-4">{feature.icon}</div>
           <h3 className
        </div>
        </div>
        )}
    </section>
  )
}