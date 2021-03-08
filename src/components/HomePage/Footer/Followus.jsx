import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles({
  follow: {
    backgroundColor: "#1D1C07",
    color: "#fff",
    paddingTop: 50,
    paddingBottom: 50,
  },
  groupIcon: {
    display: "inline-block",
    textAlign: "right",
  },
  icon: {
    paddingLeft: "30px",
  },
});

function FollowUs() {
  const classes = useStyles();
  return (
    <div className={classes.follow}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <h1>FOLLOW US</h1>
          </Grid>
          <Grid className={classes.groupIcon} item xs={8}>
            <FacebookIcon className={classes.icon} style={{ fontSize: 40 }} />
            <TwitterIcon className={classes.icon} style={{ fontSize: 40 }} />
            <InstagramIcon className={classes.icon} style={{ fontSize: 40 }} />
            <YouTubeIcon className={classes.icon} style={{ fontSize: 40 }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FollowUs;
