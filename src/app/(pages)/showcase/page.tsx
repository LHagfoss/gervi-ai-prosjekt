'use client';

import { useState, useEffect } from 'react';

async function getImages() {
  try {
    const response = await fetch('/api/images');
    const data = await response.json();
    return data.images;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export default function ShowcasePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then(setImages);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Generated Images Showcase
        </h1>
        <p className="text-xl text-slate-600 text-center mb-12">
          All our AI-generated masterpieces
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={`/generated/${image}`}
                  alt={`Generated image ${index + 1}`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/80 text-sm">
                      {image}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}