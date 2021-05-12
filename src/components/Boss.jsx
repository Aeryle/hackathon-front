import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

import BossBackground from '../img/bossBackground.png';
import LogoWow from '../img/LogoWow.webp';

function Boss() {
  const { bossId } = useParams();
  const {
    isLoading,
    error,
    data
  } = useQuery(['boss', bossId], () => axios(`http://localhost:3001/boss/${bossId}`));

  const strategies = useQuery([data?.data?.phases?.[0]?.id], () => axios(`http://localhost:3001/boss/${bossId}/phases/${data?.data?.phases?.[0]?.id}`));

  const [shownRole, setShownRole] = useState('Tank');

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }

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
        {boss.phases.map((phase, index) => (
          <Fragment key={phase.id}>
            <h3 className="text-2xl">
              Phase
              {index + 1}
              {' '}
              (
              {phase.name}
              )
            </h3>
            <p>{phase.strategy}</p>
            {index === 0 && !strategies.isLoading && !strategies.error
            && (
              <>
                <div className="text-2xl text-white flex">
                  {strategies.data.data.map((strategy) => (
                    <button key={strategy.id} onClick={() => setShownRole(strategy.name)}>
                      <img src={strategy.role.image} alt={strategy.role.name} className="h-12" />
                    </button>
                  ))}
                </div>
                <div className="text-white">
                  <p
                    className="text-xl text-white"
                  >
                    {strategies.data.data.find((strategy) => strategy.role.name === shownRole).name}
                  </p>
                  {strategies.data.data.find((strategy) => strategy.role.name === shownRole)
                    .description
                    .split('\r\n')
                    .filter((description) => description)
                    .map((description, i) => <p key={i}>{description}</p>)}
                </div>
              </>
            )}
          </Fragment>
        ))}
      </div>
      {boss.videos.length && (
        <div className="text-white">
          <p className="text-2xl">Video</p>
          <p>{boss.videos.map((video) => video.url)}</p>
        </div>
      )}
    </>
  );
}

export default Boss;
