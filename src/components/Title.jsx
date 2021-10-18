import React from 'react';
import styled from 'styled-components';

const Title = ({title, span}) => {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    );
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: white;
        font-size: 3.8rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 8rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
        }
        span{
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 15%;
            left: 2%;
            z-index: -1;
        }
    }
`;

export default Title;
