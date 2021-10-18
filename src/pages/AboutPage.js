import styled from 'styled-components';
import React from 'react';
import {MainLayout} from '../styles/Layouts';
import Title from '../components/Title';
import Imagesection from '../components/ImageSection';
import Servicessection from '../components/ServicesSection';

const Aboutpage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'about me'} span={'about me'} />
                <Imagesection />
                <Servicessection />
            </AboutStyled>
        </MainLayout>
    );
}

const AboutStyled = styled.section``;

export default Aboutpage;
