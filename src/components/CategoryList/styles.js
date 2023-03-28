import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    gap: 10px;
    flex-wrap: wrap;
`
Wrapper.displayName = 'CategoryListWrapper';

export const CategoryItem = styled.div`
    background-color: ${props => props.notSpecified ? "#c1c1c1" : "#3e3e3e"};
    color: ${props => props.notSpecified ? "black" : "white"};
    border-radius: 10px;
    padding: 5px 6px;
    cursor: pointer;
`
CategoryItem.displayName = 'CategoryItem'