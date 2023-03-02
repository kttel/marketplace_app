import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: rgba(66, 75, 82, .4);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
Wrapper.displayName = 'HeaderWrapper';

export const Button = styled.div`
    text-align: center;
    margin-top: 5px;
    background-color: #565656;
    color: white;
    border-radius: 10px;
    padding: 5px 15px;
    cursor: pointer;
`
Button.displayName = 'Button'