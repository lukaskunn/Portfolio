import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    font-size: 1.8rem;
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default StyledLink;