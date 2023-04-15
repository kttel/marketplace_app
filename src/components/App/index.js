import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import { Wrapper } from './styles';
import styles from './styles.module.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Product from '../Product';
import AdminPanel from '../AdminPanel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "product/:productId",
    element: <Product />,
  },
  {
    path: "categories/:categoryId",
    element: <Content />
  },
  {
    path: "admin/",
    element: <AdminPanel />
  }
])

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
