import React from "react";
import classes from "./Transaction.module.css";

function Transaction() {
  return (
    <div>
      <form method="POST">
        <div>
          <label>Amount in:</label>
          <input type="number" placeholder="SGD"/>
        </div>
        <div>
          <label>Recipient:</label>
          <input type="text" placeholder="Recipient ID"/>
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
