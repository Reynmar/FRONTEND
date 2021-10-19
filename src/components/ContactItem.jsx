import React from 'react';

import styled from 'styled-components';

const ContactItem = ({icon, title, contact1, contact2}) => {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>{icon}</p>
            </div>

            <div className="right-content">
                <h3>{title}</h3>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    );
}

const ContactItemStyled = styled.div`
    margin: 0 0 1rem 0;
    padding: 2rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    

    .left-content{
        border: 1px solid var(--border-color);
        padding: 1rem;
        margin-right: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            font-size: 3rem;
            
        }
    }
    .right-content{
        h3{
            color: white;
            text-transform: uppercase;
            font-size: 1.2rem;
            padding-bottom: 0.5rem;
            /* 4-51 start reusme page */
        }
    }
`;

export default ContactItem;
