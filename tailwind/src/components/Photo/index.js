import React from 'react';

import Product from '../../assets/foto1.png';

function Photo() {
  return (
   <div className="mt-20 flex flex-col justify-center items-center sm:justify-start sm:items-start sm:ml-5 md:sm-10">
     <img className="w-80 sm:w-96 md:w-1/2 rounded transform transition-all hover:translate-y-1.5 hover:shadow-2xl border-2 border-transparent hover:border-blue-400" src={Product} alt="produto"/>
     <div className="w-80 sm:w-96 md:w-1/2 flex justify-between items-center ">
     <img className="mt-5 w-20 rounded transform transition-all hover:translate-y-1.5 hover:shadow-2xl border-2 border-transparent hover:border-blue-400" src={Product} alt="produto"/>
     <img className="mt-5 w-20 rounded transform transition-all hover:translate-y-1.5 hover:shadow-2xl border-2 border-transparent hover:border-blue-400" src={Product} alt="produto"/>
     <img className="mt-5 w-20 rounded transform transition-all hover:translate-y-1.5 hover:shadow-2xl border-2 border-transparent hover:border-blue-400" src={Product} alt="produto"/>

     </div>

   </div>
  );
}

export default Photo;
