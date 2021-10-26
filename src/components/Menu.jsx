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

    @media screen and (max-width: 1280px) {
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
                border-radius: 7%;
                border: 8px solid var(--border-color);
                /* filter: blur(2px); */
               
            }
        
            h6{
                font-size: 1.2rem;
                margin-top: .5rem;
            }
            .portfolio-image{
               
                
                /* &::before{
                    content: "";
                    position: absolute;
                    left: 15px;
                    top: 15px;
                    transform: scale(0);
                    height: 27vh;
                    width: 0;
                    transition: all .4s ease-in-out;
                } */
            }
            .portfolio-image{
                a{
                    padding: .3rem 1.2rem;
                    transition: all .6s ease-in-out;
                }
                ul{
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 60%;
                    transform: translate(-50%, -40%);

                    @media screen and (max-width: 1080px){
                        transform: translate(-50%, -70%);
                    }
                    
                    display: flex;
                    opacity: 100%;
                    align-items: center;
                    justify-content: center;
                    
                    svg{
                        font-size: 2rem;
                        color: white;
                    }                      
                    li{
                        background-color: var(--primary-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: .5rem ;
                        margin: 1rem;
                        border-radius: 10px;
                        transition: all .3s ease-in-out;
                        
                        &:first-child{
                            background-color: red;
                        }
                        &:hover{
                            transform: translateY(-10px);
                            box-shadow: 5px 10px 6px -1px var(--border-color);
                        }

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
