import React, { useState } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import Input from "../../UI_components/Input";
import Button from "../../UI_components/Button";
import Checkbox from "../../UI_components/Checkbox";
import { actionCreators } from "./store";
import history from "../../history";

const AccountPage = (props) => {
  const { signUpNewUser, userName, password, error } = props;

  // There are three values for inputState: login, signUp and forgetPassword
  const [inputState, setInputState] = useState("login");
  // There are two values for submitState: noSubmit and submitting
  const [submitState, setSubmitState] = useState("noSubmit");
  // There are two values for loginState: noLogin and loginFailed
  const [loginState, setLoginState] = useState("noLogin");
  const [animationState, setAnimationState] = useState(false);
  const [login, setLoginFormValue] = useState({
    userName: "",
    password: "",
    rememberMe: false,
  });
  const [forgetPassword, setForgetPasswordFormValue] = useState({ email: "" });
  const [signUp, setSignUpFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  // Set each input value base on current input state
  // (login, signUp or forgetPassword)
  const valueInDiffForm = (inputState, name) => {
    switch (inputState) {
      case "login": {
        // if the name property of exact input matches one of the keys from the login object,
        // then set the value property accordingly
        if (Object.keys(login).includes(name)) {
          return login[name];
        } else return "";
      }
      case "signUp": {
        if (Object.keys(signUp).includes(name)) {
          return signUp[name];
        } else return "";
      }
      case "forgetPassword": {
        if (Object.keys(forgetPassword).includes(name)) {
          return forgetPassword[name];
        } else return "";
      }
      default:
        return;
    }
  };

  // Set the value of 'login', 'signUp' or 'forgetPassword' form
  // base on current input state and input value
  const handleValueChanged = (event, inputState, name) => {
    switch (inputState) {
      case "login":
        return setLoginFormValue({ ...login, [name]: event.target.value });
      case "signUp":
        return setSignUpFormValue({ ...signUp, [name]: event.target.value });
      case "forgetPassword":
        return setForgetPasswordFormValue({
          ...forgetPassword,
          [name]: event.target.value,
        });
      default:
        return;
    }
  };

  const handleForgetPasswordClick = () => {
    setLoginState("noLogin");
    // Switch to 'forgetPassword' form
    setInputState("forgetPassword");
    setSubmitState("noSubmit");
    // Reset input value
    setLoginFormValue({ username: "", password: "", rememberMe: false });
  };

  const handleLoginBtn = () => {
    setSubmitState("submitting");
    // Two conditions: login failed or login succeed
    if (login.userName !== userName || login.password !== password) {
      setLoginState("loginFailed");
    } else {
      setLoginState("loginSucceed");
      history.push("/main");
    }
  };

  const handleSignUpBtn = () => {
    // If SignUp button is clicked in login form, switch to signUp form
    if (inputState === "login") {
      setLoginState("noLogin");
      setInputState("signUp");
      setSubmitState("noSubmit");
      setLoginFormValue({ username: "", password: "", rememberMe: false });
    } else {
      // In SignUp form itself, runs the following code
      setSubmitState("submitting");
      setAnimationState(true);
      setTimeout(() => {
        setAnimationState(false);
      }, 1000);
      // use Array.prototype.some method to see
      // if any of the error state of every input turns out to be true from store
      const errorExist = Object.values(error.toJS()).some(
        (value) => value === true
      );
      if (errorExist) {
        // If error exists, the sign up process is terminated
        return;
      }
      // If error doesn't exist, proceed
      signUpNewUser(signUp, setInputState, setSubmitState);
      // Reset signUp form when new user information is saved in memory
      setSignUpFormValue({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    }
  };

  const handleSendEmailBtn = () => {
    setSubmitState("submitting");
    // use Array.prototype.some method to see
    // if any of the error state of every input turns out to be true from store
    const errorExist = Object.values(error.toJS()).some(
      (value) => value === true
    );
    console.log(errorExist);
    if (errorExist) {
      // If error exists, the sign up process is terminated
      return;
    }
    // If error doesn't exist, switch back to login form
    setInputState("login");
    setSubmitState("noSubmit");
    setForgetPasswordFormValue({ email: "" });
  };

  const haveAccountAndSwitchBackToLogin = () => {
    setInputState("login");
    setSubmitState("noSubmit");
    setSignUpFormValue({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    });
  };

  const backToLogin = () => {
    setInputState("login");
    setSubmitState("noSubmit");
    setForgetPasswordFormValue({ email: "" });
  };

  return (
    <div className="account-wrapper">
      <div className="account-cover" />
      <div
        className={
          "account" + (inputState === "signUp" ? " account-sign-up" : "")
        }
      >
        <h1>AWESOME DASH</h1>

        <div className="typography-wrapper">
          <CSSTransition
            in={inputState === "signUp"}
            timeout={500}
            classNames="flip"
            unmountOnExit
          >
            <h4>Please complete to create your account.</h4>
          </CSSTransition>
        </div>

        <div className="typography-wrapper">
          <CSSTransition
            in={inputState === "login"}
            timeout={500}
            classNames="flip"
            unmountOnExit
          >
            <h4>Welcome back! Please login to your account.</h4>
          </CSSTransition>
        </div>

        <div className="typography-wrapper">
          <CSSTransition
            in={inputState === "forgetPassword"}
            timeout={500}
            classNames="flip"
            unmountOnExit
          >
            <h4>Enter your email and we send you a password reset link.</h4>
          </CSSTransition>
        </div>
        {/* Class 'mobile-wrapper' works in mobile view*/}
        <div className="mobile-wrapper">
          <div className="input-wrapper">
            <Input
              state={inputState === "signUp"}
              type="text"
              name="first name"
              placeholder="First Name"
              value={valueInDiffForm(inputState, "firstName")}
              onValueChange={(event) =>
                handleValueChanged(event, inputState, "firstName")
              }
              submitting={submitState === "submitting"}
            />

            <Input
              state={inputState === "signUp"}
              type="text"
              name="last name"
              placeholder="Last Name"
              value={valueInDiffForm(inputState, "lastName")}
              onValueChange={(event) =>
                handleValueChanged(event, inputState, "lastName")
              }
              submitting={submitState === "submitting"}
            />

            <Input
              state={inputState !== "forgetPassword"}
              type="text"
              name="username"
              fullLength
              placeholder="Username"
              value={valueInDiffForm(inputState, "userName")}
              onValueChange={(event) =>
                handleValueChanged(event, inputState, "userName")
              }
              submitting={submitState === "submitting"}
              customErrorNotes="Your username should be within 4-10 word characters"
            />

            <Input
              state={inputState !== "login"}
              type="email"
              name="email"
              fullLength
              placeholder="Email"
              value={valueInDiffForm(inputState, "email")}
              onValueChange={(event) =>
                handleValueChanged(event, inputState, "email")
              }
              submitting={submitState === "submitting"}
            />

            <Input
              state={inputState !== "forgetPassword"}
              type="password"
              name="password"
              fullLength
              placeholder="Password"
              value={valueInDiffForm(inputState, "password")}
              onValueChange={(event) =>
                handleValueChanged(event, inputState, "password")
              }
              submitting={submitState === "submitting"}
              customErrorNotes="Your password should be more than 5 word characters"
            />

            <Input
              state={inputState === "signUp"}
              type="password"
              name="confirmed password"
              fullLength
              placeholder="Confirm password"
              value={valueInDiffForm(inputState, "confirmPassword")}
              onValueChange={(event) =>
                handleValueChanged(event, inputState, "confirmPassword")
              }
              submitting={submitState === "submitting"}
              isValid={
                !!(
                  signUp.password && signUp.password === signUp.confirmPassword
                )
              }
              customErrorNotes={"The password doesn't match above."}
            />
          </div>

          <div className="no-match-error-text">
            {(login.userName !== userName || login.password !== password) &&
            loginState === "loginFailed" ? (
              "Your username or password doesn't match."
            ) : (
              <span>&nbsp;</span>
            )}
          </div>

          <div className="checkbox-wrapper">
            <Checkbox
              state={inputState === "login"}
              label="Remember Me"
              checked={login.rememberMe}
              onChange={() =>
                setLoginFormValue({ ...login, rememberMe: !login.rememberMe })
              }
            />

            <CSSTransition
              in={inputState === "login"}
              timeout={500}
              classNames="flip"
              unmountOnExit
            >
              <div onClick={handleForgetPasswordClick}>Forget password</div>
            </CSSTransition>
          </div>

          <div className="checkbox-wrapper">
            <Checkbox
              state={inputState === "signUp"}
              name="agreeterms"
              label="I agree with terms and conditions"
              checked={signUp.agreeTerms}
              submitting={submitState === "submitting"}
              onChange={() => {
                setSignUpFormValue({
                  ...signUp,
                  agreeTerms: !signUp.agreeTerms,
                });
              }}
              animationState={animationState}
            />
          </div>

          <div
            className={
              "button-wrapper" +
              (inputState !== "login" ? " button-wrapper-sign-up" : "")
            }
          >
            <Button
              // Login button should only show in login form
              state={inputState === "login"}
              contained
              onClick={handleLoginBtn}
            >
              Login
            </Button>

            <Button
              // SignUp button should not show in forgetPassword form
              state={inputState !== "forgetPassword"}
              contained={inputState === "signUp"}
              onClick={handleSignUpBtn}
            >
              Sign up
            </Button>

            <Button
              // forgetPassword button should only show in forgetPassword form
              state={inputState === "forgetPassword"}
              contained
              onClick={handleSendEmailBtn}
            >
              Send
            </Button>
          </div>

          <div
            className="typography-wrapper"
            onClick={haveAccountAndSwitchBackToLogin}
          >
            <CSSTransition
              in={inputState === "signUp"}
              timeout={500}
              classNames="flip"
              unmountOnExit
            >
              <p>Already have an account? Sign in</p>
            </CSSTransition>
          </div>

          <div className="typography-wrapper" onClick={backToLogin}>
            <CSSTransition
              in={inputState === "forgetPassword"}
              timeout={500}
              classNames="flip"
              unmountOnExit
            >
              <p>Back to Sign in Page</p>
            </CSSTransition>
          </div>
        </div>

        <footer className="footer">Term of use. Privacy policy</footer>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  userName: state.getIn(["account", "user", "userName"]),
  password: state.getIn(["account", "user", "password"]),
  error: state.getIn(["account", "error"]),
});

const mapDispatch = (dispatch) => ({
  signUpNewUser(signUpData, setInputState, setSubmitState) {
    dispatch(
      actionCreators.signUpNewUser(signUpData, setInputState, setSubmitState)
    );
  },
});

export default connect(mapState, mapDispatch)(AccountPage);
