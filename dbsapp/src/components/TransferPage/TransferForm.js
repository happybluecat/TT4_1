import * as React from "react";
import classes from "./TransferForm.module.css";

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
    alert("Form PayeeID: " + this.state.payeeID);
    console.log(this.state);
    event.preventDefault();
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
