import { Wrapper, Item, Title, SpecialTitle } from './styles';
import styles from './styles.module.css'

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

    const price = props.product.price;

    let fieldProps = { };
    if (price > 10) {
        fieldProps = {
            primary: true
        };
    }
    return (
        <Wrapper { ...fieldProps}>
            <div className={styles.item}>
                <input type="checkbox" onChange={e => handleCheckboxChange(e)}/>
                {props.product.name.charAt(0) === 'F' || props.product.name.charAt(0) === 'P' ?
                (<Title><Link to={`product/${props.product.id}`}>{props.product.name}</Link></Title>) :
                (<SpecialTitle><Link to={`product/${props.product.id}`}>{props.product.name}</Link></SpecialTitle>)}

                <div>{props.product.price}$</div>
            </div>
        </Wrapper>
    );
}

export default ProductItem;
