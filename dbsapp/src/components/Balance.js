import React from 'react'

const Balance = ({userAccount}) => {
  return (
    <tr key={userAccount.bankInfoID}>
      <td>{userAccount.accountName}</td>
      <td>{userAccount.availableBal}</td>
    </tr>
  )
}

export default Balance
