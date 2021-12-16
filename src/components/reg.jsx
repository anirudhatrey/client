import React, { useState } from "react";


export default function Reg(props) {
    const [userName,changeName]=useState('');
    const [Email,changeEmail]=useState('');
    const [Password,changePassword]=useState('');
    const [rePassword,changerePassword]=useState('');
    const handleSubmit =(e)=>{
         e.preventDefault();
         const newUser={userName,Email,Password};
         fetch('localhost:3002/users',{
             method: 'POST',
             headers:{"Content-Type":"application/json"},
             body: JSON.stringify(newUser)
         }).then(()=>{
             console.log("reg successfully");
         })
    };
    return(
    <div className="container">
        <div className="row">
            <div className="panel panel-primary">
                <div className="panel-body">
                    <form  role="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h2>Create account</h2>
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="signupName">
                                Your name
                            </label>
                            <input
                                id="signupName"
                                type="text"
                                maxlength="50"
                                className="form-control"
                                value={userName}
                                onChange={(e)=>{changeName(e.target.value)}} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="signupEmail">
                                Email
                            </label>
                            <input
                                id="signupEmail"
                                type="email"
                                maxlength="50"
                                className="form-control"
                                value={Email}
                                onChange={(e)=>{changeEmail(e.target.value)}} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="signupEmailagain">
                                Email again
                            </label>
                            <input
                                id="signupEmailagain"
                                type="email"
                                maxlength="50"
                                className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="signupPassword">
                                Password
                            </label>
                            <input
                                id="signupPassword"
                                type="password"
                                maxlength="25"
                                className="form-control"
                                placeholder="at least 6 characters"
                                length="40" 
                                value={Password}
                                onChange={(e)=>{changePassword(e.target.value)}} />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="signupPasswordagain">
                                Password again
                            </label>
                            <input
                                id="signupPasswordagain"
                                type="password"
                                maxlength="25"
                                className="form-control"
                                value={rePassword}
                                onChange={(e)=>{changerePassword(e.target.value)}}  />
                        </div>
                        <div className="form-group">
                            <button
                                id="signupSubmit"
                                type="submit"
                                className="btn btn-info btn-block"
                            >
                                Create your account
                            </button>
                        </div>
                        <p className="form-group">
                            By creating an account, you agree to our{" "}
                            <a href="#">Terms of Use</a> and our{" "}
                            <a href="#">Privacy Policy</a>.
                        </p>
                        <hr />
                        <p  onClick={() => {
                props.registered?props.changeReg(false):props.changeReg(true)
              ;
            }}>
                            Already have an account?<a href="#">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

