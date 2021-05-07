import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Balance from './Balance'
import Transaction from './Transaction'

const HistoryPage = ({custID, accountKey}) => {
  const [userAccounts, setUserAccounts] = useState([])

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

  useEffect(() => {
    axios
      .post(`https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts`,
        {
          'accountKey': '1lujbdro-c7p2-asf6-bjyl-hveq2in12rb',
          'custID': 1
        },
        {
          headers: {
            'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
          }
        })
      .then(response => {
        setUserAccounts(response.data)
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
