import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Hey, I'm Gastón 👋</h1>
         <p className="text-base md:text-xl mb-3 font-medium">FullStack Software Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I am 23 years old. I am a software developer with 3 years of experience in IT. I love programming, build valuable software and learning the latest technologies.
         </p>
      </div>
   )
}

export default Intro;