import { Link } from 'react-router-dom';
import './ProjectPreviewContainer.css'
import { useState, useRef } from 'react';
import { toCommaSeperateList } from './lib/utils';

export default function ProjectPreviewContainer(props) {
    const [hover, setHover] = useState({ isHovering: false, hasHovered: false });
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        if (videoRef && videoRef.current) {
            var playPromise = videoRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => { })
                    .catch(error => { });
            }
        }
    }

    const handlePauseVideo = () => {
        if (videoRef && videoRef.current) {
            var pausePromise = videoRef.current.pause();

            if (pausePromise !== undefined) {
                pausePromise.then(_ => { })
                    .catch(error => { });
            }
        }
    }

    return (
        <Link to={'/projects/' + props.id} 
        className={props.isFirst ? "project-preview-container right-most-preview-container" : "project-preview-container"}
            onMouseEnter={() => {
                setHover({ isHovering: true, hasHovered: true });
                handlePlayVideo();
            }}
            onMouseLeave={() => {
                setHover({ isHovering: false, hasHovered: hover.hasHovered });
                handlePauseVideo();
            }}
        >
            <div className='project-cover-image-container'>
                <img className={hover.isHovering ? 'project-cover-image project-cover-image-hidden' : 'project-cover-image'} src={props.image_src} alt='props.image_src' />
                <video ref={videoRef} className={hover.hasHovered ? 'project-cover-video' : 'project-cover-video project-cover-video-hidden'} muted loop>
                    <source src={props.video_src} type="video/mp4" />
                </video>


            </div>
            <div className='project-info-container'>
                <div className='project-info-row1'>
                    <div>
                        <div className={hover.isHovering ? 'hovering-project-title project-title' : 'project-title'}>
                            {props.isOnGoing ?
                                <div>
                                    {props.name}
                                    <i> (ongoing)</i>
                                </div> :
                                props.name
                            }
                        </div>
                    </div>

                    <div className='project-metadata-container'>
                        <div className='project-metadata'>
                            <div className='project-metadata-title'>Year</div>
                            <div className='project-metadata-value'>{props.year}</div>
                        </div>
                        <div className='project-metadata'>
                            <div className='project-metadata-title'>Data Origin</div>
                            <div className='project-metadata-value'>{toCommaSeperateList(props.data_origin)}</div>
                        </div>
                        <div className='project-metadata'>
                            <div className='project-metadata-title'>Media</div>
                            <div className='project-metadata-value'>{toCommaSeperateList(props.forums)}</div>
                        </div>
                    </div>
                </div>
                <div className='project-info-row2'>
                    <div className='project-description'>{props.description}</div>
                </div>
            </div>
        </Link>
    );
}