import React from 'react';

const ProjectDetails = ({project}) => {
    return (
        <div className="col-md-4 p-1">
            <div className="card bg-info text-center">
                <img style={{ height: '200px', width:'100%' }} src={project.img} alt="" />
                <h5 className="mt-3 mb-3 text-success">{project.name}</h5>
                <h6>{project.tools}</h6>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                
                <a href={project.live} target="_blank" rel="noopener noreferrer"><button className="btn btn-warning mb-3">Website link</button></a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer"><button className="btn btn-danger mb-3">GitHub Repository</button></a>
            </div>
        </div>
    );
};

export default ProjectDetails;