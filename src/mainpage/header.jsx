import React from 'react';
import LogoWow from '../../img/LogoWow.webp';
import LogoRaid from '../../img/LogoRaid.webp';

function Header() {
  return (
    <div className="p-5 h-screen border-b-2 border-gray-500">
      <div className="md:flex justify-end">
        <img src={LogoWow} alt="logoWow" />
      </div>
      <div className="md:flex mt-20 md:mt-0 md:justify-start md:flex-col md:w-7/12 md:ml-24">
        <img className="mt-8 mx-auto md:mx-0" src={LogoRaid} alt="Chateau-de-nathria" />
        <p className="mt-8 text-xl md:text-2xl text-white font-rufina">
          Découvrez Château Nathria, le premier raid de World of Warcraft : Shadowlands. Ce raid se situe en Revendreth et est composé de 10 boss dont
          nous vous proposons les guides complets afin de les tombés.
        </p>
      </div>
    </div>
  );
}

export default Header;
