import React from 'react';
import styled from 'styled-components';
import { GitHub } from '@material-ui/icons';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

const Menu = ({menuItems}) => {
    return (
        <MenuItemStyled>
            {
            menuItems.map(
                (item)=>{
                    return <div className="grid-item" key={item.id} >
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                            <ul>
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer">
                                        <GitHub/>
                                    </a>
                                </li>
                                <li>
                                    <a href={item.link2} target="_blank" rel="noreferrer">
                                        <ScreenShareIcon/>
                                    </a>
                                </li>
                            </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                }
            )
            }
        </MenuItemStyled>
    );
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
    gap: 2rem;

    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
           
            h6{
                font-size: 1.2rem;
                margin-top: .5rem;
            }
            .portfolio-image{
                a{
                    opacity: 0%;
                }
                ul{
                display: none;
                opacity: 0%;
                scale: 0;
                transition: all .6s ease-in-out;
                li{
                    transform: scale(0);
                }
                }
                &::before{
                    content: "";
                    position: absolute;
                    left: 15px;
                    top: 15px;
                    transform: scale(0);
                    height: 27vh;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                a{
                    opacity: 100%;
                    transition: all .6s ease-in-out;
                }
                ul{
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 30%;
                    
                    transform: translate(-50%, -30%);
                    
                    display: flex;
                    opacity: 100%;
                    align-items: center;
                    justify-content: center;
                    
                    svg{
                        font-size: 3rem;
                        color: white;
                    }                      
                    li{
                        background-color: var(--primary-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: .5rem;
                        margin: 1rem;
                        border-radius: 10%;
                        transition: all .6s ease-in-out;
                        transform: scale(1);

                    }
                    
                }
                &::before{
                    height: 27vh;
                    width: calc(100% - 30px);
                    background-color: var(--primary-color);
                    /* background-color: red; */
                    opacity: .4;
                    transform-origin: center;
                    transform: scale(1);
                    transition: all .2s ease-in-out;
                }
            }
        }
    }
`;


export default Menu;
