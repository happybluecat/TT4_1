import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HistoryPage = () => {
  useEffect(() => {
    axios
      .get(`https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts?key=${process.env.REACT_APP_API_KEY}&x-api-key=`)
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
