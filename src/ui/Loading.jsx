import React from 'react';

const Loading = () => {
  return (
<div className="fixed top-0 left-0 w-full h-[100dvh] z-[9999] flex justify-center items-center bg-white bg-opacity-80">

      <div className="relative w-[175px] h-[175px] flex justify-center items-center">
        <div className="absolute w-full h-full rounded-full border-4 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <p className="text-red-600 text-[1.5rem] font-bold z-10">Smoothflight</p>
      </div>
    </div>
  );
};

export default Loading;
