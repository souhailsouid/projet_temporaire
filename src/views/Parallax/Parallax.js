import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax";

// sections for this page
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function ParallaxOverView(props) {
  const { parallax, image } = props;
  const classes = useStyles();
  return (
    <Parallax image={image} className={parallax}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1>
                Souhail SOUID
                <span className={classes.proBadge}>PRO</span>
              </h1>
              <h3 className={classes.title}>Developer web full-stack.</h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
}
ParallaxOverView.propTypes = {
  parallax: PropTypes.string,
  image: PropTypes.string,
};
