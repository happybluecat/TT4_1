import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HistoryPage = ({custID, accountKey}) => {
  useEffect(() => {
    axios
      .post(`http://localhost:3000/accounts`,
      {
        accountKey: custID,
        custID: accountKey
      })
      .then(response => {
        console.log(response.data)
      })
  }, [])

  return <div>
    <div>
			<p>Total Balance</p>
			<p>$ 123</p>
    </div>
  </div>
}

export default HistoryPage
