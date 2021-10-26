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
                            text={"Делал сайты на тильде для клиентов, делал учебные проекты на HTML, CSS, JS, React, изучал фронтенд, CS, алгоритмы и структуры данных."}    />
                        <ResumeItem
                            year={"2015 - 2020"}
                            title={"Телеканал МУЗ-ТВ"}
                            subtitle={'Исполнительный продюсер эфирного промо'}
                            text={"Выполнял нелинейный видеомонтаж, управлял командой дизайнеров и монтажёров, режиссировал съёмки, участвовал в планировании кампаний и креативных собраниях"}    />
                        <ResumeItem
                            year={"2013 - 2015"}
                            title={'Продюсерский центр ЭТО КИНО'}
                            subtitle={'Ведущий режиссёр видеопроизводства'}
                            text={"Выполнял нелинейный видеомонтаж используя инструменты Adobe Premiere, After Effects, Adobe Photoshop и Sony Vegas, руководил съёмкой на площадке и принимал решения о визуальной композиции, ракурсах и способах съёмки."}    />
                        <ResumeItem
                            year={"2011 - 2013"}
                            title={'ООО IT-Online'}
                            subtitle={'Старший видеоредактор'}
                            text={"Выполнял потоковый нелинейный монтаж видеоконтента для публикации в вебе  Руководил работой отдела видеоконтента в онлайн-проектах AnastasiaDate, AsianBeauty, AfricanBeauty и AmoLatina (дейтинговое направление) Написал подробный и исчерпывающий регламент для партнёров компании с указанием инструкций и рекомендаций по созданию партнёрского контента ♦ Выполнял поиск и подбор персонала в отдел фото- и видео- обработки и модерации      ♦ Работал с базой пользователей и контента на сайте используя панель администратора"}  
                            />
                        <ResumeItem
                            year={"2010"}
                            title={'Студия LEONARUS'}
                            subtitle={'Оператор-монтажёр'}
                            text={"Выполнял нелинейный видеомонтаж используя инструменты Adobe Premiere и After Effects ♦ Участвовал в качестве оператора и второго режиссёра в постановочных и репортажных съёмках корпоративных видео, интервью, репортажей с мероприятий."}  
                            />

                    <div className="small-title">
                            <TitleSmall className="small-title" icon={<SchoolIcon/>} title={'Образование'}/>
                    </div>

                    <ResumeItem
                            year={"2003 - 2008"}
                            title={'МАТИ-РГТУ им. К.Э.Циолковского'}
                            subtitle={'Экономический факультет'}
                            text={'Диплом специалиста по специальности "Бухучёт, Финансовый анализ и Аудит". '}  
                            />
                    
                            
                    <div className="small-title">
                        <TitleSmall icon={<SchoolIcon/>} title={'Курсы'}/>
                    </div>

                    <ResumeItem
                            year={"2021"}
                            title={'FreeCodeCamp'}
                            subtitle={'JavaScript Algorithms and Data Structures'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2021"}
                            title={'SoloLearn'}
                            subtitle={'HTML5 + CSS3'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2021"}
                            title={'Codecademy'}
                            subtitle={'Responsive Web Design'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2021"}
                            title={'Harvard OpenCourseWare'}
                            subtitle={'CS50x Computer Science'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2021"}
                            title={'Codecademy'}
                            subtitle={'GO lang basics'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2019"}
                            title={'British Council IELTS English testing'}
                            subtitle={'IELTS English Level Certificate -- C1'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2019"}
                            title={'Coursera'}
                            subtitle={'Game Design'}
                            text={"Coursera and California Institute of Arts"}  
                            />
                    <ResumeItem
                            year={"2015"}
                            title={'центр "Специалист"'}
                            subtitle={'Основы программирование на Java SE 1.8'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2015"}
                            title={'Coursera'}
                            subtitle={'Fundamental English Writing'}
                            text={"hosted by Mt. San Jacinto College"}  
                            />
                    <ResumeItem
                            year={"2015"}
                            title={'Coursera'}
                            subtitle={'Создание мобильных приложений под Android'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2015"}
                            title={'Codecademy'}
                            subtitle={'Python for beginners'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2013"}
                            title={'центр "Специалист"'}
                            subtitle={'Основы 3D-моделирования и анимации в 3DS MAX'}
                            text={""}  
                            />
                    <ResumeItem
                            year={"2002"}
                            title={'МАТИ-РГТУ'}
                            subtitle={'Основы программирования на Visual Basic'}
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
