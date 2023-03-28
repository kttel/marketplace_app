import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${props => props.primary ? "#2196F3" : "pink"};
    color: ${props => props.primary ? "#ffffff" : "#000000"};
    display: flex;
    flex-direction: column;
`
Wrapper.displayName = 'ProductItemWrapper';

export const Item = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
`;
Item.displayName = 'Item';

export const Title = styled.div`
    a {
        color: black;
        font-weight: bolder;
    }
`;

export const SpecialTitle = styled(Title)`
    a:after {
        content: '*';
    }
`;