import styled from 'styled-components';


export const Dropdown = styled.select`
    font-size: 100%;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background-color: ${props=>props.theme.bgColor};
    border: 2px solid ${props => props.theme.color};
    color: ${props => props.theme.color};
    padding: 5px;
`