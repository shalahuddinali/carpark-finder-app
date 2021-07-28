import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import coeInfo from "../coeInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    width: 300,
    height: 200,
    justifyContent: "center",
  },
  itemContent: {
    justifyContent: "center",
    backgroundColor: "#a9923f",
    height: "30%",
    alignItems: "center",
  },
  cat: {
    textAlign: "center",
  },
  desc: {
    textAlign: "center",
  },

  premText: {
    textAlign: "center",
  },
  prem: {
    justifyContent: "center",
    height: "65%",
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    margin: "5px 30px 0 0",
  },
  icon: {
    fontSize: 60,
  },
}));

const CoeInfo = () => {
  const classes = useStyles();
  const [coe, setCoe] = useState([]);

  useEffect(() => {
    setCoe(coeInfo);
  }, []);
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      xs={3}
      sm={6}
      md={9}
      lg={12}
    >
      {coe.map((item, index) => (
        <Grid item key={index}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container className={classes.itemContent}>
              <Grid item>
                <Typography className={classes.cat} variant="h6">
                  {item.category}
                  <Typography variant="subtitle2" className={classes.desc}>
                    ({item.descriptions})
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.prem}>
              <Grid item className={classes.iconContainer}>
                {item.premium.current > item.premium.previous ? (
                  <TrendingUpIcon color="secondary" className={classes.icon} />
                ) : (
                  <TrendingDownIcon style={{ color: "green" }} />
                )}
              </Grid>
              <Grid item>
                <Typography className={classes.premText} variant="h5">
                  ${item.premium.current}
                </Typography>
                <Typography variant="subtitle2">(Quota Premium)</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CoeInfo;