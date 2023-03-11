import { useEffect, useState, useContext } from "react";
import ProductItem from "../ProductItem";
import { Wrapper } from  './styles';
import { goods_context } from "../../Contexts";

let instancesCount = 0

const ProductList = (props) => {
    const goods = useContext(goods_context);
    let [categoryProducts, setCategoryProducts] = useState([]);

    const [amount, setAmount] = useState(0);

    const addItem = () => {
        instancesCount += 1;
        props.addItem (instancesCount);
    }

    const removeItem = () => {
        instancesCount -= 1;
        props.addItem (instancesCount);
    }

    const handleAmountChange = (change) => {
        if (change === 0) {
            setAmount(0);
        } else {
            setAmount(amount + change);
        }
    }

    const vanishAmount = () => {
        setAmount(0);
    }

    useEffect(() => {
        if (props.category === 0) {
            setCategoryProducts(goods);
        } else {
            setCategoryProducts(goods.filter(product => product.categoryId === props.category));
        }
    }, [props.category, goods]);

    return (
        <>
            <div>You want to order {amount} items.</div>
            <Wrapper>
                {categoryProducts.map(product =>
                    <ProductItem
                        removeItem={removeItem}
                        addItem={addItem}
                        handleAmountChange={handleAmountChange}
                        vanishAmount={vanishAmount}
                        product={product}
                        key={product.id}/>
                )}
            </Wrapper>
        </>
    )
}

 export default ProductList;