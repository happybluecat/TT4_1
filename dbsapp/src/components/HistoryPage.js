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
        "availableBal": 89964.89,
        "accountNumber": 84067775,
        "linked": true
    }
  ])

  const [userTransactions, setUserTransactions] = useState([])

  useEffect(() => {
    axios
      .post(`https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view`,
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
        setUserTransactions(response.data)
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
