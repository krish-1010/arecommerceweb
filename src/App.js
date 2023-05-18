import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Dragon from "./components/Dragon";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Laptop from "./components/Laptop";
import Flowerpot from "./components/Flowerpot";
import Wardrobe from "./components/Wardrobe";
import Sofa from "./components/Sofa";
import Chair from "./components/Chair";
import Table from "./components/Table";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dragon" component={Dragon} />
        <Route exact path="/laptop" component={Laptop} />
        <Route exact path="/table" component={Table} />
        <Route exact path="/wardrobe" component={Wardrobe} />
        <Route exact path="/chair" component={Chair} />
        <Route exact path="/sofa" component={Sofa} />
      </Switch>
    </>
  );
}

export default App;
