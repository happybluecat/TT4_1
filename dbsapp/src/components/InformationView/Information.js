import React from "react";
import classes from "./Information.module.css";

function Information() {
  return (
    <div>
        {/* Account Information */}
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
                <h1>Transaction History</h1>
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
  );
}

export default Information;