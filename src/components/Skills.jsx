import React from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts'
import Title from './Title'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Skills = () => {
    return (
        <SkillsStyled>
            
                <Title title={'SKILLS'} span={'навыки'}  />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'HTML5'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar
                            title={'JavaScript'}
                            width={'75%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'React'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'Python'}
                            width={'20%'}
                            text={'20%'}
                        />
                        <ProgressBar
                            title={'English'}
                            width={'95%'}
                            text={'95%'}
                        />
                    </div>
                </InnerLayout>
            
        </SkillsStyled>
    );
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

    }
`;

export default Skills;
