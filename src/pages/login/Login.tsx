import React from "react";
import { Box, Button, Checkbox, Container, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../services/login";
import { useQueryClient } from "react-query";
import { Link as RouterLink, useNavigate } from "react-router-dom";

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
    const [remember, setRemember] = React.useState(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        // const res = await login(data);
        // if (res !== "Error") {
        //     console.log(res);
        // }
        queryClient.setQueryData("user", data);
        // on success
        navigate("/");
        console.log("submit");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth="xs">
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography mb={3} variant="h5" textAlign="center">
                        Login
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
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Typography>Remember me</Typography>
                                <Checkbox checked={remember} onChange={() => setRemember((prev) => !prev)} />
                            </Box>
                            <Button type="submit" variant="contained">
                                Login
                            </Button>
                        </Grid>
                        <Grid sx={{ display: "flex" }} item xs={12}>
                            <Typography variant="caption">
                                Don't have account yet?
                                <Link ml={1} to="/register" component={RouterLink}>
                                    Register
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </form>
    );
}

export default Login;
