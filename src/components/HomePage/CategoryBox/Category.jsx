import React from "react";
import Container from "@material-ui/core/Container";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   work: {
//     paddingTop: "20px",
//   },
// });

function Category() {
  // const classes = useStyles();
  return (
    <Container className="catItem">
      <Grid container spacing={1} className="catItemGrid">
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
        <Grid item xs={3} sm={2} style={{ paddingBottom: "30px" }}>
          <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Category;
