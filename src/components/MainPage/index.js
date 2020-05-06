import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Dashboard from "../Dashboard/index";
import AboutMe from "../AboutMe";

const MainPage = (props) => {
  // 'minimized' refers to the state of whether laptop menu is minimized or mobile menu is expanded
  const { focus, minimized } = props;
  return (
    <div className="external-wrapper">
      <Menu />
      <Profile />
      <div
        className={
          "section-wrapper " + (minimized ? "section-wrapper-expand" : "")
        }
      >
        {focus !== "About Me" ? <Dashboard /> : <AboutMe />}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  focus: state.getIn(["mainPage", "focus"]),
  minimized: state.getIn(["mainPage", "minimized"]),
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(MainPage);
