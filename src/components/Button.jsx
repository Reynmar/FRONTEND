import React from 'react';
import styled from 'styled-components'


const Button = ({filterFunc, buttonsList}) => {
    // console.log('BUTTONS ACTIVATED, READ LIST', buttonsList)
    return (
        <ButtonStyled>
            {
            buttonsList.map((text, i) => {
                        return <button key={i} onClick={() => filterFunc(text)}>
                            {text}
                        </button>
                    }
                )
            }
        </ButtonStyled>
    );
}

const ButtonStyled = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


    button{
        padding: 1rem 2rem;
        margin: 1rem;
        outline: none;
        border: none;
        background-color: var(--border-color);
        color: white;
        border-radius: 10px;
        transition: all .2s ease-in-out;
        font-size: inherit;
        cursor: pointer;

        :active, &:focus {
            background-color: var(--primary-color);
        }
        :hover{
            transform: scale(1.2);
            
        
        }
    }


`;

export default Button;
