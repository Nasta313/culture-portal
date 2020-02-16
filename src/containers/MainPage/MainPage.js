import React from 'react';
import './MainPage.css';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import data from '../../data/people';
import { Link } from 'react-router-dom';

function MainPage(props) {   
  const authorDay = Math.floor(Math.random() * data.length); 
  let profile = data[authorDay];
  return (
    <div className="main-page">
      <h2 className="title-mainpage">Автор дня</h2>
      <Avatar data={profile}/>
      <Description data={profile}/>
      <Link to="/personalpage"  
            className="read-more-button"
            id={authorDay}
            onClick={props.onButtonClick}>
            Узнать больше
      </Link> 
      <p className="description-mainpage">
        <span>Добро пожаловать на портал,</span> 
        <span>посвященный архитекторам Беларуси.</span> 
      </p>
    </div>
  )
}

export default MainPage;