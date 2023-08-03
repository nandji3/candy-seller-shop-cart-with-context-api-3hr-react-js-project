import './App.css';
import { Fragment, useContext } from 'react';
import Form from './Components/Form/Form';
import Header from './Components/Layout/Header/Header';
import Cart from './Components/Cart/Cart';
import CartContext from './Store/CartContext';

function App() {

  const cartCTX = useContext(CartContext);

  return (
    <Fragment>
      {cartCTX.cartIsShown && <Cart />}
      <Header />
      <Form />
    </Fragment>
  )
}

export default App;
