import React from 'react';
import LogoWow from '../img/LogoWow.webp';
import LogoRaid from '../img/LogoRaid.webp';
import Map from '../img/Map.webp';

function Header() {
  return (
    <div className="p-5">
      <div className="md:flex justify-end">
        <img src={LogoWow} alt="logoWow" />
      </div>
      <div className="md:flex md:justify-start md:flex-col md:w-7/12 md:ml-24">
        <img className="mt-8 mx-auto md:mx-0" src={LogoRaid} alt="Chateau-de-nathria" />
        <p className="mt-8 text-2xl text-white font-rufina">
          Découvrez Château Nathria, le premier raid de World of Warcraft : Shadowlands. Ce raid se situe en Revendreth et est composé de 10 boss dont
          nous vous proposons les guides complets afin de les tombés.
        </p>
      </div>
      <div className="mt-28 text-white font-rufina md:p-16">
        <h1 className="text-3xl md:mt-5 md:text-5xl font-bold">Entrez dans le château</h1>
        <p className="mt-2 text-ls md:text-xl md:mt-4">
          Le château de Nathria est un château de style gothique dominant le reste de Revendreth. entrée du château est située dans la zone centrale
          de Revendreth, la trajectoire de vol la plus proche actuellement disponible étant celle de la Ménagerie du Maître.
        </p>
        <img className="mt-5" src={Map} alt="map" />
      </div>
    </div>
  );
}

export default Header;
