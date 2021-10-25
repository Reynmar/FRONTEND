import React from 'react';
import styled from 'styled-components';
import Particle from '../components/particles';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'


const Homepage = () => {
    return (
        <HomePageStyled>

            <div className="p-particles-js">
                <Particle/>
            </div>

            <div className="typography">
                <h1>Михаил Пасичнюк <span> портфолио</span></h1>
                <p>Привет! Я - Михаил Пасичнюк, Junior Frontend React-разработчик и программист JavaScript с опытом работы в медиа и дизайне. </p>
                <p> На этом сайте (кстати, он сделан на Реакте)  вы найдете примере моих проектов по веб-разработке и программированию.</p>
                <div className="icons">
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="icon i-facebook">
                        <FacebookIcon/>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="icon i-github">
                        <GithubIcon/>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="icon i-youtube">
                        <YoutubeIcon/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    p{
        margin-top: 1rem;
    }

    .p-particles-js{
        width: 100%;
        z-index: -2;
        /* position: absolute;
        top: 0;
        left: 0; */
    }

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 80%;
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                transition: all .2s ease-in-out;

                &:hover{
                    background-color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
        }
    }
`;


export default Homepage;