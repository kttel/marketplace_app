import ProductList from "../ProductList";
import CategoryList from '../CategoryList';
import {useContext, useState} from "react";
import { Wrapper } from "./styles";

import { cat_context } from "../../Contexts";


const Content = (props) => {
    const categories = useContext(cat_context);

    const [categoryAmount, setCategoryAmount] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(0);

    const addItem = (amount) => {
        setCategoryAmount(amount);
    }

    const getCategory = (key) => {
        setCurrentCategory(key);
    }

    return (
        <Wrapper>
            <CategoryList getCategory={getCategory} categories={categories}/>
            <div>Goods amount: {categoryAmount}</div>
            <ProductList addItem={addItem} products={props.goods} category={currentCategory}/>
        </Wrapper>
    );
}

export default Content;