import React from "react";

const UserSelectList: any = (props: any) => {
  return (
    <select
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      <option>{props.placeholder}</option>
      {props.options.map((option: any) => (
        <option value={option.id} key={option.id}>
          {option.adSoyad}
        </option>
      ))}
    </select>
  );
};

export default UserSelectList;
