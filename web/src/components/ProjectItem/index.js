import React from 'react';

// import { Container } from './styles';

function ProjectItem(props) {
  return (
    <div className="project-item">
        <div className="banner">{props.image}ok</div>
        <h1 className="title">{props.title}</h1>
    </div>
  );
}

export default ProjectItem;