const Login = () => {

    return (
        <div>
                <title>Login</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="wallet-container text-center">
          <p className="page-title"><i className="fa fa-align-left" />Log in<i className="fa fa-user" /></p>
          <div className="amount-box text-center">
            <img src="https://lh3.googleusercontent.com/ohLHGNvMvQjOcmRpL4rjS3YQlcpO0D_80jJpJ-QA7-fQln9p3n7BAnqu3mxQ6kI4Sw" alt="wallet" />
            
            
          </div>
          <div className="btn-group text-center">
            <h1>Login</h1>
          </div>

          <form className ='login-form' >
                <div className = 'login-list'>
                    <label>Username: &nbsp;&nbsp;</label>
                    <input type ='text' placeholder='Username' ></input>
                </div>
                <div className = 'login-list'>
                    <label>Password: &nbsp;&nbsp;</label>
                    <input type ='text' placeholder='Password'></input>
                </div>
            <input type ='submit' value = 'Login' ></input>
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
    )
}

export default Login;