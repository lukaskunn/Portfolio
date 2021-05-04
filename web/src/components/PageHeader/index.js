import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import './styles.css';

function PageHeader() {
    const [scrolled, setScrolled] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    })
    
    let x=['page-header'];
    if(scrolled){
        x.push('scrolled');
    }

    return (
        <div className={x.join(" ")}>
            <div className="logo">
                <h3>Lucas OLIVEIRA</h3>
            </div>
            <div className="menu">
                <Link to="/" className="menu-item">Home</Link>
                <Link className="menu-item">About</Link>
                <Link className="menu-item">Services</Link>
                <Link className="menu-item">Projects</Link>
                <Link className="menu-item">Contacts</Link>
            </div>
        </div>
    );
}

export default PageHeader;