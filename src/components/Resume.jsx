import React from 'react';
import Title from './Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import TitleSmall from './TitleSmall';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from './ResumeItem';

const Resume = () => {
    return (
        <ResumeStyled>
            
                <Title title={'резюме'} span={'резюме'}/>
                <InnerLayout>
                   
                    <TitleSmall className="small-title"  icon={<CardTravelIcon/>} title={'Опыт работы'}/>
                        <ResumeItem
                            year={"2020 - 2021"}
                            title={"Freelance"}
                            subtitle={'Веб-разработчик'}
                            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum veniam sit beatae possimus perferendis excepturi maiores earum, officia consectetur."}    />
                        <ResumeItem
                            year={"2015 - 2020"}
                            title={"Телеканал МУЗ-ТВ"}
                            subtitle={'Исполнительный продюсер'}
                            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum veniam sit beatae possimus perferendis excepturi maiores earum, officia consectetur."}    />
                        <ResumeItem
                            year={"2013 - 2015"}
                            title={'Продюсерский центр ЭТО КИНО'}
                            subtitle={'Ведущий режиссёр видеопроизводства'}
                            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum veniam sit beatae possimus perferendis excepturi maiores earum, officia consectetur."}    />
                        <ResumeItem
                            year={"2011 - 2013"}
                            title={'ООО IT-Online'}
                            subtitle={'Старший видеоредактор'}
                            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum veniam sit beatae possimus perferendis excepturi maiores earum, officia consectetur."}  
                            />
                        <ResumeItem
                            year={"2010"}
                            title={'Студия видеопроизводства LEONARUS'}
                            subtitle={'Оператор-монтажёр'}
                            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum veniam sit beatae possimus perferendis excepturi maiores earum, officia consectetur."}  
                            />
                            <div className="small-title">
                    <TitleSmall className="small-title"  icon={<SchoolIcon/>} title={'Образование'}/>

                            </div>
                    <ResumeItem
                            year={"2003 - 2008"}
                            title={'МАТИ-РГТУ им. К.Э.Циолковского'}
                            subtitle={'Экономический факультет'}
                            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum veniam sit beatae possimus perferendis excepturi maiores earum, officia consectetur."}  
                            />
                   
                </InnerLayout>
            
        </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 1rem;
        margin: 2rem;
    }
`;

export default Resume;
