import { Wrapper, Title } from "./styles";
import { useParams } from "react-router-dom";

import FeedbackForm from "../FeedbackForm";
import Price from "../Price";
import { useContext } from "react";

import { goods_context } from "../../Contexts";


const сonvertfromUsdToUah = (usd) => {
    const course = 37.74;
    const result = usd * course;
    const rounded = Math.round(result * 100) / 100;
    return rounded.toString();
}

const Product = (props) => {
    let { productId } = useParams();
    const goods = useContext(goods_context);

    let product = goods.find(p => p.id === +productId);

    const usd = product.price;
    const uah = сonvertfromUsdToUah(usd);

    return(
        <Wrapper>
            <div>
                <Title>{product.name}</Title>
                <div>Example description</div>
            </div>
            <div>
                <Price currency="uah" amount={uah}/>
                <Price currency="usd" amount={usd}/>
            </div>
            <div><FeedbackForm/></div>
        </Wrapper>
    )
}

export default Product;