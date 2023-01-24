import React from 'react'
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import { darkTheme, Colors } from "./Colors.js"
import LoginRoundedIcon from "@mui/icons-material/LoginRounded"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"

function SignUpForm() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
	}

	const [age, setAge] = React.useState("")

	const handleAgeChange = (event) => {
		setAge(event.target.value)
	}

	const makeMenuItem = (value) => {
		return (
			<MenuItem value={value}>
				{value}
			</MenuItem>
		)
	}

	const ages = [...Array(101).keys()]

  	return (
        <div
            className="SignUpForm"
            style={{
                position: "relative",
                top: "-5vw",
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            sx={{
                                m: 1,
                                backgroundColor: "secondary.main",
                            }}
                        >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            SIGN UP
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="family-name"
                                        name="lastName"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="age-select">
                                            Age
                                        </InputLabel>
                                        <Select
                                            labelId="age-simple-select"
                                            id="simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleAgeChange}
                                        >
											{ages.map(makeMenuItem)}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="email"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="new-password"
                                        name="password"
                                        required
                                        fullWidth
                                        id="password"
                                        label="Password"
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
        							<FormControlLabel
        								control={<Checkbox value="allowExtraEmails" color="primary" />}
        								label="I want to receive inspiration, marketing promotions and updates via email."
        							/>
        						</Grid> */}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                }}
                            >
                                Register
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span>
                                                Already Have an Account? Login
                                            </span>
                                            <LoginRoundedIcon />
                                        </div>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default SignUpForm