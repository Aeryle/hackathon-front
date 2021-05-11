import React from 'react';
import Bg1 from '../../img/bg-1.webp';
import Header from './header';
import Bosslist from './boss-list';

function Mainpage() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${Bg1})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <div className="">
        <Header />
        <Bosslist />
      </div>
    </div>
  );
}

export default Mainpage;
