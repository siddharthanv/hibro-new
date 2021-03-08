import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Logo from "../../../Images/hii.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  blueBack: {
    color: "#0066FF",
  },
});

function FooterLinks() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item md={4}>
          <img src={Logo} alt="HiBRO Logo" />
          <h3>
            <LocationOnIcon />
            <span className={classes.blueBack}> Address:</span> P.No.18, 1st
            Avenue, Pallava Garden, Old Pallavaram, Chennai - 600 117.
          </h3>
          <h3>
            <PhoneIcon />
            <span className={classes.blueBack}> Mobile:</span> 9962562562
          </h3>
          <h3>
            <EmailIcon />
            <span className={classes.blueBack}> Email:</span> hibroservices.com
          </h3>
        </Grid>
        <Grid item md={3}>
          <h1>LINKS</h1>
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </Grid>
        <Grid item md={5}>
          <h1>BRANCH WORKING HOURS</h1>
          <h3>
            <span className={classes.blueBack}>Opened: </span>9.00 am to 6.00pm
            (Monday to Saturday)
          </h3>
          <h3>
            <span className={classes.blueBack}>Closed: </span>Sunday and
            National Holidays
          </h3>
          <h3>
            <span className={classes.blueBack}>
              Bookings and Orders Accepted: 24/7
            </span>
          </h3>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FooterLinks;
