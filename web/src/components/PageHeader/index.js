import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import './styles.css';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function PageHeader() {
    return (
        <div className="page-header">
            <div className="logo">
                <h3>Lucas OLIVEIRA</h3>
            </div>
            <div className="menu">
                <Link to="/" className="menu-item">Home</Link>
                <Link className="menu-item">Sobre</Link>
                <Link className="menu-item">Home</Link>
                <Link className="menu-item">Contatos</Link>
            </div>
        </div>
    );
}

export default PageHeader;