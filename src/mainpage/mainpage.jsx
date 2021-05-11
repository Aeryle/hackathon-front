import React from 'react';
import Bg1 from '../img/bg-1.webp';
import Header from './header';
import Bosslist from './boss-list';
import Map from './map.jsx';

function Mainpage() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${Bg1})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}>
      <div className="">
        <Header />
        <Bosslist />
        <Map />
      </div>
    </div>
  );
}

export default Mainpage;
