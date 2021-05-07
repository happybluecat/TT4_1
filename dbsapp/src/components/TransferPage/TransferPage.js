import * as React from 'react';
import TransferForm from './TransferForm.js';
import logo from './transaction.png'

const TransferPage = () => {
    return (
        <header className='transfer'>
        <title>Transaction</title>
        <link rel="stylesheet" href="style.css" />
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left" />Transaction<i className="fa fa-user" /></p>
          <div className="amount-box text-center">
            <img src={logo} alt="transaction" />
            
            
          <div className="btn-group text-center"></div>
            <h1>Transfer to</h1>
           <TransferForm />
           </div>
           <div className="footer-menu">
            <div className="row text-center">
              <div className="col-md-3">
                <i className="fa fa-home" />
                <p>Home</p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-exchange" />
                <p>Transfer</p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-university" />
                <p>Account</p>
              </div>
              <div className="col-md-3">
                <i className="fa fa-sign-out" />
                <p>Logout</p>
              </div>
            </div>
          </div>
           </div>
        </header>
    );
}

export default TransferPage;
