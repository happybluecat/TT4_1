import React, { Component } from 'react';
//import classes from "./components/style.css";
import logo from './transaction.png';

function Transaction() {
  return (
    <div>
      <title>Transaction</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left" />Transaction<i className="fa fa-user" /></p>
          <div className="amount-box text-center">
            <img src={logo} alt="transaction" />
            
            
          </div>
          <div className="btn-group text-center">
            <h1>Transaction</h1>
          </div>
      
      <form method="POST">
        <div>
          <label for="amount">Amount in: &nbsp;&nbsp;</label>
          <input id="amount" placeholder="SGD" type="number"/>
        </div>
        <div>
          <label for="recipient-id">Recipient: &nbsp;&nbsp;</label>
          <input id="recipient-id" placeholder="Recipient ID" type="text"/>
        </div>
        <div>
          <br></br>
          <button type="submit">Cancel</button>
          <button type="submit">Transfer</button>

          
        </div>
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
  );
}

export default Transaction;
