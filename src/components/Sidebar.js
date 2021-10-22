import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = ({navToggle}) => {
    return (
        <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
            <Navigation/>
        </SidebarStyled>
    );
}

const SidebarStyled = styled.div`
    position: fixed;
    width: 16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    transition: all .4s ease-in-out;

    @media screen and (max-width: 1000px){
        transform: translateX(-100%);
    }

`;

export default Sidebar;
