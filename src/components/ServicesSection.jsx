import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
import webProgramming from "../icons/web-programming.png"
import animation from "../icons/animation.png"
import react from "../icons/startup.png"
import TitleSmall from './TitleSmall';
import BuildIcon from '@mui/icons-material/Build';
import PublicIcon from '@mui/icons-material/Public';

const Servicessection = () => {
    return (
        <ServiceSectionStyled>
            <TitleSmall icon={<PublicIcon />} title={"Job areas"} />
            <div className="services">
                <ServiceCard
                    image={webProgramming}
                    title={"Visual Design"}
                    paragraph={
                        "Опыт работы в графическом дизайне, понимание композиции, типографики и теории цвета."
                    }
                />
                <ServiceCard
                    image={animation}
                    title={"Animation"}
                    paragraph={
                        "Опыт работы с моушн-графикой и 3D анимацией, понимание монтажа и time-based медиа."
                    }
                />
                <ServiceCard
                    image={react}
                    title={"ReactJS"}
                    paragraph={
                        "This website created with  React: world-famous framework for interactive web pages and Single-Page Applications самом популярном на данный момент фреймворке для создания интерактивных веб-страниц и современных SPA."
                    }
                />
            </div>
        </ServiceSectionStyled>
    );
}

const ServiceSectionStyled = styled.section`

    margin-top: 3rem;
    
    .services{
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }
    
    @media screen and (max-width: 1080px){
        .services{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
    
`;

export default Servicessection;
