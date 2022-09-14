import React from "react";

const UserExtre: any = (props: any) => {
  return (
    <>
      <div>UserExtre</div>
      <ul>
        {props.user.extre.map((info: any, index: any) => (
          <li key={index}>
            <span>{info}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserExtre;
