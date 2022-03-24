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
            <Title title={"resume"} span={"resume"} />
            <InnerLayout>
                <TitleSmall
                    className="small-title"
                    icon={<CardTravelIcon />}
                    title={"Experience"}
                />
                <ResumeItem
                    year={"2022"}
                    title={"Contractor"}
                    subtitle={"Frontend Developer"}
                    text={
                        "Worked for DualBoot Partners and DebtBook company as a Frontend Developer, developed web applications using HTML, CSS, JavaScript, React and other tools"
                    }
                />
                <ResumeItem
                    year={"2020 - 2021"}
                    title={"Freelance"}
                    subtitle={"Frontend Web Developer"}
                    text={
                        "Created no-code websites for clients and created educational projects using HTML, CSS, JS, React, learned Frontend, JavaScript, React, Computer Science, algorithms and Data Structures."
                    }
                />
                <ResumeItem
                    year={"2015 - 2020"}
                    title={"MUZ-TV Channel, Moscow"}
                    subtitle={
                        "Executive Producer and Editor for Promo Department"
                    }
                    text={
                        "Non-linear Video Editing, managing a team of editors and designers, video directing, creative brainstorming and advertising campaing planning."
                    }
                />
                <ResumeItem
                    year={"2013 - 2015"}
                    title={"ETO KINO Production Center, Moscow"}
                    subtitle={"Lead Video Director"}
                    text={
                        "Editing and video creation using Adobe Premiere, After Effects, Adobe Photoshop и Sony Vegas, on-set directing for video production, working with talent, creating educational content."
                    }
                />
                <ResumeItem
                    year={"2011 - 2013"}
                    title={"IT-Online LLC, aka Social Discovery Ventures"}
                    subtitle={"Senior Video Editor for On-Line Dating Website"}
                    text={
                        "Video editing for web publishing. Managed a team of video editors for on-line projects AnastasiaDate, AsianBeauty, AfricanBeauty и AmoLatina."
                    }
                />
                <ResumeItem
                    year={"2010"}
                    title={"LEONARUS Video Production Studio"}
                    subtitle={"Cameraman, Video Editor"}
                    text={
                        "Non-linear video editing using Adobe Premiere and After Effects. Worked as cameraman and second director during the production of educational, corporate and documentary videos."
                    }
                />

                <ResumeItem
                    year={"2008 - 2009"}
                    title={"SPK-STROI LLC"}
                    subtitle={"Junior Accounting Specialist"}
                    text={
                        "Worked as a Junior Accounting Specialist, mainly responsible for data entry from paper contracts into electronic accounting system."
                    }
                />

                <div className="small-title">
                    <TitleSmall
                        className="small-title"
                        icon={<SchoolIcon />}
                        title={"Education"}
                    />
                </div>

                <ResumeItem
                    year={"2003 - 2008"}
                    title={
                        "MATI-RGTU of Tsiolkovsky, Russian State Technological university"
                    }
                    subtitle={"Economics"}
                    text={
                        'Diploma of Specialist in "Accounting, Analisys and Audit'
                    }
                />

                <div className="small-title">
                    <TitleSmall
                        icon={<SchoolIcon />}
                        title={"Additional courses"}
                    />
                </div>

                <ResumeItem
                    year={"2021"}
                    title={"FreeCodeCamp"}
                    subtitle={"JavaScript Algorithms and Data Structures"}
                    text={""}
                />
                <ResumeItem
                    year={"2021"}
                    title={"SoloLearn"}
                    subtitle={"HTML5 + CSS3"}
                    text={""}
                />
                <ResumeItem
                    year={"2021"}
                    title={"Codecademy"}
                    subtitle={"Responsive Web Design"}
                    text={""}
                />
                <ResumeItem
                    year={"2021"}
                    title={"Harvard OpenCourseWare"}
                    subtitle={"CS50x Computer Science"}
                    text={""}
                />
                <ResumeItem
                    year={"2021"}
                    title={"Codecademy"}
                    subtitle={"GO lang basics"}
                    text={""}
                />
                <ResumeItem
                    year={"2019"}
                    title={"British Council IELTS English testing"}
                    subtitle={"IELTS English Level Certificate -- C1"}
                    text={""}
                />
                <ResumeItem
                    year={"2019"}
                    title={"Coursera"}
                    subtitle={"Game Design"}
                    text={"Coursera and California Institute of Arts"}
                />
                <ResumeItem
                    year={"2015"}
                    title={'Educational Center "Specialist"'}
                    subtitle={"Basics of programming with Java SE 1.8"}
                    text={""}
                />
                <ResumeItem
                    year={"2015"}
                    title={"Coursera"}
                    subtitle={"Fundamental English Writing"}
                    text={"hosted by Mt. San Jacinto College"}
                />
                <ResumeItem
                    year={"2015"}
                    title={"Coursera"}
                    subtitle={"Creating mobile apps for Android"}
                    text={""}
                />
                <ResumeItem
                    year={"2015"}
                    title={"Codecademy"}
                    subtitle={"Python for beginners"}
                    text={""}
                />
                <ResumeItem
                    year={"2013"}
                    title={'Educational Center "Specialist"'}
                    subtitle={"Basics of modelling and animation with 3DS MAX"}
                    text={""}
                />
                <ResumeItem
                    year={"2002"}
                    title={"MATI-RGTU"}
                    subtitle={"Basics of programming using Visual Basic"}
                    text={""}
                />
            </InnerLayout>
        </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 1rem;
        margin: 3rem 1rem 0 2rem;
    }
`;

export default Resume;
