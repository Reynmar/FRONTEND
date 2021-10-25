import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title'
import ReviewItem from './ReviewItem';

const ReviewsSection = () => {
    return (
        
            <ReviewsStyled>

                <Title title={"reviews"} span={"reviews"} />

                <InnerLayout>
                    <div className="reviews">                        
                        <ReviewItem text={"Эти карточки здесь просто чтобы круто выглядело."}/>
                        <ReviewItem text={"На реальном сайте это могут быть, например, отзывы посетителей."}/>
                    </div>
                </InnerLayout>
            </ReviewsStyled>
        
    );
}

const ReviewsStyled = styled.section`
    .reviews{
        display: flex;
        @media screen and (max-width: 1080px){
            flex-direction: column;
            gap: 2rem;
            width: 100%;
        }
    }
`;

export default ReviewsSection;
