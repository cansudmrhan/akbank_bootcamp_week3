import UserSelectList from "./UserSelectList";
import ProductSelectList from "./ProductSelectList";

const TradeForm: any = (props: any) => {
  return (
    <form>
      <UserSelectList
        name="seller"
        options={props.userList}
        placeholder="Satıcı seçiniz"
        stateControl="inputTradeSender"
        value={props.inputTradeSender}
        onChange={props.handleTradeSender}
      />
      <ProductSelectList
        name="product"
        userList={props.userList}
        placeholder="Ürün seçiniz"
        inputTradeSender={props.inputTradeSender}
        stateControl="inputSellProduct"
        value={props.inputSellProduct}
        onChange={props.handleSellProduct}
      />
      <UserSelectList
        name="buyer"
        options={props.userList.filter(
          (user: any) => user.id !== props.inputTradeSender
        )}
        placeholder="Alıcı seçiniz"
        stateControl="inputTradeBuyer"
        value={props.inputTradeBuyer}
        onChange={props.handleTradeBuyer}
      />
      <button type="button" onClick={props.handleTrade}>
        Gönder
      </button>
    </form>
  );
};

export default TradeForm;
