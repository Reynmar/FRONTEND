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
                <Title title={'Services'} span={'Services'}/>
                <div className="services">
                    <ServiceCard 
                    image={webProgramming}
                    title={'web design'} 
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste.'} 
                    />
                    <ServiceCard 
                    image={animation}
                    title={'animation'} 
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste.'} 
                    />
                    <ServiceCard 
                    image={react}
                    title={'react'} 
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste.'} 
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
    }
`;

export default Servicessection;
