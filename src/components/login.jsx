import React, { useState } from "react";
 
export default function Login( props) {





const RegForm=()=>{<>User reg comming soon!!</>}

  return (
      <>
 
 <div className="d-flex flex-row justify-content-center">
    <div className="row">
      <div className="col-md">
        <form>
          <div className="sign-in">Sign In</div>
          <div className="form-group">
            <label id="words_1" for="exampleInputEmail1">
              Email(phone for mobile accounts)
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label id="words_2" for="exampleInputPassword1">
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
            />
            <div className="form-group">
              <button type="button" className="btn btn-warning" id="sign-in">
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
                Keep me signed in. <a href="https://stupidlink.com">Details</a>
              </p>
              <img
                id="amazon-img"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2221140/newtoamazon1.svg"
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
}
