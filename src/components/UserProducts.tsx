import React from "react";

const UserProducts: any = (props: any) => {
  return (
    <>
      <div>UserProducts</div>
      <button onClick={props.removeCurrentUser}>Kapat</button>
      <ul>
        {props.user.products.map((prod: any, index: any) => (
          <li key={index}>
            <span>{prod.productName}</span>
            <span>{prod.price}$</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserProducts;
