import React from 'react'
import styled from 'styled-components'
import InputLabel from './InputLabel'
import { ButtonLgStyle } from './Button'

export function SearchForm(handleSearchInput,handleSearchSubmit,query){
    return (
        
            <FormStyle onSubmit={handleSearchSubmit}>
                <InputLabel searchChange={handleSearchInput} value={query} id='search' >
                    SEARCH{''}
                </InputLabel>
                <ButtonLgStyle type='submit' disabled={!query}>Submit</ButtonLgStyle>
            </FormStyle>

    )
}

const FormStyle = styled.form`
padding:0.5rem 1rem;
display: flex;
align-items: center;
`;

