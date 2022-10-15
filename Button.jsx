import styled from "styled-components";
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

export const ButtonSmStyle = styled(ButtonStyle)`
padding:0.3rem 0.8rem;
`;

export const ButtonLgStyle = styled(ButtonStyle)`
 padding:0.5rem 1rem;
`