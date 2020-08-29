import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const PageHeader: React.FC = () => {
  return (
    <div>
    <header className="page-header">
        <div className="top-bar-container">
            <a>Lucas OLIVEIRA</a>
        </div>
    </header>
</div>
  );
}

export default PageHeader;