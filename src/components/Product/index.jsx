import { Wrapper, Title } from "./styles";
import styles from './styles.module.css'

import { useParams } from "react-router-dom";

import FeedbackForm from "../FeedbackForm";
import Price from "../Price";
import { useContext, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';

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
    const [comments, setComments] = useState([]);

    let product = goods.find(p => p.id === +productId);

    const usd = product.price;
    const uah = сonvertfromUsdToUah(usd);

    const handleCommentSubmit = (values, {resetForm}) => {
        const newComment = {
            author: values.author,
            text: values.comment
        }
        setComments([...comments, newComment]);
        resetForm();
    }

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
            <div>
            <h2>Comments</h2>
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <div key={index}>
                        <p><strong>{comment.author}:</strong> {comment.text}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}
            <Formik
                initialValues={{ author: '', comment: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.author) {
                        errors.author = 'Required';
                    }
                    if (!values.comment) {
                        errors.comment = 'Required';
                    }
                    return errors;
                }}
                onSubmit={handleCommentSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.commentForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="author">Author:</label>
                            <Field className={styles.formControl} type="text" name="author" id="author" />
                            <ErrorMessage className={styles.errorMessage} name="author" component="div" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="comment">Comment:</label>
                            <Field className={styles.formControl} as="textarea" name="comment" id="comment" />
                            <ErrorMessage className={styles.errorMessage} name="comment" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
    )
}

export default Product;