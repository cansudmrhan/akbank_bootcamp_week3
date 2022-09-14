const ProductSelectList: any = (props: any) => {
  // console.log(props.inputTradeSender, "props.inputTradeSender");

  // console.log(props);

  const sellerProducts = props.userList.find(
    (user: any) => user.id === props.inputTradeSender
  )?.products;
  // console.log(sellerProducts, "sellerProducts");

  return (
    <select onChange={props.onChange} name={props.name} id={props.name}>
      <option>{props.placeholder}</option>
      {sellerProducts?.map((option: any, index: any) => (
        <option value={option.id} key={index}>
          {option.productName}
        </option>
      ))}
    </select>
  );
};

export default ProductSelectList;
