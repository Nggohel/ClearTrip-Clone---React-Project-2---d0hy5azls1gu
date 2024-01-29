import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import LoginCarousel from "../components/Carousels/LoginCarousel";
import "../styles/LoginPage.css";
import useFetch from "../Hooks/UseFetch";
import { useLoginContext } from "../Hooks/LoginContext";

const LoginPage = ({ open, openChange }) => {
  const { setLoginState, setLocalStorageLoginData } = useLoginContext();
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLogin(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { data: Data, fetchPostData } = useFetch();

  const handleSignupApi = async () => {
    fetchPostData(
      `https://academics.newtonschool.co/api/v1/bookingportals/signup`,
      "POST",
      {
        name: name,
        email: email,
        password: password,
        appType: "bookingportals",
      }
    );
    setName("");
    setEmail("");
    setPassword("");
    openChange(false);
    setLoginState(true);
  };

  const handleLoginApi = async () => {
    fetchPostData(
      `https://academics.newtonschool.co/api/v1/bookingportals/login`,
      "POST",
      {
        email: email,
        password: password,
        appType: "bookingportals",
      }
    );
    setName("");
    setEmail("");
    setPassword("");
    openChange(false);
    setLoginState(true);
  };

  useEffect(() => {
    if (Data != null || Data != undefined) {
      console.log("login", Data);
      setLocalStorageLoginData(Data);
      localStorage.setItem("signup&loginData", JSON.stringify(Data));
    }
  }, [Data]);

  return (
    <>
      <Modal
        open={open}
        center
        onClose={() => openChange(false)}
        classNames={{
          modal: "customModal",
        }}
      >
        <div style={{ display: "flex" }}>
          <LoginCarousel />

          <div className="login-container">
            {/* true he toh name ki jarrot nahi he */}
            {isLogin ? (
              ""
            ) : (
              <>
                <label className="name-label">Name</label>
                <input
                  type="text"
                  className="input-name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handleNameChange}
                ></input>
              </>
            )}
            <label className="name-label">Email</label>
            <input
              type="email"
              className="input-name"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
            ></input>

            <label className="name-label">Password</label>
            <input
              type="password"
              className="input-name"
              placeholder="Enter Your Password"
              value={password}
              onChange={handlePasswordChange}
            ></input>
            <button
              className="login-btn"
              onClick={isLogin ? handleLoginApi : handleSignupApi}
            >
              {isLogin ? "Login" : "Get started"}
            </button>

            {/* link option */}
            {/* true he toh yeh line dikhane ki jarrot nahi he */}
            {isLogin ? (
              ""
            ) : (
              <>
                <p className="already-acc-para">
                  Already account ?
                  <span onClick={handleLogin} className="already-acc">
                    Login Here
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginPage;