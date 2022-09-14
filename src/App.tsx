import React, { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import TransactionForm from "./components/TransactionForm";
import TradeForm from "./components/TradeForm";
import UserProducts from "./components/UserProducts";
import UserExtre from "./components/UserExtre";
import AddProductFrom from "./components/AddProductForm";
import ProductList from "./components/ProductList";

type Mode = "products" | "extre";
type UserProduct = {
  id: string;
  productName: string;
  price: number;
  quantity?: number;
};
type User = {
  id: string;
  adSoyad: string;
  bakiye: number;
  products: Array<UserProduct>;
  extre: Array<string>;
};
type Product = UserProduct & { quantity: number };

function App() {
  const [userList, setUserList] = useState<Array<User>>([
    { id: "1", adSoyad: "Hakan Özoğlu", bakiye: 1000, products: [], extre: [] },
    {
      id: "2",
      adSoyad: "Pelin Hangişi",
      bakiye: 2000,
      products: [],
      extre: [],
    },
    { id: "3", adSoyad: "Burcu Yılmaz", bakiye: 500, products: [], extre: [] },
    {
      id: "4",
      adSoyad: "İlayda Yurttakalan",
      bakiye: 1500,
      products: [],
      extre: [],
    },
  ]);

  const [productList, setProductList] = useState<Array<Product>>([
    { id: "1", productName: "Laptop", quantity: 10, price: 100 },
  ]);

  const [currentUser, setCurrentUser] = useState<string>("");
  const [currentMode, setCurrentMode] = useState<Mode>("products");

  const [inputTradeSender, setinputTradeSender] = useState<string>("");
  const [inputTradeBuyer, setinputTradeBuyer] = useState<string>("");
  const [inputAmount, setinputAmount] = useState<string>("");
  const [inputSellProduct, setinputSellProduct] = useState<string>("");

  const handleTradeSender = (event: any) => {
    setinputTradeSender(event.target.value);
  };
  const handleTradeBuyer = (event: any) => {
    setinputTradeBuyer(event.target.value);
  };
  const handleSellProduct = (event: any) => {
    setinputSellProduct(event.target.value);
  };

  const handleTransaction = () => {
    const sender = userList.find(
      (user) => user.id === inputTradeSender
    ) as User;
    const receiver = userList.find(
      (user) => user.id === inputTradeBuyer
    ) as User;
    if (sender.bakiye < Number(inputAmount)) {
      alert("adamda o kadar para yok");
      return;
    }
    sender.bakiye = sender.bakiye - Number(inputAmount);
    receiver.bakiye = receiver.bakiye + Number(inputAmount);
    sender.extre.push(
      `${receiver.adSoyad} kişisine ${inputAmount} tutarında para gönderildi`
    );
    receiver.extre.push(
      `${sender.adSoyad} kişisinden ${inputAmount} tutarında para geldi`
    );
    setinputAmount("");
  };

  const handleTrade = () => {
    const seller = userList.find(
      (user) => user.id === inputTradeSender
    ) as User;
    const buyer = userList.find((user) => user.id === inputTradeBuyer) as User;
    const prod = seller.products.find(
      (prod) => prod.id === inputSellProduct
    ) as Product;

    if (buyer.bakiye < prod.price) {
      return;
    }

    seller.bakiye = seller.bakiye + prod.price;
    buyer.bakiye = buyer.bakiye - prod.price;
    buyer.products.push(prod);

    const idx = seller.products.indexOf(prod);
    seller.products.splice(idx, 1);
    seller.extre.push(
      `${buyer.adSoyad} kişisine ${prod.productName} ürünü ${prod.price} fiyatına satıldı`
    );
    buyer.extre.push(
      `${seller.adSoyad} kişisinden ${prod.productName} ürünü ${prod.price} fiyatına satın alındı`
    );

    setinputSellProduct("");
    setinputTradeSender("");
    setinputTradeBuyer("");
  };

  const handleChangeCurrentUser = (userId: string, mode: Mode) => {
    setCurrentUser(userId);
    setCurrentMode(mode);
  };

  const handleInputAmount = (event: any) => {
    setinputAmount(event.target.value);
  };

  const handleAddUser = (user: any) => {
    const values = {
      adSoyad: user.adSoyad,
      bakiye: Number(user.bakiye),
      id: String(Math.round(Math.random() * 5000)),
      products: [],
      extre: [],
    };
    setUserList([...userList, values]);
  };

  const handleAddProduct = (prod: any) => {
    const values = {
      productName: prod.productName,
      quantity: Number(prod.quantity),
      id: String(Math.round(Math.random() * 5000)),
      price: Number(prod.price),
    };
    setProductList([...productList, values]);
  };

  const handleSell = (id: string) => {
    const prod = productList.find((prod) => prod.id === String(id)) as Product;
    const buyer = userList.find((user) => user.id === currentUser) as User;
    if (buyer?.bakiye < prod?.price) return;

    buyer.bakiye = buyer.bakiye - prod.price;
    prod.quantity = prod.quantity - 1;
    buyer.products.push({ ...prod, quantity: undefined });
    buyer.extre.push(
      `mağazadan ${prod.productName} ürünü ${prod.price} fiyatına satın alındı.`
    );

    setProductList((list) =>
      list.map((product) => (product.id === prod.id ? { ...prod } : product))
    );
  };

  return (
    <div className="container">
      <div className="left">
        <div className="addUserForm">
          <AddUserForm onAddUser={handleAddUser} />
        </div>
        <div className="userList">
          <UserList
            currentUser={currentUser}
            userListData={userList}
            onChangeCurrentUser={handleChangeCurrentUser}
          />
        </div>
      </div>
      <div className="center">
        <div className="transactionForm">
          <TransactionForm
            userList={userList}
            inputTradeSender={inputTradeSender}
            inputTradeBuyer={inputTradeBuyer}
            handleTradeSender={handleTradeSender}
            handleTradeBuyer={handleTradeBuyer}
            inputAmount={inputAmount}
            handleInputAmount={handleInputAmount}
            handleTransaction={handleTransaction}
          />
        </div>
        <div className="tradeForm">
          <TradeForm
            userList={userList}
            inputTradeSender={inputTradeSender}
            inputSellProduct={inputSellProduct}
            inputTradeBuyer={inputTradeBuyer}
            handleTradeSender={handleTradeSender}
            handleTradeBuyer={handleTradeBuyer}
            handleSellProduct={handleSellProduct}
            handleTrade={handleTrade}
          />
        </div>
        {currentUser ? (
          currentMode === "products" ? (
            <div className="user-products">
              <UserProducts
                user={userList.find((user) => user.id === currentUser)}
                removeCurrentUser={() => setCurrentUser("")}
              />
            </div>
          ) : currentMode === "extre" ? (
            <div className="user-products">
              <UserExtre
                userId={currentUser}
                user={userList.find((user) => user.id === currentUser)}
              />
            </div>
          ) : null
        ) : null}
      </div>
      <div className="right">
        <div className="addProductForm">
          <AddProductFrom onAddProduct={handleAddProduct} />
        </div>
        <div className="productList">
          <ProductList
            isSellVisible={Boolean(currentUser)}
            productListData={productList}
            onSellProduct={handleSell}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
