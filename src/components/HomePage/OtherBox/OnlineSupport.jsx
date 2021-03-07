import React from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Grid from "@material-ui/core/Grid";

function OnlineSupport() {
  return (
    <div className="firstHeading" style={{ marginBottom: "50px" }}>
      <h1 style={{ paddingBottom: "30px" }}>
        <span style={{ color: "#0066FF" }}>LARGEST HOME</span>
        <span style={{ color: "#000000" }}> SERVICE PROVIDER</span>
      </h1>
      <div className="blueAndYellow">
        <Grid container>
          <Grid item xs={6} className="blueBack whiteText">
            <h1 style={{ padding: "20px" }}>
              <AccessAlarmIcon style={{ fontSize: 60 }} /> ONLINE SUPPORT
            </h1>
          </Grid>
          <Grid item xs={6} className="yellowBack">
            <h1 style={{ padding: "20px" }}>
              <AccessAlarmIcon style={{ fontSize: 60 }} />
              <span style={{ padding: "50px" }}>9962562562</span>
            </h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default OnlineSupport;
