import React from 'react';
import styled from 'styled-components';
import Particle from '../components/particles';

const Homepage = () => {
    return (
        <HomePageStyled>
          <div className="p-particles-js">
              <Particle/>
          </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js{
        position: absolute;
        top: 0;
    }
`;


export default Homepage;
