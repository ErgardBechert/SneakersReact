import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Drawer from "./components/Drawer/Drawer";

function App() {

    const [cartItems, setCartItems] = React.useState([]);

    const [cartOpened, setCartOpened] = React.useState(false);

    return (
    <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose = { () => setCartOpened(false)}/>}
        <Header onClickCart = { () => setCartOpened(true)}/>
        <Content cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;
