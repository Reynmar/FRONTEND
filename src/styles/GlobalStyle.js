import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121a;
        --background-dark-grey: #191d2b;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
        --background-light-color-2: rgba(3,127,255,.3)
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
        --scrollbar-bg-color: #383838;
        --scrollbar-thumb-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.1rem;
        font-family: 'Source Sans Pro', sans-serif;
        
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    body::-webkit-scrollbar{
        width: 4px;
        background-color: #383838 ;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: var(--primary-color) ;
    }

    a{
        font-family: inherit;
        color: inherit;
        font-size: 1rem;
    }

    h1{
        font-size: 3rem;
        color: var(--white-color);
        span{
            font-size: 3rem;
            color: var(--primary-color);
            
        }
    }
    h6{
        color: white;
        font-size: 1.2rem;
        padding-bottom: .6rem;
    }

    .hamburger-menu{
        position: absolute;
        right: 10%;
        top: 5%;
        
        button::active{
            background-color: red;
        }
        svg{
            color: var(--primary-color);
            font-size: 3rem;
        }

    }
    @media screen and (max-width: 1000px){
        
        }
    .p-particles-js{
        z-index: -1;
    }

    .nav-toggle{
        transform: translateX(100%);
    }
`

export default GlobalStyle