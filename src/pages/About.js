import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade'
import GridComponent from '../components/grid';
import Profile from '../components/Images/benbw.jpg' 
// import GridComponent from '';
// import {Row, Col} from "reactstrap";

const TypeStyle = styled.div`

font-family: "Courier";
font-size: 45px;
position: absolute;
top: 80%;
left: 25%;
white-space: nowrap;
overflow: hidden;
width: 4em;

const styles = {
    fontFamily: 'sans-serif';
    textAlign: "center";
}
`
const style = {
    width: 500,
    height: 500
}

const Home = () => (
    <> 
    <Fade effect="fadeIn" duration={3000}>
         <GridComponent>
        <img src={Profile} alt="Profile" style={style} className='Profile' />
          </GridComponent>
         </Fade>


    <h1>Ben Cummings</h1>


 

    <h3>I graduated from Appalachian State University in 2010 with a degree in
         Communications, Journalism. I'm currently working at a fabric shop in
          Haw River. I became interested in Software Development at the beginning of 2020. 
          I'm currently enrolled in the UNC-Chapel Hill coding bootcamp. I look forward to 
          applying these skills in a team-driven environment to develop exciting and interesting apps.
</h3>
</>
 

);

export default Home;
