import React from 'react'

const Transaction = ({userTransaction}) => {
  return (
    <tr key={userTransaction.id}>
      <td>{userTransaction.datetime}</td>
      <td>{userTransaction.amount}</td>
      <td>{userTransaction.message}</td>
      <td>{userTransaction.expenseCat}</td>
    </tr>
  )
}

export default Transaction
