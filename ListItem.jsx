import React from 'react';
import styled from 'styled-components';
// import style from './App.module.css'

const ButtonStyle = styled.button`
background-color:#1f7bc5 ;
color:white;
padding:0.5rem 1.5rem;
border:1px solid #333;
transition: background-color 100ms ease ;
&:hover{
    background-color: #2012e9;
}
`;

const ButtonSmStyle = styled(ButtonStyle)`
padding:0.3rem 0.8rem;
`;

const ListItem = ({ story, onRemoveItem }) => {

    const ListStyle = styled.li`
    display: flex;
    align-items: center;
    padding-bottom:6px;

    background:${(props)=> props.isDark? 'black' : '#cbddec'}
    `;

    const SpanStyle = styled.span`
    padding:0 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    a {
        color:inherit;
    }

    width: ${(props) => props.width};
    
    `
    return (
        <>
            
            <ListStyle isDark={false}>
                <SpanStyle width='40%' ><a href={story.url}>{story.title}</a></SpanStyle>
                <SpanStyle width='30%' >  {story.author}</SpanStyle>
                <SpanStyle width='10%' > {story.points}</SpanStyle>
                <SpanStyle width='10%'> {story.num_comments}</SpanStyle>
                <SpanStyle>
                    <ButtonSmStyle onClick={() => onRemoveItem(story)}>DELETE</ButtonSmStyle>
                </SpanStyle>
                
                </ListStyle>
        </>
    )
}

export default ListItem;