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
                
                <h4>Михаил <span> Пасичнюк</span></h4>
                
                <p className="paragraph">
                    Frontend React-разработчик и программист JavaScript с планами на Фулл-стек. Опыт работы в медиа и дизайне.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>направление </p>
                        <p>возраст</p>
                        <p>локация</p>
                        <p>языки</p>
                        <p>работа</p>
                    </div>
                    <div className="info">
                        <p>: Фронтенд-разработчик</p>
                        <p>: 35</p>
                        <p>: Москва</p>
                        <p>: English C1 / RU / UA / French A1</p>
                        <p>: Freelance / Full-time / Part-time</p>
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
