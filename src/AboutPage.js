import React, { useState, useContext } from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import cv_pdf from './assets/general/CV-2023.09.pdf'
import FacesVideo from '../src/assets/split_frames/icouldnthelpbutlook2.mp4'
import { WindowContext } from './App';


function importAll(r) {
    let sortedKeys = r.keys().sort()

    let images = {};
    sortedKeys.map((item, index) => { return images[index] = r(item); });

    return images;
}

const images = importAll(require.context('./assets/split_frames', false, /\.jpg/));
const artistBioText = <div><div>Damir Zhaksilikov is a <i>web crawler</i>––ingesting, parsing and interpreting the mass of online data produced as byproducts of ideological and geopolitical violence. Through these investigations he transforms this information into software and visual language in which the machine takes the form of those impacted. In doing so, he considers how current computation relating to, and often aiding, this violence can be reverse engineered and meaningfully reconfigured. Damir’s work has taken the form of films, software, humanoid robots, and even mechanical organs. His programmatic focuses include web platforms, ML modeling, as well as data ingestion, storage, and architecture.</div><br/><div> Zhaksilikov received his BS in Computer Science from the University of Washington and more recently, his MA in Contextual Design from the Design Academy Eindhoven. Originally from Kazakhstan and the United States, he currently resides in the Netherlands.</div></div>;

export default function AboutPage() {
    const [hoverIndex, setHoverIndex] = useState(93);
    const browserWindow = useContext(WindowContext).browserWindow;

    return (<div id="about-page">
        {!browserWindow.isMobileDetected && <div id='scroll-markers-container'>
            {
                Object.keys(images).map((key, i) => {
                    return <div key={key} id={key} className='scroll-marker' onMouseEnter={() => { setHoverIndex(i) }} />
                })
            }
        </div>}
        <div id="about-page-content">
            {!browserWindow.isMobileDetected && <div id="cover-images">
                {
                    Object.keys(images).map((key, i) => {
                        return <img src={images[i]} key={i} className={hoverIndex === i ? 'cover-image' : 'cover-image hidden-cover-image'} alt="I cant close my eyes" />
                    })
                }
            </div>}

            {browserWindow.isMobileDetected && <video playsInline id='cover-images-video' muted="true" autoPlay loop>
                <source src={FacesVideo} type="video/mp4" />
            </video>
            }

            <div id="cover-image-caption">
                <i>I couldn't help but watch</i>
            </div>
            <div id="artist-bio-text">
                {'***'}
                <br />
                <div id="bio-main-text">{artistBioText}</div>
                <br />
            </div>
            <div id="contact-links">
                <Link className='contact-link' to='mailto:damir.zhaksilikov@gmail.com' target='_blank'>damir.zhaksilikov@gmail.com</Link><br />
                <br />
                <a href={cv_pdf} target="_blank">CV</a><br />
                <Link className='contact-link' to='https://www.are.na/damir-zhaksilikov/' target='_blank'>are.na</Link><br />
                <Link className='contact-link' to='https://www.instagram.com/damirzhaksilikov/' target='_blank'>social</Link><br />
                <Link className='contact-link' to='https://sleepingonaspeedway.substack.com/' target='_blank'>substack</Link><br />
            </div>
        </div>
    </div>)
}