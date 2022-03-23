import React from 'react';
import styled from 'styled-components';
import resume from '../img/aboutme_cr.jpg';
import Buttonprimary from './ButtonPrimary';

const Imagesection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>
                    Mikhail <span> Pasichniuk</span>
                </h4>

                <p className="paragraph">
                    Frontend, JavaScript, React-developer, passionate for modern
                    technology, with additional expereince in media and visuals.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Job field </p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Languages</p>
                        <p>Job type</p>
                    </div>
                    <div className="info">
                        <p>: Frontend Developer</p>
                        <p>: 35</p>
                        <p>: Charlotte, NC</p>
                        <p>: English. Ukrainian. Russian. </p>
                        <p>: Full-time, Part-time, Remote</p>
                    </div>
                </div>
                {/* <Buttonprimary title={'Скачать резюме'}/>
                <a href="http://"></a> */}
            </div>
        </ImageSectionStyled>
    );
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    margin-left: 2rem;
    
    .left-content{
        flex: 0 0 30%;
        margin-right: 2rem;

        img{
            width: 80%;
            object-fit: cover;
            box-shadow: 0px 0px 10px 5px var(--primary-color);
            border-radius:5%;
            
        }
    }

    .right-content{
        flex: 0 1 50%;

        h4{
            font-size: 2rem;
            color: white;
            span{
                font-size: inherit;
                color: var(--primary-color);
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1rem;
            .info-title{
                padding-right: 2rem;
                font-weight: 600;
                text-transform: uppercase;
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }

    @media screen and (max-width: 1080px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .left-content{
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 50%;
            }
        }
    }
`;

export default Imagesection;
