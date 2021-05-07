import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Balance from './Balance'
import Transaction from './Transaction'

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

  const [userTransactions, setUserTransactions] = useState([
    {
      "eGift": false,
      "datetime": 1611445424,
      "custID": 8,
      "amount": 53.19,
      "message": "Breakfast",
      "payeeID": 1,
      "expenseCat": "Transport"
    },
    {
      "eGift": true,
      "datetime": 1618944414,
      "custID": 1,
      "amount": 810.29,
      "message": "Thanks",
      "payeeID": 6,
      "expenseCat": "Shopping"
    },
    {
      "eGift": true,
      "datetime": 1618973639,
      "custID": 1,
      "amount": 414.62,
      "message": "",
      "payeeID": 14,
      "expenseCat": "Others"
    },
    {
      "eGift": false,
      "datetime": 1615905638,
      "custID": 12,
      "amount": 289.72,
      "message": "Dinner",
      "payeeID": 1,
      "expenseCat": "Others"
    }
  ])

  useEffect(() => {  // not too sure how to fix this so using fake data for view first
    axios
      .post(`https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts`,
        {
          'accountKey': custID,
          'custID': accountKey
        },
        {
          headers: {
            'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
          }
        })
      .then(response => {
        console.log(response.data)
      })
  }, [custID, accountKey])

  return (
    <div>
      Account balances
      {userAccounts.map(userAccount =>
			  <Balance userAccount={userAccount} />
      )}
      <br/>
      Transaction History
      {userTransactions.map(userTransaction =>
        <Transaction userTransaction={userTransaction}/>
      )}
    </div>
  )
}

export default HistoryPage
