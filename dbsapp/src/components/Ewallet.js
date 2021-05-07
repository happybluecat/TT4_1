const Ewallet = () => {

    return (
        <div>
                <title>E-wallet</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left" />My E-wallet<i className="fa fa-user" /></p>
          <div className="amount-box text-center">
            <img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet" />
            <p>Total Balance</p>
            <p className="amount">$ 123</p>
          </div>
          <div className="btn-group text-center">
            <button type="button" className="btn btn-outline-light">Add Money</button>
            <button type="button" className="btn btn-outline-light">Widthdraw</button>
          </div>
          <div className="txn-history">
            <p><b>History</b></p>
            <p className="txn-list">Payment to xyz shop<span className="debit-amount">-$100</span></p>
            <p className="txn-list">Payment to abc shop<span className="debit-amount">-$150</span></p>
            <p className="txn-list">Credit From abc ltd<span className="credit-amount">+$300</span></p>
            <p className="txn-list">Transfer From John Doe<span className="credit-amount">+$100</span></p>
          </div>
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
    )
}

export default Ewallet;