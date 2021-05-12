import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Bg3 from '../img/bg-3.webp';
import { Link } from 'react-router-dom';

function Bosslist() {
  const { isLoading, error, data } = useQuery('boss', () => axios.get('http://localhost:3001/boss'));

  if (isLoading) {
    return <p>IsLoading...</p>;
  }
  if (error) {
    return <h1>Error Sorry...</h1>;
  }

  return (
    <div
      className="p-5 md:p-16 border-b-2 border-gray-500"
      style={{
        backgroundImage: `url(${Bg3})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}>
      <h1 className="mt-8 mb-5 text-3xl md:text-4xl font-rufina text-white font-bold">Boss du Château Nathria</h1>
      <div className="w-full mt-5 flex flex-wrap justify-center md:justify-start">
        {data.data.map((boss) => {
          return (
            <div className="" key={boss.id}>
              <Link to={`/boss/${boss.id}`}>
                <img className="mt-3 w-40 md:w-80 h-66 shadow-2xl" src={boss.image} alt="bossImg" />
                <div className="mt-5  text-white mb-8 md:w-80 w-40 text-center font-rufina text-xl md:text-2xl font-bold">{boss.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bosslist;
