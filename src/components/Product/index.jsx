import { Wrapper, Title } from "./styles";
import styles from './styles.module.css'

import { useParams } from "react-router-dom";

import FeedbackForm from "../FeedbackForm";
import Price from "../Price";
import { useContext } from "react";

import { goodsContext } from "../../contexts/GoodsContext";


const сonvertfromUsdToUah = (usd) => {
    const course = 37.74;
    const result = usd * course;
    const rounded = Math.round(result * 100) / 100;
    return rounded.toString();
}

const Product = (props) => {
    let { productId } = useParams();
    const goods = useContext(goodsContext);

    let product = goods.find(p => p.id === +productId);

    const usd = product.price;
    const uah = сonvertfromUsdToUah(usd);

    return(
        <div className={styles.wrapper}>
            <div>
                <div className={styles.title}>{product.name}</div>
                <div>Example description</div>
            </div>
            <div>
                <Price currency="uah" amount={uah}/>
                <Price currency="usd" amount={usd}/>
            </div>
            <div><FeedbackForm/></div>
        </div>
    )
}

export default Product;