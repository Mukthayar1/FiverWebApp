import React from 'react'
import Button from "@material-ui/core/Button";
import Header from "../../../Components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import { Formik, Form } from "formik";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../util/Contex/useAuth';
import { AddJobImage } from '../../../store/action/AddData';
import Office from '../../assets/images/Office1.jpg';
import { positions } from '@mui/system';
import { black } from '@tailwindcss/postcss7-compat/colors';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function AddJobs() {

  const classes = useStyles();
  const navigation = useNavigate();
  let { auth } = useAuth()


  const [imageurl, Setimageurl] = React.useState();
  const [jobtype, Setjobtype] = React.useState('New Project');
  const [values, setValues] = React.useState({
    JobTittle: '',
    JobBudget: '',
    Link: '',
    JobDescribe: '',
  });

  let name;
  let value;
  const getUserDate = (event) => {
    event.preventDefault()
    name = event.target.name;
    value = event.target.value;
    setValues({ ...values, [name]: value });
  }

  const RestForm = () => {
    setValues({
      JobTittle: '',
      JobBudget: '',
      Link: '',
      JobDescribe: '',
    })
  }


  return (
    <>
      <Header />
      <div style={{ background: `url(${Office})`, height: 668, opacity: 0.9, backgroundSize: "cover", width: "100%", margin: "auto" }}>
        <div className="flex" style={{ marginLeft: 20, height: 150, }}>

          {/* <img
          onClick={() => navigation(-1)}
          loading="lazy"
          className="text-3xl my-20 font-bold rounded float-reght"
          src='https://firebasestorage.googleapis.com/v0/b/clancers-inc.appspot.com/o/images%2Fback.png?alt=media&token=6844150b-43c0-43d5-b8f0-80a752d90662' style={{ height: 40, width: 40, marginRight: 40 }} />
        <h2 className="text-3xl my-20 font-bold">Add Job</h2> */}
        </div>


        <Container style={{ backgroundColor: 'white', opacity: 0.9, marginTop: -50, width: 540 }} component="main" maxWidth="sm">
          <CssBaseline />

          <div className={classes.paper}>
            <h2 style={{ color: "black", padding: 10, fontSize: "2.5em", letterSpacing: "2px" }}>Create Job</h2>
            <Grid style={{ marginTop: -30 }} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  variant="outlined"
                  height="100px"
                  fullWidth
                  id="JobTittle"
                  name={'JobTittle'}
                  label="Job Title"
                  onChange={getUserDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={getUserDate}
                  id="JobBudget"
                  label="Job Budget"
                  name="JobBudget"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="standard-adornment-amount">Job Type</InputLabel>
                <FormControlLabel
                  value="New Project"
                  control={<Checkbox checked={jobtype == "New Project" ? true : false} onChange={() => {
                    Setjobtype("New Project")
                  }} />}
                  label="New Project"
                // labelPlacement="New Project"
                />
                <FormControlLabel
                  value="Support"
                  control={<Checkbox checked={jobtype == "Support" ? true : false} onChange={() => {
                    Setjobtype("Support")
                  }} />}
                  label="Support"
                // labelPlacement="Support"
                />
                <FormControlLabel
                  value="New Module"
                  control={<Checkbox checked={jobtype == "New Module" ? true : false} onChange={() => {
                    Setjobtype("New Module")
                  }} />}
                  label="New Module"
                // labelPlacement="New Module"
                />
                <FormControlLabel
                  value="Hiring"
                  control={<Checkbox checked={jobtype == "Hiring" ? true : false} onChange={() => {
                    Setjobtype("Hiring")
                  }} />}
                  label="Hiring"
                // labelPlacement="Hiring"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="Link"
                  label="Link"
                  type="text"
                  id="Link"
                  onChange={getUserDate}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type='file'
                  style={{ marginTop: 10 }}
                  onChange={(e) => Setimageurl(e.target.files[0])} accept="image/png, image/gif, image/jpeg"
                />
              </Grid>

              <Grid item xs={12}>

                <TextField
                  id="filled-multiline-static"
                  label="Job Describration"
                  onChange={getUserDate}
                  name="JobDescribe"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  variant="outlined"
                />
              </Grid>



            </Grid>
            <Button
              fullWidth
              onClick={() => AddJobImage(values, RestForm, imageurl, auth, jobtype)}
              variant="contained"
              color="primary"
              className={classes.submit}>
              Add Job
            </Button>
          </div>
        </Container>
      </div></>

  );
};