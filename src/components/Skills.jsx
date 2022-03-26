import React from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts'
import Title from './Title'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import TitleSmall from './TitleSmall';
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
    return (
        <SkillsStyled>
            <TitleSmall icon={<BuildIcon />} title={"Skills"} />
            <>
                <div className="skills">
                    <ProgressBar title={"HTML5"} width={"70%"} text={"90%"} />
                    <ProgressBar title={"CSS3"} width={"60%"} text={"80%"} />
                    <ProgressBar
                        title={"JavaScript"}
                        width={"75%"}
                        text={"70%"}
                    />
                    <ProgressBar title={"React"} width={"60%"} text={"70%"} />
                    <ProgressBar title={"Python"} width={"20%"} text={"20%"} />
                    <ProgressBar
                        title={"Data Science"}
                        width={"15%"}
                        text={"15%"}
                    />
                </div>
            </>
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section`

    margin-top: 4rem;

    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-width: 1080px){
        .skills{

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
            
    }
`;

export default Skills;
