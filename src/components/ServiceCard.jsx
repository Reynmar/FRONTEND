import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({image, title, paragraph}) => {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    );
}

const ServiceCardStyled = styled.div`
        /* background-color: var(--background-dark-color); */
    background-color: var(--background-dark-grey);
    /* margin: 0 1rem; */
    border-left: 4px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-left: 4px solid var(--primary-color);
        transform: translateX(4px);
        
    }

    .container{
        padding: 2rem;
        
    }

    h4{
        margin: .5rem 0;
        font-size: 2rem;
        text-transform: uppercase;
        color: var(--primary-color);
        position: relative;
        /* &::after{
            content: "";
            width: 2rem;
            background-color: var(--border-color);
            background-color: red;
            height: 4px;
            position: absolute;
            left: 0;
        } */
    }

    img{
        width: 50px;
    }
`;

export default ServiceCard;
