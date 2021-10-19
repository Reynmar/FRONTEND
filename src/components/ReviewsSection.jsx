import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title'
import ReviewItem from './ReviewItem';

const ReviewsSection = () => {
    return (
        
            <ReviewsStyled>

                <Title title={"принципы"} span={"принципы"} />

                <InnerLayout>
                    <div className="reviews">                        
                        <ReviewItem text={"Лучше сделать полную рабочую версию брутфорсом, чем ковырять одну фичу весь день."}/>
                        <ReviewItem text={"Вернемся к этому, когда у нас будет готовый MVP."}/>
                    </div>
                </InnerLayout>
            </ReviewsStyled>
        
    );
}

const ReviewsStyled = styled.section`
    .reviews{
        display: flex;
    }
`;

export default ReviewsSection;
