import React from 'react';
import styled from 'styled-components'

const ResumeItem = ({year,title,subtitle,text}) => {
    return (
        <ResumeItemStyled>
            <div className="left-resume-content">
                <p>{year}</p>
            </div>

            <div className="right-resume-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    );
}

const ResumeItemStyled = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: left;
    .left-resume-content{
        flex: 0 1 20%;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -20px;
            top: 7px;
            width: .7rem;
            height: .7rem;
            background-color: white;
        }
        p{
            display: inline-block;
        }
    }
    .right-resume-content{
        margin-left: 5rem;
        position: relative;
        flex: 0 1 80%;
        &::before{
            content: "";
            position: absolute;
            left: -15px;
            top: 10px;
            width: .2rem;
            height: 4rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .2rem;
        }
        h6{
            padding-bottom: 1rem;
            
        }
    }
    
    @media screen and (max-width: 1080px){
        flex-direction: column;

        .right-resume-content{
        margin-left: 1rem;
        }
        .left-resume-content{
        width: 100%;
        }
    }


`;

export default ResumeItem;
