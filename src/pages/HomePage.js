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
                <h1>Hi I am <span>Mikhail Pasichniuk</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos atque ratione quis architecto rerum id tenetur repudiandae distinctio quaerat.</p>
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
