import React from 'react'

const UserListUser = (props: any) => {
  return (
    <li
      className={['userListUser__li', props.isCurrentUser ? 'strong' : ''].join(
        ' '
      )}
    >
      <div className="userListUser__text">
        <span>{props.adSoyad}</span>
        <span>{props.bakiye}</span>
      </div>
      <div className="userListUser__actions">
        <button onClick={() => props.onChangeCurrentUser(props.id, 'products')}>
          Ürünler
        </button>
        <button onClick={()=>props.onChangeCurrentUser(props.id, 'extre')}>
          Extre
        </button>
      </div>
    </li>
  )
}

export default UserListUser
