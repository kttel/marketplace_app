import ProductList from "../ProductList";
import CategoryList from '../CategoryList';
import { useContext, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { useLocation, useParams } from "react-router-dom";
import { categoriesContext } from "../../contexts/CategoriesContext";
import Debug from "../Debug";


const Content = (props) => {
    const { categoryId } = useParams();
    const categories = useContext(categoriesContext);
    const [categoryAmount, setCategoryAmount] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(0);
    const location = useLocation();

    let [history, setHistory] = useState([]);

    useEffect(() => {
      setHistory([...history, location.pathname]);
    }, [location]);

    useEffect(() => {
        if (categoryId != null && categories.filter(e => e.id == categoryId).length > 0)
            setCurrentCategory(+categoryId);
    }, []);

    const addItem = (amount) => {
        setCategoryAmount(amount);
    }

    const getCategory = (key) => {
        setCurrentCategory(key);
    }

    return (
        <Wrapper>
            <Debug history={history}/>
            <CategoryList getCategory={getCategory}/>
            <div>Goods amount: {categoryAmount}</div>
            <ProductList addItem={addItem} category={currentCategory}/>
        </Wrapper>
    );
}

export default Content;