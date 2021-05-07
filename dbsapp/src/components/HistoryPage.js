import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Balance from './Balance'

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
    </div>
  )
}

export default HistoryPage
