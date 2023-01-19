import React from 'react';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Stanley Escobar
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#5774cc]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>
          I’m a full-stack software developer specializing in building exceptional digital experiences. 
        </p>
       
      </div>
    </div>
  );
};

export default Home;