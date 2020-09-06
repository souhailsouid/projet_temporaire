/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// sections for this page
import SectionDescription from "views/PresentationPage/Sections/Section/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/Section/SectionComponents.js";
import SectionCards from "views/PresentationPage/Sections/Section/SectionCards.js";
import SectionContent from "views/PresentationPage/Sections/Section/SectionContent.js";
import SectionSections from "views/PresentationPage/Sections/Section/SectionSections.js";
import SectionExamples from "views/PresentationPage/Sections/Section/SectionExamples.js";
import SectionFreeDemo from "views/PresentationPage/Sections/Section/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/Section/SectionOverview.js";
import SectionCalendar from "views/PresentationPage/Sections/Section/SectionCalendar.js"
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function SectionsCompiled() {

  const classes = useStyles();

  return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCalendar />
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
  );
}
