import React from "react";
import classes from "./Transaction.module.css";

function Transaction() {
  return (
    <div>
      <form method="POST">
        <div>
          <label for="amount">Amount in:</label>
          <input id="amount" placeholder="SGD" type="number"/>
        </div>
        <div>
          <label for="recipient-id">Recipient:</label>
          <input id="recipient-id" placeholder="Recipient ID" type="text"/>
        </div>
        <div>
          <button type="submit">Cancel</button>
          <button type="submit">Transfer</button>
        </div>
      </form>
    </div>
  );
}

export default Transaction;
