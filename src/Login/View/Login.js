import React from "react";
import { Button, Grid,  Paper, TextField } from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik } from "formik";

import validationSchemaLogin from "../Utils/validationSchemaLogin";
import { encryption } from "../../Utils/crypt";
import apis from "../../api/apiConfig";
import { Link } from "react-router-dom";

const LogIn = () => {
  // const classes = useStyles();

  const handleSubmit = async (values) => {
    try {
      const encryptedMail = encryption(values.email);
      const encryptedPass = encryption(values.password);
      const data = { userMail: encryptedMail, password: encryptedPass };
      const resp = await apis.postLogin(data);

      if (resp.status === 200) {
        toast.success("Log in correcto");
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

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
                  label="Contraseña"
                  helperText={errors.password}
                  type="password"
                  required
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  style={{ textTransform: "none", marginBottom: "20px" }}
                >
                  Confirmar
                </Button>
                <Paper style={{ display: 'flex', textAlign: "center", flexDirection: 'column' }}>
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "10px",
                      textAlign: "center",
                      paddingTop: '2%',
                    }}
                  >
                    Aun no estas registardo?
                  </div>
                  <Link to={'/registar'} style={{
                    paddingTop: '2%',
                    paddingBottom: '3%',
                    color: "#051675",
                    fontSize: "11px",
                    fontFamily: "Roboto",
                  }}>
                    Crea tu cuenta aqui
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default LogIn;
