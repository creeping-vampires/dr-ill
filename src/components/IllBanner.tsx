import React from 'react';

const IllBanner = () => {
  return (
    <div className="overflow-hidden py-4 bg-[#FFFEFA]">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block">
          {[...Array(30)].map((_, i) => (
            <span key={i} className="mx-2 text-gray-300">$ill</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default IllBanner; 