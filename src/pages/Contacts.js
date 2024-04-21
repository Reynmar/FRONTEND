import React from "react";
import styled from "styled-components";
import Particle from "../components/particles";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contacts = () => {
  return (
    <ContactsStyled>
      <div className="p-particles-js">
        <Particle />
      </div>

      <div className="typography">
        <h1>
          Mikhail Pasichniuk <span> contacts</span>
        </h1>
        <p>You can reach me using any of the Social Networks available below</p>

        <div className="icons">
          <a
            href="https://github.com/mpasichnyuk"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.facebook.com/michaelreynmar"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </ContactsStyled>
  );
};

const ContactsStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-top: 1rem;
  }

  .p-particles-js {
    width: 100%;
    z-index: -2;
    /* position: absolute;
        top: 0;
        left: 0; */
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 70%;

    .icons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }
`;

export default Contacts;
