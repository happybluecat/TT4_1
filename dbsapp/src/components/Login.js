import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
// import useToken from './components/useToken';

async function loginUser(credentials) {
    return fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
      method: 'POST',
      headers: {
        "x-api-key": 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu',
    },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            "userName": username,
            "userPass": password
        });

        setToken(token);
        setRedirect(<Redirect to="/TransferPage"></Redirect>);
      }
    
      return (
        <div>
                <title>Login</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left" />Log in<i className="fa fa-user" /></p>
          <div className="amount-box text-center">
            <img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet" />
            
            
          </div>
          <div className="btn-group text-center">
            <h1>Login</h1>

            {redirect}
          </div>

          <form className ='login-form' >
                <div className = 'login-list'>
                    <label>Username: &nbsp;&nbsp;</label>
                    <input type ='text' placeholder='Username'onChange={e => setUserName(e.target.value)} ></input>
                </div>
                <div className = 'login-list'>
                    <label>Password: &nbsp;&nbsp;</label>
                    <input type ='text' placeholder='Password'  onChange={e => setPassword(e.target.value)}></input>
                </div>
            <input type ='button' value = 'Login' onClick={handleSubmit}></input>
            </form>

          <div className="footer-menu">
            <div className="row text-center">
              <div className="col-md-3">
                <i className="fa fa-home" />
                <p>Home</p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-inbox" />
                <p>Inbox</p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-university" />
                <p>Bank</p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-barcode" />
                <p>Scan</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
//     return(
//       <div className="login-wrapper">
//         <h1>Please Log In</h1>
//         <form >
//           <label>
//             <p>Username</p>
//             <input type="text" />
//           </label>
//           <label>
//             <p>Password</p>
//             <input type="password"/>
//           </label>
//           <div>
//             <button type="submit" >Submit</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };