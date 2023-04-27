import { Provider } from 'react-redux';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import { Wrapper } from './styles';
import styles from './styles.module.css'

import store from '../../store.js'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Product from '../Product';
import LoginForm from '../LoginForm';
import AdminPanel from '../AdminPanel';
import RegisterForm from '../RegisterForm';
import NumberForm from '../NumberForm';
import TestComponent from '../TestComponent';
import ReduxComponent from '../ReduxComponent';


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
  },
  {
    path: "login/",
    element: <LoginForm />
  },
  {
    path: "register/",
    element: <RegisterForm />
  },
  {
    path: "numbers/",
    element: <NumberForm />
  },
  {
    path: "test/",
    element: <TestComponent />
  },
  {
    path: "redux/",
    element: <ReduxComponent />
  },
])

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
