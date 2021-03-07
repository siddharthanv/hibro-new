import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";

function WorksCard() {
  // const classes = useStyles();
  return (
    <Card className="happyCustomerCard">
      <CardContent>
        <Typography variant="h5" component="h5" gutterBottom>
          CUSTOMER NAME
        </Typography>
        <Typography variant="h6" component="h5" gutterBottom>
          Satisfied Greatly
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          gutterBottom
        >
          well meaning and kindly a benevolent smile a benevolent smile
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography variant="h6" component="h5" gutterBottom>
          Ratings and Reviews
        </Typography>
        <StarIcon style={{ color: "#fff212" }} />
        <StarIcon style={{ color: "#fff212" }} />
        <StarIcon style={{ color: "#fff212" }} />
        <StarIcon style={{ color: "#fff212" }} />
        <StarIcon />
      </CardContent>
    </Card>
  );
}

function HappyCustomers() {
  return (
    <div className="happyBox">
      <h1 className="happyText">
        <span style={{ color: "#fff" }}>OUR</span> HAPPY
        <span style={{ color: "#fff" }}> CUSTOMERS</span>
      </h1>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={3} style={{ paddingTop: "60px" }}>
            {/* <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p> */}
            <WorksCard />
          </Grid>
          <Grid item xs={3} style={{ paddingTop: "60px" }}>
            {/* <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p> */}
            <WorksCard />
          </Grid>
          <Grid item xs={3} style={{ paddingTop: "60px" }}>
            <WorksCard />
          </Grid>
          <Grid item xs={3} style={{ paddingTop: "60px" }}>
            <WorksCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HappyCustomers;
