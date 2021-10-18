import React from 'react';
import styled from 'styled-components';
import resume from '../img/img (1).jpg';
import Buttonprimary from './ButtonPrimary';

const Imagesection = () => {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                
                <h4>Mikhail <span> Pasichniuk</span></h4>
                
                <p className="paragraph">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora accusantium quos rem unde. Recusandae sequi id natus laudantium corrupti. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Occupation </p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Languages</p>
                        <p>Work</p>
                    </div>
                    <div className="info">
                        <p>: Frontend Developer</p>
                        <p>: 35</p>
                        <p>: Moscow, Russia</p>
                        <p>: English C1, Russian, Ukrainian, French</p>
                        <p>: Freelance, Full-time, Part-time</p>
                    </div>
                </div>
                <Buttonprimary title={'Скачать резюме'}/>
            </div>
        </ImageSectionStyled>
    );
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    
    .left-content{
        width: 100%;
        
        img{
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }

    .right-content{
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
                padding-right: 3rem;
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
`;

export default Imagesection;
