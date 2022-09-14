import React from "react";
import ProductListProduct from "./ProductListProduct";

const ProductList: any = (props: any) => {
  return (
    <ul>
      {props.productListData.map((prod: any) => (
        <ProductListProduct
          key={prod.id}
          isSellVisible={props.isSellVisible}
          productName={prod.productName}
          quantity={prod.quantity}
          price={prod.price}
          id={prod.id}
          onSellProduct={props.onSellProduct}
        />
      ))}
    </ul>
  );
};

export default ProductList;
