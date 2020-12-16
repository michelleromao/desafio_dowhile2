import React from 'react';

import Logo from '../../assets/logo.svg';
import User from '../../assets/michelleromao.png';


function Header() {
  return (
    <header className="
      flex 
      justify-between 
      items-center 
      mt-10 
      ml-5
      mr-5
      md:m-10
      ">
      <div > 
        <img src={Logo} alt="logo Pega!"/>
      </div>
      <div className="flex items-center justify-center">
      <h3 className="hidden sm:block lg:invisible text-gray-500 font-light text-xl ml-10 ">Categorias</h3>
        <h3 className="hidden lg:block text-gray-500 font-light text-xl ml-10">Roupas</h3>
        <h3 className="hidden lg:block text-gray-500 font-light text-xl ml-10">Acessórios</h3>
        <h3 className="hidden lg:block text-gray-500 font-light text-xl ml-10">Calçados</h3>
        <h3 className="hidden lg:block text-gray-500 font-light text-xl ml-10">Outros</h3>
      </div>
      <div className="flex-col md:flex-row flex items-center justify-center ">
        <p className="hidden order-last sm:visible sm:flex items-center	mr-3 text-gray-500 font-light ">Olá,
         <span className="text-gray-900 font-medium ml-3"> Michelle Romão </span>
        </p>
        <img className="order-first w-11 h-11 rounded-lg md:order-last" src={User} alt="user: michelle romao"/>
      </div>
    </header>
  );
}

export default Header;
