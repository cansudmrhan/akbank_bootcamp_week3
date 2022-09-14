import React from "react";

const ProductListProduct: any = (props: any) => {
  return (
    <li className="productListProduct__li">
      <div className="productListProduct__text">
        <span>{props.productName}</span>
        <span>{props.quantity} Adet</span>
        <span>{props.price}$</span>
      </div>
      <div className="productListProduct__actions">
        {props.isSellVisible ? (
          <button onClick={() => props.onSellProduct(props.id)}>Sat</button>
        ) : null}
      </div>
    </li>
  );
};

export default ProductListProduct;
