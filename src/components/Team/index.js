import React from 'react';
import { useTranslation } from 'react-i18next';

import TeamBlockPhoto from './TeamBlockPhoto/index';
import TeamTitle from './TeamTitle/index';
import TeamMembers from './TeamMembers/index';
import ParallaxTitle from '../Parallax/TitleSwipe';
import teamData from '../../data/teamData';
import './index.css';

function TeamBlock() {
  const { i18n: { language: lang } } = useTranslation();
  return (
    <div className="conainer">
      {/* <ParallaxTitle
        text1={teamData[lang].title.header[0]}
        text2={teamData[lang].title.header[1]}
      /> */}
      <TeamBlockPhoto />
      <div className="container mb-5">
        <TeamTitle titleData={teamData[lang].title} />
        <TeamMembers teamData={teamData[lang].team} />
      </div>
    </div>
  );
}

export default TeamBlock;
