import React from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  workHeading: {
    textAlign: "center",
    margin: "75px auto 60px",
  },
  root: {
    minWidth: 200,
    textAlign: "center",
    paddingTop: "50px",
    paddingBottom: 50,
  },
});

function WorksCard() {
  // const classes = useStyles();
  return (
    <Card className="workCard">
      <CardContent>
        <AccessAlarmIcon style={{ fontSize: 75 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Browse Services
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          well meaning and kindly a benevolent smile a benevolent smil
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

function HowItWorks() {
  const classe = useStyles();
  return (
    <Container>
      <h1 className={classe.workHeading}>
        <span style={{ color: "#0066ff" }}>HOW IT </span>WORKS
      </h1>
      <Grid container spacing={4}>
        <Grid item xs={3} style={{ paddingBottom: "30px" }}>
          {/* <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p> */}
          <WorksCard />
        </Grid>
        <Grid item xs={3} style={{ paddingBottom: "30px" }}>
          {/* <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p> */}
          <WorksCard />
        </Grid>
        <Grid item xs={3} style={{ paddingBottom: "30px" }}>
          <WorksCard />
        </Grid>
        <Grid item xs={3} style={{ paddingBottom: "30px" }}>
          <WorksCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HowItWorks;
