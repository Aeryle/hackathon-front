import React from 'react';
import MapImg from '../../img/Map.webp';
import Bg2 from '../../img/bg-2.webp';
import LogoWild from '../../img/LogoWild.webp';

function Map() {
  return (
    <div
      className="p-8 h-screen text-white font-rufina md:p-16"
      style={{
        backgroundImage: `url(${Bg2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}>
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-col ">
          <h1 className="text-3xl md:mt-5 md:text-5xl font-bold">Entrez dans le château</h1>
          <p className="mt-2 text-ls md:text-2xl md:mt-4 md:pr-24">
            Le château de Nathria est un château de style gothique dominant le reste de Revendreth. entrée du château est située dans la zone centrale
            de Revendreth, la trajectoire de vol la plus proche actuellement disponible étant celle de la Ménagerie du Maître.
          </p>
        </div>
        <img className="mt-5 w-full md:w-7/12" src={MapImg} alt="map" />
      </div>
      <p className="mt-16 text-white font-ruthie text-xl md:text-4xl opacity-50">
        Sire Denathrius ne cache plus ses intentions : il compte bien déverser l anima dans l Antre et écraser les rebelles qui s opposent à lui. Le
        prince Rénathal a donc décidé de rassembler les quelques alliés qu il lui reste pour une mission de la dernière chance visant à infiltrer le
        château Nathria et à détrôner sire Denathrius une bonne fois pour toutes.
      </p>
      <div className="mt-6 flex h-20 items-center justify-between">
        <div>
          <h1>MadeByHappyWilders</h1>
          <a href="https://www.wildcodeschool.com/fr-FR">@wildcodeSchool</a>
        </div>
        <img className="w-20" src={LogoWild} alt="" />
      </div>
    </div>
  );
}

export default Map;
