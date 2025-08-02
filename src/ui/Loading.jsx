import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-[175px] h-[175px] flex justify-center items-center">
        {/* Spinning border only */}
        <div className="absolute w-full h-full rounded-full border-4 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        
        {/* Static text */}
        <p className="text-red-600 text-[1.5rem] font-bold z-10">Smoothflight</p>
      </div>
    </div>
  );
};

export default Loading;
