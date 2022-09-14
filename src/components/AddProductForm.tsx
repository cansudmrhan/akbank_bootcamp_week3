import React, { useState } from "react";
type AddProductFormType = {
  productName: string;
  quantity: string;
  price: string;
};
const AddProductFrom: any = (props: any) => {
  const [form, setForm] = useState<AddProductFormType>({
    productName: "",
    quantity: "",
    price: "",
  });
  const isButtonDisabled = Object.values(form).includes("");
  const handleChange = (event: any) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    const newForm = { ...form, [key]: value };
    setForm(newForm);
  };
  return (
    <form className="addProductForm__form">
      <input
        onChange={handleChange}
        value={form.productName}
        name="productName"
        type="text"
        placeholder="ürün Adı"
      />
      <input
        onChange={handleChange}
        value={form.quantity}
        name="quantity"
        type="text"
        placeholder="ürün Adedi"
      />
      <input
        onChange={handleChange}
        value={form.price}
        name="price"
        type="text"
        placeholder="ürün Fiyatı"
      />
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={() => {
          props.onAddProduct(form);
          setForm({ productName: "", quantity: "", price: "" });
        }}
      >
        Ekle
      </button>
    </form>
  );
};

export default AddProductFrom;
