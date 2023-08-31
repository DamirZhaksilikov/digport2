import React from 'react';
import './ProjectPage.css';
import { toCommaSeperateList } from './lib/utils';
import { Navigate, useLocation } from 'react-router-dom';
import { projects } from './constants/project_constants';
import { lowerCase } from 'lodash';

export default function ProjectPage() {
    const location = useLocation();
    const pathValues = location.pathname.split("/");
    const projectId = pathValues[pathValues.length - 1];
    const project = getProject(projectId);

    if (!project)
        return <Navigate to="/" replace />

    return (<div id="project-page">
        <div id="project-page-row1" className='project-page-row'>
            {project.visual_content.map(item => {
                return (<div>
                    {renderVisualContent(item)}
                    <div className="project-content-description">{item.description}</div>
                </div>)
            })}
        </div>
        <div id="project-page-row2" className='project-page-row'>
            <div id="project-page-name">
                {project.name}
                {project.isOnGoing && <div id="project-page-ongoing">{"+ currently ongoing +"}</div>}
            </div>
            <div id="project-page-metadata">
                <div className='project-metadata-entry'>
                    <div className='project-page-metadata-title'>Year</div>
                    <div className='project-page-metadata-value'>{project.year}</div>
                </div>
                <div className='project-metadata-entry'>
                    <div className='project-page-metadata-title'>Data origin</div>
                    <div className='project-page-metadata-value'>{toCommaSeperateList(project.data_origin)}</div>
                </div>
                <div className='project-metadata-entry'>
                    <div className='project-page-metadata-title'>Media</div>
                    <div className='project-page-metadata-value'>{toCommaSeperateList(project.forums)}</div>
                </div>
            </div>
            <div id="project-page-description">
                <div dangerouslySetInnerHTML={{ __html: project.long_description }} />

            </div>
        </div>
    </div>)
}

function getProject(id) {
    const match = projects.find(p => lowerCase(id) === lowerCase(p.id));
    return match ? match : null;
}

function renderVisualContent(content) {
    if (content.type === 'image') {
        return (<img className="project-content-item" src={content.src} alt="project content item" />)
    } else if (content.type === 'video') {
        return (<video className="project-content-item" poster={content.coverPhoto} controls>
            <source src={content.src} type="video/mp4" />
        </video>)
    } else if (content.type === 'gif-video') {
        return (<video className="project-content-item" muted loop autoPlay>
            <source src={content.src} type="video/mp4" />
        </video>)
    } else if (content.type === 'vimeo-video') {
        return content.content;
    }

    return (<div />)

}