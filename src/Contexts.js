import { createContext } from 'react';

const goods_list = [
    { id: 1, name: "Paste plate", price: 6.99, categoryId: 1 },
    { id: 2, name: "Saucer", price: 4.99, categoryId: 1 },
    { id: 3, name: "Tea spoon", price: 1.99, categoryId: 1 },
    { id: 4, name: "Black jeans", price: 15.99, categoryId: 2 },
    { id: 5, name: "Pattern blouse", price: 20.99, categoryId: 2 },
    { id: 6, name: "Face tonic", price: 8.99, categoryId: 3 },
    { id: 7, name: "Lip balm", price: 6.99, categoryId: 3 },
    { id: 8, name: "Face wash foam", price: 12.99, categoryId: 3 },
    { id: 9, name: "Micellar water", price: 9.99, categoryId: 3 },
]

const categories_list = [
    { id: 1, name: "Tableware" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Cosmetics" }
]

export const cat_context = createContext(categories_list);
export const goods_context = createContext(goods_list);