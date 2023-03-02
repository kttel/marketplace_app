import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import { Wrapper } from './styles';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from '../Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Content/>,
  },
  {
    path: "product/:productId",
    element: <Product/>,
  }
])

function App() {

  return (
    <Wrapper>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Wrapper>
  );
}

export default App;
