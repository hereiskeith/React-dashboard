import React from "react";
import { connect } from "react-redux";
import "./style-menu.scss";
import { actionCreators } from "../store";
import {
  mdiMenu,
  mdiHomeOutline,
  mdiPoll,
  mdiAccountOutline,
  mdiBarcode,
  mdiReceipt,
  mdiEmailOutline,
  mdiForum,
  mdiCalendarMonth,
  mdiLifebuoy,
  mdiCog,
} from "@mdi/js";
import Icon from "@mdi/react";

const EachPage = (props) => {
  // 'minimized' refers to the state (true or false) of
  // whether laptop menu is minimized or mobile menu is expanded
  return (
    <div
      className={
        "menu-page " +
        (props.minimized ? "" : "menu-page-mobile-minimized ") +
        (props.focus === props.title ? "menu-page-focus" : "")
      }
      onClick={props.onClick}
    >
      <div
        className={
          "menu-thick-line " +
          (props.focus === props.title ? "menu-thick-line-focus" : "")
        }
      />

      <Icon
        path={props.icon}
        title="Page Title"
        size={(1 / 1.5) * 1.2}
        horizontal
        vertical
        rotate={180}
        color={props.focus === props.title ? "#A3A0FB" : "#9998B3"}
        className="menu-page-icon"
      />

      <h5
        className={
          props.minimized
            ? "title-text-minimized title-text-mobile"
            : "title-text-mobile-minimized"
        }
      >
        <span>&nbsp;</span>
        {props.title}
      </h5>
    </div>
  );
};

const Menu = (props) => {
  const { focus, minimized, setFocus, setMinimized } = props;

  const eachPage = [
    { title: "Home", icon: mdiHomeOutline },
    { title: "Dashboard", icon: mdiPoll },
    { title: "About Me", icon: mdiAccountOutline },
    { title: "Products", icon: mdiBarcode },
    { title: "Invoices", icon: mdiReceipt },
    { title: "Mail Marketing", icon: mdiEmailOutline },
    { title: "Chat Room", icon: mdiForum },
    { title: "Calendar", icon: mdiCalendarMonth },
    { title: "Help Center", icon: mdiLifebuoy },
    { title: "Setting", icon: mdiCog },
  ];

  return (
    <div
      className={
        "menu-wrapper menu-wrapper-mobile-minimized " +
        (minimized ? "menu-wrapper-minimized menu-wrapper-mobile" : "")
      }
    >
      <div className="menu-title">
        <h4
          className={
            minimized
              ? "title-text-minimized title-text-mobile"
              : "title-text-mobile-minimized"
          }
        >
          AWESOME DASH
        </h4>

        <Icon
          path={mdiMenu}
          title="Menu Title"
          size={(1 / 1.5) * 1.5}
          horizontal
          vertical
          // rotate={90}
          color="white"
          className="menu-title-icon"
          onClick={() => setMinimized(minimized)}
        />
      </div>

      {eachPage.map((each, index) => {
        return (
          <EachPage
            key={index}
            title={each.title}
            icon={each.icon}
            onClick={() => {
              setFocus(each.title);
              setMinimized(minimized);
            }}
            focus={focus}
            minimized={minimized}
          />
        );
      })}
    </div>
  );
};

const mapState = (state) => ({
  focus: state.getIn(["mainPage", "focus"]),
  minimized: state.getIn(["mainPage", "minimized"]),
});

const mapDispatch = (dispatch) => ({
  setFocus(title) {
    dispatch(actionCreators.setFocus(title));
  },
  setMinimized(minimized) {
    dispatch(actionCreators.setMinimized(minimized));
  },
});

export default connect(mapState, mapDispatch)(Menu);
