import React from 'react';
import { useQuery } from 'react-query';
import Bg2 from '../../img/bg-2.webp';
import axios from 'axios';

function Bosslist() {
  // const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery('boss', () => {
    return axios.get('http://localhost:3001/boss');
  });

  if (isLoading) {
    return <p>IsLoading...</p>;
  } else if (error) {
    return <h1>Error Sorry...</h1>;
  }

  return (
    <div
      className="p-5 md:p-16 h-96"
      style={{
        backgroundImage: `url(${Bg2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}>
      <h1 className="text-3xl md:text-4xl font-rufina text-white font-bold">Boss du Château Nathria</h1>
      {data.data.map((boss) => {
        return (
          <div
            key={boss.id}
            className="text-white w-40 h-60"
            style={{
              backgroundImage: `url(${boss.image})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `left`,
            }}>
            {boss.name}
          </div>
        );
      })}
    </div>
  );
}

export default Bosslist;
