import React, { useState } from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";

import { encryption } from "../../Utils/crypt";
import apis from "../../api/apiConfig";
import validationSchemaRegister from "../Utils/validationSchemaRegister";
import { Link } from "react-router-dom";

const Register = () => {
  // const classes = useStyles();

  const handleSubmit = async (values) => {
    try {
      const encryptedMail = encryption(values.email);
      const encryptedPass = encryption(values.password);
      const encryptedCPass = encryption(values.confirmationPassword);
      const data = {
        userMail: encryptedMail,
        password: encryptedPass,
        confirmationPassword: encryptedCPass,
      };
      const resp = await apis.postRegister(data);
      if (resp.status === 200) {
        toast.success("Log in correcto");
      }
    } catch (error) {
      toast.error(error.response.data);
      console.log(error.response.data);
    }
  };

  const initialValues = {
    email: "",
    password: "",
    confirmationPassword: "",
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
        Crea tu cuenta
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaRegister}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="confirmationPassword"
                  fullWidth
                  onChange={handleChange}
                  value={values.confirmationPassword}
                  label="Confirma tu contraseña"
                  helperText={errors.confirmationPassword}
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  style={{ textTransform: "none", marginBottom: "20px" }}
                >
                  Enviar
                </Button>
                <Paper style={{ display: 'flex', textAlign: "center", flexDirection:'column'}} >
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "10px",
                      textAlign: "center",
                      paddingTop: '2%',
                    }}
                  >
                    Ya estas registardo?
                  </div>
                  <Link
                    to={"/"}
                    style={{
                      paddingTop: '2%',
                      paddingBottom: '3%',
                      color: "#051675",
                      fontSize: "11px",
                      fontFamily: "Roboto",
                    }}
                  >
                    Ingresa a tu cuenta aqui
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

export default Register;
