'use client';

import { useState } from 'react';

export default function GeneratePage() {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className=" mt-16 min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Generator</h1>
          <p className="text-lg text-gray-600">Transform your ideas into reality</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <textarea
                className="w-full min-h-[200px] p-4 text-gray-800 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Type something..."
              />
            </div>

            <div className="flex gap-4">
              <select className="flex-1 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <option>Text</option>
                <option>Photo</option>
                <option>Video</option>
                <option>Music</option>
                <option>Voice</option>
              </select>

              <select className="flex-1 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <option>Style 1</option>
                <option>Style 2</option>
                <option>Style 3</option>
              </select>
            </div>

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
              onClick={() => setIsGenerating(!isGenerating)}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Processing...
                </>
              ) : (
                'Generate'
              )}
            </button>

            <div className="mt-8 space-y-4">
              <div className="h-48 bg-gray-50 rounded-xl animate-pulse"/>
              <div className="h-48 bg-gray-50 rounded-xl animate-pulse"/>
            </div>

            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
              <button className="text-blue-600 hover:text-blue-700">
                Download Results
              </button>
              <button className="text-gray-500 hover:text-gray-600">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}