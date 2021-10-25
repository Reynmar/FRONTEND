import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
import webProgramming from "../icons/web-programming.png"
import animation from "../icons/animation.png"
import react from "../icons/startup.png"



const Servicessection = () => {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={'навыки'} span={'навыки'}/>
                <div className="services">
                    <ServiceCard 
                    image={webProgramming}
                    title={'web дизайн'} 
                    paragraph={'Опыт работы в графическом дизайне, понимание композиции, типографики и теории цвета.'} 
                    />
                    <ServiceCard 
                    image={animation}
                    title={'анимация'} 
                    paragraph={'Опыт работы с моушн-графикой и 3D анимацией, понимание монтажа и time-based медиа.'} 
                    />
                    <ServiceCard 
                    image={react}
                    title={'react'} 
                    paragraph={'Этот сайт создан на React: самом популярном на данный момент фреймворке для создания интерактивных веб-страниц и современных SPA.'} 
                    />
                </div>
            </ServiceSectionStyled>
        </InnerLayout>
    );
}

const ServiceSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
    
    @media screen and (max-width: 1080px){
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .services{
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }
    
`;

export default Servicessection;
