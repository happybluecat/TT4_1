import React from "react";
import classes from "./Information.module.css";

function Information() {
  return (
    <div>
        {/* Account Information */}

        <title>Transaction</title>
        <link rel="stylesheet" href="style.css" />
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left" />Transaction<i className="fa fa-user" /></p>
          <div className="amount-box text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Font_Awesome_5_solid_university.svg/768px-Font_Awesome_5_solid_university.svg.png" alt="transaction" />
        <div>
            <div>
                <h1>My Account</h1>
            </div>
            <div>
                <span>accountName*</span>
            </div>
            <div>
                <span>accountNumber*</span>
            </div>
            <div>
                <div>
                    <span>Balance</span>
                </div>
                <div>
                    <span>SGD amount*</span>
                </div>
            </div>
        </div>
        {/* End of Account Information */}
        
        {/* Transaction History */}
        <div>
            <div>
                <h2>Transaction History</h2>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Payee ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">eGift</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>1234567</td>
                            <td>xx/xx/xxxx</td>
                            <td>S$111</td>
                            <td>Yes</td>
                            <td>message</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>1234567</td>
                            <td>xx/xx/xxxx</td>
                            <td>S$111</td>
                            <td>Yes</td>
                            <td>message</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

        </div>
        

        
        {/* End of Transaction History */}
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
    
    </div>
  );
}

export default Information;