import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import "./SectionModal.styles.scss";
const useStyles = makeStyles(signupPageStyle);

export default function SectionModal() {
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardSignup}>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={10} md={5}>
                  <header className={classes.textCenter}>
                    <h3 className={classes.cardTitle}>Se connecter</h3>
                  </header>
                  <section id="auth-sign-in">
                    <main>
                      <Button color="linkedin" className="sign-in-button">
                        <i className="fab fa-linkedin" /> Connection avec
                        Linkedin
                      </Button>
                      <Button color="github" className="sign-in-button">
                        <i className="fab fa-github" /> Connection avec Github
                      </Button>
                      <Button color="google" className="sign-in-button">
                        <i className="fab fa-google" /> Connection avec Google
                      </Button>
                    </main>
                  </section>
                </GridItem>

                <GridItem xs={12} sm={5} md={5}>
                  <header className={classes.textCenter}>
                    <h3 className={classes.cardTitle}>S&apos;inscrire</h3>
                  </header>
                  <form className={classes.form}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "First Name...",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email...",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Icon className={classes.inputAdornmentIcon}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        placeholder: "Password...",
                      }}
                    />
                    <FormControlLabel
                      classes={{
                        label: classes.label,
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                          checked={checked.indexOf(1) !== -1 ? true : false}
                        />
                      }
                      label={
                        <span>
                          I agree to the{" "}
                          <a href="#pablo" className={classes.link}>
                            terms and conditions
                          </a>
                          .
                        </span>
                      }
                    />
                    <footer className={classes.textCenter}>
                      <Button round color="celadonGreen">
                        S&apos;inscrire
                      </Button>
                    </footer>
                  </form>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
