import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import Buttonprimary from '../components/ButtonPrimary';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../components/ContactItem';

const ContactsPage = () => {
    return (
        <MainLayout>
            <Title title={'contacts'} span={'contacts'} />
            <ContactsPageStyled>
            <InnerLayout className='contact-section'>
                <div className="left-content">
                    <form className='form' >

                        <div className="form-field">
                            <label htmlFor="name">Enter your name* </label>
                            <input id='name' type="text" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Enter your email* </label>
                            <input id='email' type="email" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="subject">subject* </label>
                            <input id='subject' type="text" />
                        </div>

                        <div className="text-area form-field">
                            <label htmlFor="text-area">your message* </label>
                            <textarea name="textarea" id="" cols="30" rows="10"></textarea>
                        </div>

                        <div className="form-field">
                            <Buttonprimary title={'send message'}/>
                        </div>

                    </form>
                </div>
                <div className="right-column">
                    <ContactItem
                    icon={<PhoneForwardedIcon/>}
                    title={'телефон'}
                    contact1={'+79035223273'}
                    contact2={'пишите сразу в телеграм'}
                    />
                    <ContactItem
                    icon={<AttachEmailIcon/>}
                    title={'email'}
                    contact1={'+abbab@adfdfd.com'}
                    contact2={'только по рабочим вопросам'}
                    />
                    <ContactItem
                    icon={<LocationOnIcon/>}
                    title={'местоположение'}
                    contact1={'Мытищи, Московская область, Россия'}
                    contact2={'Электрички Ярославского направления.'}
                    />
                </div>
            </InnerLayout>
            </ContactsPageStyled>
        </MainLayout>
    );
}

const ContactsPageStyled = styled.section`
    padding: 1rem;

    .contact-section{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 2rem ;
        .right-column{
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }


        .form{
            width: 100%;

            .form-field{
                margin-top: 1rem;
                width: 100%;
                position: relative;

                label{
                    position: absolute;
                    left: 20px;
                    top: -13px;
                    display: inline-block;
                    background-color: var(--background-dark-color); 
                    padding: 0 .5rem;
                    
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 3rem;
                    padding: 0 15px;
                    width: 100%;
                    color: white;
                }
                textarea{
                    background: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: white;
                    padding: 1rem;
                    width: 100%;

                }
            }
        }
    }
`;

export default ContactsPage;
