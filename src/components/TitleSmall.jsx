import React from 'react';
import styled from 'styled-components'

const TitleSmall = ({icon, title}) => {
    return (
        <TitleSmallStyled>
            <p>{icon}</p>
            <h4>{title}</h4>
            
        </TitleSmallStyled>
    );
}

const TitleSmallStyled = styled.div`
    display: flex;
    align-items: center;
    svg{
        font-size: 2rem;
    }
    p{
        padding-right: 1rem;
            }
    h4{
        color: white;
        font-size: 2rem;
    }

`;

export default TitleSmall;
