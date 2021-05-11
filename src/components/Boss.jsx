import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';

import BossBackground from '../img/bossBackground.png';
import LogoWow from '../img/LogoWow.webp';

function Boss() {
  const { bossId } = useParams();
  const { isLoading, error, data } = useQuery([ 'boss', bossId ], () => axios(`http://localhost:3001/boss/${bossId}`));

  const q = useQueries(
    (data?.data?.phases || []).map(
      (phase) => ({
        queryKey: [ 'phases', phase.id ],
        queryFn: () => axios(`http://localhost:3001/boss/${bossId}/phases/${phase.id}/strategies`),
        enabled: isLoading
      })
    )
  );

  console.log({ q, isLoading, data });

  if (isLoading) {
    return 'loading';
  } else if (error) {
    return 'error';
  }

  console.log('f');

  const boss = data.data;

  return (
    <>
      <div
        className="px-6 pt-3 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${BossBackground})`
        }}
      >
        <img src={LogoWow} alt="Raid's logo" className="mx-auto" />
        <h1 className="mt-6 text-5xl text-center">{boss.name}</h1>
        <p className="text-xl">{boss.description}</p>
      </div>
      <div className="flex items-center flex-col text-white">
        <img src={boss.image} alt={boss.name} />
        {boss.phases.map((phase, index) => {
          return (
            <Fragment key={phase.id}>
              <h3 className="text-2xl">Phase {index + 1} ({phase.name})</h3>
              <p>{phase.strategy}</p>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Boss;
