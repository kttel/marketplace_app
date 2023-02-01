import { Component } from 'react';
import { Wrapper, Item } from './styles';

class ProductItem extends Component {
    handleCheckboxChange = (e) => {
        const valueChange = e.target.checked ? 1 : -1;
        this.props.handleAmountChange(valueChange);
    }

    componentDidMount() {
        this.props.addItem();
        this.props.vanishAmount();
    }

    componentWillUnmount() {
        this.props.removeItem();
    }

    render() {
        return (
            <Wrapper>
                <Item>
                    <input type="checkbox" onChange={this.handleCheckboxChange}/>
                    <div>{this.props.product.name}</div>
                    <div>{this.props.product.price}$</div>
                </Item>
            </Wrapper>
        );
    }
}

export default ProductItem;