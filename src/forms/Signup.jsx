import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import './Signup.css'
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
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
    setPasswordFocused(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == "" || email == "" || password == "") {
      return toast.error("fill the required Fields");
    }
    if (username.length < 5) {
      return toast.error("username should be min 5 words");
    }

    if (password.length < 5) {
      return toast.error("password should be min 5 words");
    }
    if (email === "") toast.error("enter the email");
    else toast.success("Sign up Successfully");
    navigate("/");
  };

  console.log(username);

  return (
    <div className="p-3  fluid  conatiner ">
      <div className="row">
        <div className="col-xs-12 col-md-6 -mt-2 img-ani">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Phone image"
          />
          <img />
        </div>

        <div
          className="col-xs-12 col-md-6 form-ani"
          style={{ marginTop: "4rem" }}
        >
          <div className="row mx-2">
            <div className="fw-semibold">
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "NoirPro, Arial",
                  color: "white",
                }}
              >
                Sign Up
              </h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="col-xs-12">
                <div
                  className={`mb-4 mt-4 ${usernameFocused ? "focused" : ""}`}
                >
                  <label
                    htmlFor="formControlLgEmail"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Username
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="formControlLgUsername"
                    type="username"
                    value={username}
                    onChange={handleUsernameChange}
                    onFocus={handleUsernameFocus}
                    name="username"
                    style={{ width: "70%" }}
                  />
                </div>
                <div className={`mb-4 mt-4 ${emailFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgEmail"
                    className="form-label fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Email
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="formControlLgEmail"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    name="email"
                    style={{ width: "70%" }}
                  />
                </div>
                <div className={`mb-4 ${passwordFocused ? "focused" : ""}`}>
                  <label
                    htmlFor="formControlLgPassword"
                    className="form-label fw-semibold relative"
                    style={{ fontSize: "1rem" }}
                  >
                    Password
                  </label>
                  <input
                    className="form-control form-control-lg"
                    id="formControlLgPassword"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocus}
                    style={{ width: "70%" }}
                  />
                  {/* <button
                    className="bg-white fw-4 eye -left-2 eye"
                    type="button"
                    style={{ border: "none", outline: "none" }}
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? <BiHide /> : <BiShow />}
                  </button> */}
                </div>
              </div>
              <div className="col-xs-12 d-flex justify-content-left mt-4">
                <button
                  className="w-50   rounded btn-hover-effect"
                  type="submit"
                  style={{
                    fontSize: "1.2rem",
                    height: "2.4rem",
                    padding: "3px",
                    fontWeight: "500",
                    backgroundColor: "green",
                  }}
                >
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="col-xs-12 d-flex justify-content-left mt-4">
              <p className="fw-semibold text-white">
                Already I have an account{" "}
                <Link to="/" style={{ textDecoration: "underline" }}>
                  Sign In
                </Link>
              </p>
            </div>
            <div className="col-xs-12 d-flex justify-content-center mt-3">
              <hr className=" border-white d-flex col"></hr>
            </div>

            <div className="col-xs- mt-3 d-flex mx-4">
              <button
                className="btn mb-4"
                type="button"
                style={{
                  backgroundColor: "rgb(115, 82, 199,0)",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "100%",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </svg>
              </button>
              <span
                style={{
                  fontSize: "1.4rem",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                  fontFamily: "Arial",
                }}
              >
                or
              </span>
              <button
                className="btn mb-4"
                type="button"
                style={{
                  backgroundColor: "rgb(115, 82, 199,0)",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "100%",
                  gap: "2rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
