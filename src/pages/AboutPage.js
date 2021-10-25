import styled from 'styled-components';
import React from 'react';
import {MainLayout} from '../styles/Layouts';
import Title from '../components/Title';
import Imagesection from '../components/ImageSection';
import Servicessection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';
import Particle from '../components/particles';

const Aboutpage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'about me'} span={'about me'} />
                <Imagesection />
                <Servicessection />
                <ReviewsSection/>
            </AboutStyled>
        </MainLayout>
    );
}

const AboutStyled = styled.section`
    
`;

export default Aboutpage;