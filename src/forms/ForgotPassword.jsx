import React , { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPassword.css";
import axios from "axios";

export const ForgotPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [NoPassword, setNoPassword] = useState();
    const [NoUsername, setNoUsername] = useState();
    const [usernameLength, setUsernameLength] = useState();
    const [passwordLength, setPassworLength] = useState();
  
    const [email, setEmail] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [loading, setLoading] = useState(false);
  
    
  
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
        return toast.error("Enter the valid Email!!")
      }
        
      setLoading(true);
      toast.success("Verfied Successfully!!!");
      setTimeout(() => {
        navigate("/home");
      },2000)
    };
  
  return (
    <div className="p-3  fluid  conatiner" >
    <div className="row mx-4" style={{marginTop : "9rem"}} >
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
            
            Forgot Password
          </h2>
        </div>

        <div className="row mt-3 img-ani" style={{ fontSize: "1.3rem" }}>
          <form action="" onSubmit={handleSubmit} >
            <div className="col-xs-12">
              <div className={`mb-4 mt-4 ${emailFocused ? "focused" : ""}`}>
                <label
                  htmlFor="formControlLgEmail"
                  className="form-label fw-semibold"
                  style={{ fontSize: "1rem"}}
                >
                 Email
                </label>
                <input
                  className="form-control form-control-lg"
                  style={{ padding: "0.5rem", width: "70%", fontSize : "1rem" }}
                  id="formControlLgEmail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                />
              </div>
            </div>
            <div className="col-xs-12 d-flex justify-content-left mt-2">
              <button
                className="w-50 rounded btn-hover-effect"
                style={{fontSize : "1.2rem",height:"2.4rem",padding:"3px", fontWeight : "500", backgroundColor : "green"}}
                type="submit"
              >
                  { loading ? "Loading..." : "verify email" }
              </button>
            </div>
          </form>
          <div className="col-xs-12">
            <div
              className="col-xs-12 d-flex justify-content-left mt-4"
              style={{ fontSize: "1.1rem" }}
            >
              <p className="fw-semibold text-white">
               <Link to="/" style={{textDecoration :"underline"}}>Login</Link>
              </p>
              <p className="fw-semibold text-white mx-4">
                <Link to="/signup" style={{textDecoration :"underline"}}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
