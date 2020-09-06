/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "views/Header/Header.js";
// Sections
import SectionModal from "./Sections/SectionModal"
import SectionFooter from "./Sections/SectionFooter"
import image from "assets/img/bg7.jpg";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage() {
  const classes = useStyles();
  return (
    <div>
      <Header isPositionAbsolute />       
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <SectionModal />
        <SectionFooter />
      </div>
    </div>
  );
}
