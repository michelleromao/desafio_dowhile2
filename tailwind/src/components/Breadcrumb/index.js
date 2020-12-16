import React from 'react';
import { FiChevronRight } from 'react-icons/fi';


function Breadcrumb() {
  return (
   <div className="mt-10 ml-5 flex items-center md:m-10 md:mt-20 ">
     <h5 className="text-xm font-medium text-gray-400">ROUPA</h5>
      <FiChevronRight className="text-gray-400"/>
     <h5 className="text-xm font-medium text-gray-400">BLUSA</h5>
     <FiChevronRight className="text-gray-400"/>
     <h5 className="text-xm font-bold text-blue-400">E-GIRL</h5>
   </div>
  );
}

export default Breadcrumb;
