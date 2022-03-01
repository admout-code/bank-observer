import React from "react";
import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../services/login";
import { useQueryClient } from "react-query";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../components/app-container/AppContext";

interface Inputs {
    email: string;
    password: string;
}

function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<Inputs>();
    const queryClient = useQueryClient();
    const { user } = React.useContext(AppContext);

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        queryClient.setQueryData("user", data);
        console.log("submit");
    };

    if (user) return <Navigate to="/" />;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography mb={3} variant="h5" textAlign="center">
                        Register
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }} item xs={12}>
                            <TextField
                                {...register("email", { required: "required" })}
                                fullWidth
                                type="email"
                                id="email"
                                label="Email"
                            />
                            {errors.email && (
                                <Typography variant="caption" color="error">
                                    *Email is required
                                </Typography>
                            )}
                        </Grid>
                        <Grid sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }} item xs={12}>
                            <TextField
                                {...register("password", { required: true })}
                                type="password"
                                fullWidth
                                id="password"
                                label="Password"
                            />
                            {errors.password && (
                                <Typography variant="caption" color="error">
                                    *Password is required
                                </Typography>
                            )}
                        </Grid>
                        <Grid
                            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            item
                            xs={12}
                        >
                            <Button type="submit" variant="contained">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </form>
    );
}

export default Login;
