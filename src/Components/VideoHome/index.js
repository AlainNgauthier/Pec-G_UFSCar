import React from 'react';
import './VideoHome.css';

import Video from '../Assets/Videos/bgvideo.mp4'

const VideoHOme = () => {
    return(
        <div className="video__content">
            <div className="video__content-bg">
                    <video autoPlay loop muted src={Video} type='video/mp4' ></video>
            </div>
            <div className="video__content-title">
                <h1>Programa de Estudantes Convênio - Graduação</h1>
                <span>
                    Portal oficial do PEC-G 
                    da Universidade Federal de São Carlos
                </span>
            </div>
        </div>
    );
}
export default VideoHOme;