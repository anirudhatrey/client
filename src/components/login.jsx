import React, { useState } from "react";
import PropTypes from 'prop-types';
 
export default function Login( props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
     
    props.setToken(token);
  
 
  }

  return (
      <>
 
 <div className="d-flex flex-row justify-content-center">
    <div className="row">
      <div className="col-md">
        <form onSubmit={handleSubmit}>
          <div className="sign-in">Sign In</div>
          <div className="form-group">
            <label id="words_1">
              Email(phone for mobile accounts)
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => setUserName(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label id="words_2" >
              Password{" "}
              <a
                style={{
                  float: "right",
                  marginLeft: "9vw",
                  cursor: "pointer",
                }}
              >
                {" "}
                Forgot your password? {" "}
              </a>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <div className="form-group">
              <button type="submit" className="btn btn-warning" id="sign-in">
                Sign In 
              </button>
              <br/>
              <input
                  type="checkbox"
                  className="form-check-input checkbox"
                  id="exampleCheck1"
                />
              <p className="keep-sign-in">
              {" "}
                Keep me signed in. <a href="#">Details</a>
              </p>
              <img
                id="amazon-img"
                src="logo51.png"
                alt="Amazon Image"
              />
            </div>
          </div>
          <div className="form-check"></div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
                props.registered?props.changeReg(false):props.changeReg(true)
              ;
            }}
            id="grey-button"
          >
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  </div>
    </>
  );
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
}
