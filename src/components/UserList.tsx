import React from 'react'
import UserListUser from './UserListUser'

const UserList: any = (props: any) => {
  return (
    <ul>
      {props.userListData.map((user: any) => (
        <UserListUser
          key={user.id}
          id={user.id}
          isCurrentUser={user.id === props.currentUser}
          onChangeCurrentUser={props.onChangeCurrentUser}
          adSoyad={user.adSoyad}
          bakiye={user.bakiye}
        />
      ))}
    </ul>
  )
}

export default UserList
