import React from 'react'
import styles from './App.module.css'
import styled from 'styled-components'

const InputLabel = ({searchChange,value,id,children}) => {
    return (
        <div>
            <LabelStyle>{children}</LabelStyle>
            <InputStyle type='text' value={value} onChange={searchChange} id={id}></InputStyle>
            
        </div>
    )
}

export default InputLabel;

const LabelStyle = styled.label`
font-size:1.5rem ;
margin-right: 0.5em;
`;

const InputStyle = styled.input`
border:none;
outline:none;
padding:0.5rem 1rem;
border-bottom:1px solid #ccc;
`;