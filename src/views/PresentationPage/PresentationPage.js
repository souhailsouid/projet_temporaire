/*eslint-disable*/
import React from "react";

// core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "views/Header/Header.js";
import Parallax from "views/Parallax/Parallax";
import Footer from "views/Footer/Footer.js";

// sections for this page
import SectionCompiled from "views/PresentationPage/Sections/Sections";
import SectionPricing from "views/PresentationPage/Sections/Section/SectionPricing.js";

// sections for this page
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);
export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

const classes = useStyles();
const { parallax } = classes
  return (
    <div>
      <Header />
      <Parallax image={require("assets/img/picture_2.jpeg")} parallax={parallax} />
      <SectionCompiled />
      <SectionPricing />
      <Footer />
    </div>
  );
}
