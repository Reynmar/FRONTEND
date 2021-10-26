import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.jpg'
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class">обо мне</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class">резюме</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class">портфолио</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink to="/contacts" activeClassName="active-class">контакты</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Mikhail Pasichniuk</p>
            </footer>

        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 5px solid var(--border-color);

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        padding: 1rem 0;
        text-align: center;
        img{
            width: 60%;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;

        .active-class{
            background-color: var(--primary-color);
            color: white;
        }

        li{
            display: block;
            a{
                display: block;
                padding: .6rem 0;
                position: relative;
                transition: all 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                /* font-weight: 600; */
                /* letter-spacing: 1px; */

                &:hover{
                    cursor: pointer;
                    }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: #a4acc4;
                    /* background-color: var(--primary-color); */
                    transition: all 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    z-index: 3;
                    opacity: 0.2;


                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer {
        border-top: 1px solid var(--border-color);
        p{
            padding: 1rem 0;
            font-size: .7rem;
            display: block;
            text-align: center;
        }
    }

`;

export default Navigation;
