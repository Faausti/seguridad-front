import React , {useState} from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";

// import useStyles from "./style";
import { Form, Formik } from "formik";
import validationSchemaLogin from "../Utils/validationSchemaLogin";
import { encryption } from "../../Utils/crypt";
import apis from "../../api/apiConfig";

const LogIn = () => {
  // const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = async (values) => {
    try{ const encryptedMail = encryption(values.email);
    const encryptedPass = encryption(values.password);
    const data = { userMail: encryptedMail, password: encryptedPass };
    const resp =  await apis.postLogin(data);
    if (resp.status === 200){
      //Navegar a pantalla loggeado
      }
    } catch (error) {
      console.log(error);
  };}

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "45%",
        margin: "auto",
        flexDirection: "column",
        marginTop: "10%",
        padding: "2%",
      }}
    >
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "30px",
          marginBottom: "3%",
          marginTop: "3%",
          fontWeight: "600",
        }}
      >
        Log in
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaLogin}
      >
        {({ values, handleChange, errors }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ justifyContent: "center" }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  label="Email"
                  helperText={errors.email}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="password"
                  fullWidth
                  onChange={handleChange}
                  value={values.password}
                  label="Password"
                  helperText={errors.password}
                  type="password"
                  required
                />
              </Grid>
              <Button type="submit" fullWidth style={{ margin: "2%" }}>
                Send
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

  export default LogIn;
