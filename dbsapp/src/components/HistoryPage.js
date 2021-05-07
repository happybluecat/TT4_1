import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HistoryPage = ({custID, accountKey}) => {
  const [userAccounts, setUserAccounts] = useState([
    {
        "accountName": "Saving Account",
        "bankInfoID": 45,
        "availableBal": 88888.88,
        "accountNumber": 56993360,
        "linked": false
    },
    {
        "accountName": "Current Account",
        "bankInfoID": 1,
        "availableBal": 88888.88,
        "accountNumber": 30874906,
        "linked": false
    },
    {
        "accountName": "Multiplier Account",
        "bankInfoID": 23,
        "availableBal": 88954.88,
        "accountNumber": 84067775,
        "linked": true
    }
  ])

  // useEffect(() => {  // not too sure how to fix this so using fake data for view first
  //   axios
  //     .post(`http://localhost:3000/accounts`,
  //     {
  //       accountKey: custID,
  //       custID: accountKey
  //     })
  //     .then(response => {
  //       console.log(response.data)
  //     })
  // }, [custID, accountKey])

  return (
    <tbody>
			{userAccounts.map(userAccount =>
        <tr key={userAccount.bankInfoID}>
          <td>{userAccount.accountName}</td>
          <td>{userAccount.availableBal}</td>
        </tr>
      )}
    </tbody>
  )
}

export default HistoryPage
