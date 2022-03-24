import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title'
import ReviewItem from './ReviewItem';
import TitleSmall from './TitleSmall';
import BuildIcon from '@mui/icons-material/Build';
import ChatIcon from '@mui/icons-material/Chat';

const ReviewsSection = () => {
    return (
        <ReviewsStyled>
            <InnerLayout>
                <TitleSmall icon={<ChatIcon />} title={"review"} />
                <div className="reviews">
                    <ReviewItem
                        text={
                            "Just made these cards for futures reviews, when they arrive!"
                        }
                    />
                    <ReviewItem
                        text={"And when they do arrive, they'll be awesome!"}
                    />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    );
}

const ReviewsStyled = styled.section`

    margin-top: .4rem;

    .reviews{
        margin-top: 2rem;
        display: flex;
        gap: 2rem;

        @media screen and (max-width: 1080px){
            flex-direction: column;
            
            width: 100%;
        }
    }
`;

export default ReviewsSection;
