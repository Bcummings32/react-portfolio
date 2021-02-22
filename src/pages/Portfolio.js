import React from 'react';
import './Portfolio.css';
import GridComponent from '../components/grid.js';

 const Portfolio = () => {
    return( 
    <div className="container">
    <div className="row">
        {/* <div className="col-sm-12 col-lg-4"> 
        <GridComponent>
        <a href="#">
        <img className="rounded float-left img-fluid" src='https://media2.fdncms.com/eastbayexpress/imager/u/original/17703015/soccer-ball-ss-img.jpg' width="350" height="350" alt="Soccer Scores" rel="noopener noreferrer"/> 
        </a>
        </GridComponent>
        </div>  */}

         <div className="col-sm-12 col-lg-4"> 
        <GridComponent>
        <a href="https://github.com/Bcummings32/budget-app"><h1>Budget App</h1>
        <img className="rounded float-left img-fluid" src='https://media2.fdncms.com/eastbayexpress/imager/u/original/17703015/soccer-ball-ss-img.jpg' width="350" height="350" alt="budget-app" rel="noopener noreferrer"/> 
        </a>
        </GridComponent>
        </div>

        <div className="col-sm-12 col-lg-4"> 
        <GridComponent>
        <a href="https://github.com/Bcummings32/benemployee-directory"><h1>Employee Directory</h1>
        </a>
        </GridComponent>
        </div>

    <div className="col-sm-12 col-lg-4"> 
        <GridComponent>
        <a href="https://github.com/gabrielejm/Videogame-Playlist"><h1>Videogame Playlist Group Project</h1>
        <img className="rounded float-left img-fluid" src='https://www.mediaplaynews.com/wp-content/uploads/2020/02/videogames-1-e1522270884482.jpg' width="350" height="350" alt="Soccer Scores" rel="noopener noreferrer"/> 
        </a>
        </GridComponent>
        </div>

        <div className="col-sm-12 col-lg-4"> 
        <GridComponent>
        <a href="https://github.com/Bcummings32/Project-1-Soccer-Scores"><h1>Soccer Scores Group Project</h1>
         <img className="rounded float-left img-fluid" src='https://media2.fdncms.com/eastbayexpress/imager/u/original/17703015/soccer-ball-ss-img.jpg' width="350" height="350" alt="Soccer Scores" rel="noopener noreferrer"/> 
        </a>
        </GridComponent>
        </div>

        <div className="col-sm-12 col-lg-4"> 
        <GridComponent>
        <a href="https://bcummings32.github.io/weather-dashboard3/"><h1>Weather Dashboard</h1>
        </a>
        </GridComponent>
        </div>
        </div>
        </div>
        
        
        )
};
export default Portfolio;