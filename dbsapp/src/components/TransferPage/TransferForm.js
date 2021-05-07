import * as React from "react";
// import classes from "./TransferForm.module.css";

class TransferForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custID: "",
      accountKey: "",
      payeeID: "",
      amount: "",
      eGift: false,
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event);
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  setGift(event) {
    const checked = this.state.eGift;
    console.log(checked);
    this.setState({
      ...this.state,
      eGift: !checked,
    });
  }

  handleSubmit(event) {   
    let headers = {
        'x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'
    }

    var data = {
        custID: this.state.custID,
        accountKey: this.state.accountKey,
        payeeID: this.state.payeeID,
        amount: this.state.amount,
        eGift: this.state.eGift,
        message: this.state.message
    }

    axios
    .post("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add", 
    data, {headers: headers})
    .then((response) => {
        console.log("Sent transaction");
    })
    .catch((error) => {
        if (error.response.status === 401) {
            console.log("Error 401");
        }
    });   
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Recipient ID:
            <input
              type="number"
              name="payeeID"
              value={this.state.payeeID}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <input
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            eGift:
            <input
              type="checkbox"
              name="eGift"
              value={this.state.eGift}
              checked={this.state.eGift}
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  eGift: !this.state.eGift,
                })
              }
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TransferForm;
