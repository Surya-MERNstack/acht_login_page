import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [NoPassword, setNoPassword] = useState();
  const [NoUsername, setNoUsername] = useState();
  const [usernameLength, setUsernameLength] = useState();
  const [passwordLength, setPassworLength] = useState();

  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);



  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailFocused(false);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordFocused(false);
    }
  };

  useEffect(() => {
    axios.get('https://petals.ath.cx/test/login.jsp')
    .then((response) => setNoUsername(response.data.error.username))

    axios.get('https://petals.ath.cx/test/login.jsp')
    .then((response) => setNoPassword(response.data.error.password))

    axios.get('https://petals.ath.cx/test/login.jsp?username=test&password=test')
    .then((response) => setPassworLength(response.data.error.password))

    axios.get('https://petals.ath.cx/test/login.jsp?username=test&password=test')
    .then((response) => setUsernameLength(response.data.error.username))
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === ""){
      return toast.error(NoUsername)
    }
      
    if(password === "") {
      return toast.error(NoPassword);
    }

    if (email.length < 5) {
      return toast.error(usernameLength);
    }

    if (password.length < 5) {
      return toast.error(passwordLength);
    }

    toast.success("Login Successfully!!!");
    navigate("/home");
    console.log("clicked");
  };


  
  return (
    <div className="p-3 my-5 fluid " style={{backgroundImage: "radial-gradient(circle, #202047 0, #020917 100%)"}}>
      <div className="row mx-4" >
        <div className="col-xs-12 col-md-6 mt-auto img-ani">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </div>

        <div className="col-xs-12 col-md-6 form-ani" style={{ marginTop: "4rem" , borderRadius : "15px"}}>
          <div className="fw-semibold img-ani">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                fontFamily: "NoirPro, Arial",
                color: "#fff",
              }}
            >
              Sign In
            </h2>
          </div>

          <div className="row mt-3 img-ani" style={{ fontSize: "1.3rem" }}>
            <form action="" onSubmit={handleSubmit}>
              <div className="col-xs-12">
                <div className={`mb-4 mt-4 ${emailFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgEmail"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem"}}
                  >
                    Username
                  </label>
                  <input
                    className="form-control form-control-lg"
                    style={{ padding: "0.5rem", width: "70%" }}
                    id="formControlLgEmail"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className={`mb-4 ${passwordFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgPassword"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Password
                  </label>
                  <div className="password-input">
                    <input
                      className="form-control form-a form-control-lg"
                      id="formControlLgPassword"
                      style={{ padding: "0.5rem", width: "70%"}}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      onFocus={handlePasswordFocus}
                      onBlur={handlePasswordBlur}
                    />
                    <button
                      className="bg-white fw-4 eye"
                      type="button"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </button>
                  </div>
                  <div className="mt-2">
                    <p>
                      <Link
                        to="/"
                        style={{
                          color: "black",
                          fontFamily: "arial",
                          fontSize: "1rem",
                          color: "#fff",
                        }}
                      >
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 d-flex justify-content-left mt-2">
                <button
                  className="w-50 rounded btn-hover-effect"
                  style={{fontSize : "1.2rem",height:"2.2rem",padding:"3px"}}
                  type="submit"
                >
                  SIGN IN
                </button>
              </div>
            </form>
            <div className="col-xs-12">
              <div
                className="col-xs-12 d-flex justify-content-left mt-4"
                style={{ fontSize: "1.1rem" }}
              >
                <p className="fw-semibold text-white">
                  Dont have an account ? <Link to="/" style={{textDecoration :"underline"}}>Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
