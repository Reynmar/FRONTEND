import React from 'react';
import styled from 'styled-components';

const ReviewItem = ({text}) => {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    );
}

const ReviewItemStyled = styled.div`
    /* height: 15vh; */
    width: 50%;
    @media screen and (max-width:1080px){
        width: 100%;
    }

    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    &:not(:first-child){
        /* margin-left: 1rem; */
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        bottom: 0;
        top: 100%;
        border-width: .8rem;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;

    }
`;

export default ReviewItem;
