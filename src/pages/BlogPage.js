import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import blogs from '../data/blogs';
import { InnerLayout, MainLayout } from '../styles/Layouts';

const BlogPage = () => {
    return (
        <MainLayout>
                <Title title={'блог'} span={'блог'}/>
            <BlogPageStyled>
                <InnerLayout>
                {blogs.map((blog)=>{
                    return (
                        <div key={blog.id} className='blog'>
                                <div className="image">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="title">
                                    <h4>{blog.title}</h4>
                                </div>
                            </div>
                        )
                    })
                }
                </InnerLayout>
            </BlogPageStyled>
        </MainLayout>
    );
}

const BlogPageStyled = styled.div`

    display: flex;
    

    .blog{
        
        border: 1px solid white;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    .title{
        padding: 1rem;
        margin: 1rem;
    }

    img{
        width: 400px;
        height: 300px;
        object-fit: cover;
    }
`;

export default BlogPage;
