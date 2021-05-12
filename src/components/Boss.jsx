import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import LogoWild from '../img/LogoWild.webp';
import { Link } from 'react-router-dom';

import BossBackground from '../img/bossBackground.png';
import LogoWow from '../img/LogoWow.webp';

function Boss() {
  const { bossId } = useParams();
  const { isLoading, error, data } = useQuery(['boss', bossId], () => axios(`http://localhost:3001/boss/${bossId}`));

  const strategies = useQuery([data?.data?.phases?.[0]?.id], () =>
    axios(`http://localhost:3001/boss/${bossId}/phases/${data?.data?.phases?.[0]?.id}`),
  );

  const [shownRole, setShownRole] = useState('Tank');

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }

  const boss = data.data;
  console.log(boss.videos);
  console.log(strategies);
  return (
    <div
      className="md:px-16"
      style={{
        backgroundImage: `url(${BossBackground})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}>
      <div className="px-5 pt-3 bg-cover bg-center text-white">
        <div className="md:flex md:justify-between md:items-center w-full md:mx-0">
          <Link to="/">
            {' '}
            <button className="focus:outline-none bg-white bg-opacity-10 px-5 py-2 rounded-3xl ml-10">Return Boss List</button>
          </Link>
          <img className="w-12/12" src={LogoWow} alt="Raid's logo" />
        </div>
        <div className="flex flex-row-reverse">
          <div className="md:flex-col w-full md:pl-10">
            <h1 className="font-rufina text-4xl w-full mt-5 text-left md:text-6xl font-bold">{boss.name}</h1>
            <p className="font-rufina mt-3 text-lg md:text-2xl md:mt-5">{boss.description}</p>
          </div>
        </div>
        <div className="flex items-center flex-col text-white">
          <img className="w-full mt-5 md:mt-0 md:w-8/12 h-full " src={boss.image} alt={boss.name} />
        </div>
        {boss.phases.map((phase, index) => (
          <Fragment key={phase.id}>
            <h3 className="mt-5 md:mt-20  md:px-8 font-rufina text-2xl font-bold md:text-6xl">
              Phase.
              {index + 1} ({phase.name})
            </h3>
            <p className="md:px-10 font-rufina mt-2 md:mt-5 md:text-xl ">{phase.strategy}</p>
            {index === 0 && !strategies.isLoading && !strategies.error && (
              <>
                <div className="text-2xl md:px-10 text-white flex justify-start w-full mt-10">
                  {strategies.data.data.map((strategy) => (
                    <button className="focus:outline-none" key={strategy.id} onClick={() => setShownRole(strategy.name)}>
                      <img src={strategy.role.image} alt={strategy.role.name} className="md:w-24 w-12 rounded-full border  mr-2" />
                    </button>
                  ))}
                </div>
                <div className="text-white font-rufina md:px-10">
                  <p className="mt-2 md:mt-5 text-2xl md:text-4xl font-bold text-white">
                    {strategies.data.data.find((strategy) => strategy.role.name === shownRole).name}
                  </p>
                  {strategies.data.data
                    .find((strategy) => strategy.role.name === shownRole)
                    .description.split('\r\n')
                    .filter((description) => description)
                    .map((description, i) => (
                      <p className="font-rufina text-xl mt-5" key={i}>
                        {description}
                      </p>
                    ))}
                </div>
              </>
            )}
          </Fragment>
        ))}
        {boss.videos && (
          <div className="text-white mt-20 pb-20 md:px-10">
            <p className="text-start font-rufina font-bold text-4xl">Video </p>
            {boss.videos.map((video) => {
              return (
                <iframe
                  className="mt-5 w-full md:w-6/12 md:h-96 h-72"
                  src={video.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              );
            })}
          </div>
        )}
        <div className="mt-6 flex h-20 items-center justify-between">
          <div>
            <h1>MadeByHappyWilders</h1>
            <a href="https://www.wildcodeschool.com/fr-FR">@wildcodeSchool</a>
          </div>
          <img className="w-20" src={LogoWild} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Boss;
