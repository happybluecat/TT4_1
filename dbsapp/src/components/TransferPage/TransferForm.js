import * as React from 'react';
import axios from "axios";

class TransferForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            custID: '1',
            accountKey: '1lujbdro-c7p2-asf6-bjyl-hveq2in12rbx',
            payeeID: '',
            amount: '',
            eGift: false,
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        const value = event.target.value;       
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    setGift(event) {
        const checked = this.state.eGift;
        console.log(checked);
        this.setState({
            ...this.state,
            eGift: !checked
        });
    }

    handleSubmit(event) {
        setError(null);
        setLoading(true);
        axios
        .post("http://localhost:4000/users/signin", {
            custID: this.state.custID,
            accountKey: this.state.accountKey,
            payeeID: this.state.payeeID,
            amount: this.state.amount,
            eGift: this.state.eGift,
            message: this.state.message
        })
        .then((response) => {
            setLoading(false);
            console.log("Sent transaction");
        })
        .catch((error) => {
            setLoading(false);
            if (error.response.status === 401)
            setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });   
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>
                    Recipient ID:
            <input type="number" name="payeeID" value={this.state.payeeID} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                    Amount:
            <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                    Message:
            <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                    eGift:
            <input type="checkbox" name="eGift" value={this.state.eGift} checked={this.state.eGift} onChange={e => this.setState({
            ...this.state, eGift: !this.state.eGift})} />
                </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TransferForm



