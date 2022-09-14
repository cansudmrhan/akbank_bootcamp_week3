import UserSelectList from "./UserSelectList";

const TransactionForm: any = (props: any) => {
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
      <input
        type="text"
        name="amount"
        value={props.inputAmount}
        onChange={props.handleInputAmount}
        placeholder="miktar"
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
      <button type="button" onClick={props.handleTransaction}>
        Gönder
      </button>
    </form>
  );
};

export default TransactionForm;
