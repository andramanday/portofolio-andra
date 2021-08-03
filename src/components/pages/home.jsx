import React from 'react';
import profilephoto from '../../assets/img/foto-profile.png';
import '../styles/home.scss';
import { Zoom, Fade, Bounce, Roll } from 'react-reveal';

const Home = () =>{
    return(
        <div className="home-wrap">
            <div className="home-info">
                <Zoom><p>Hi,</p></Zoom>
                <Fade><p>I'am, <span className="nama">Andra Manday</span></p></Fade>
                <Bounce><p>Full Stack Developer</p></Bounce>
                <Roll><button>CONTACT</button></Roll>
            </div>
            <div className="home-foto">
                <Fade><img src={profilephoto}/></Fade>
            </div>
        </div>
    )
}

export default Home;