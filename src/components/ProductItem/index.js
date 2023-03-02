import { Wrapper, Item, Title } from './styles';
import { Link } from "react-router-dom";
import { useEffect } from 'react';


const ProductItem = (props) => {
    const handleCheckboxChange = (e) => {
        const valueChange = e.target.checked ? 1 : -1;
        props.handleAmountChange(valueChange);
    }

    useEffect(() => {
        props.addItem();
        props.vanishAmount();
        return () => {
            props.removeItem();
        }
    }, []);

    return (
        <Wrapper>
            <Item>
                <input type="checkbox" onChange={e => handleCheckboxChange(e)}/>
                <Title><Link to={`product/${props.product.id}`}>{props.product.name}</Link></Title>
                <div>{props.product.price}$</div>
            </Item>
        </Wrapper>
    );
}

export default ProductItem;
