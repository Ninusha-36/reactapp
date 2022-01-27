import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./app.css"
import { BrowserRouter as Roter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div className="App" >
      <Roter>
        <Topbar/>
        <div className="container">
          <Sidebar/>
        <Routes>
        <Route index   path="/"  element={<Home />} />  
        <Route path="users" element={<UserList/>} />   

         <Route path="user/:userId" element={<User/>} />    
         <Route path="newuser" element={<NewUser />} />  

         <Route path="products" element={<ProductList />} />

         <Route path="product/:productId" element={<Product />} />

         <Route path="newproduct" element={<NewProduct />} />

        </Routes>
        </div>
      </Roter>
    </div>
  );
}

export default App;
