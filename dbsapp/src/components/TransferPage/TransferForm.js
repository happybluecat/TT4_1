import * as React from 'react';

class TransferForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          custID: '',
          accountKey: '',
          payeeID: '',
          amount: '',
          eGift: false,
          message: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({payeeID: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Form PayeeID: ' + this.state.payeeID);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Payee ID:
            <input type="number" value={this.state.payeeID} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default TransferForm