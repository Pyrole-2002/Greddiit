import React from 'react'
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import { darkTheme, Colors } from "./Colors.js"
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

    const [firstname, setFirstName] = React.useState("")
    const [lastname, setLastName] = React.useState("")
	const [age, setAge] = React.useState("")
	const [phone, setPhone] = React.useState("")
	const [username, setUsername] = React.useState("")
	const [gender, setGender] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleFirstNameChange = (event) => {
        let firstName = event.target.value
        firstName = firstName.replace(" ", "")
        setFirstName(firstName)
    }
    const handleLastNameChange = (event) => {
        let lastName = event.target.value
        lastName = lastName.replace(" ", "")
        setLastName(lastName)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
	const handleAgeChange = (event) => {
		setAge(event.target.value)
	}
	const handleUsernameChange = (event) => {
        let userName = event.target.value
        userName = userName.replace(" ", "")
		setUsername(userName)
	}
	const handleGenderChange = (event) => {
		setGender(event.target.value)
	}

    const handlePhoneNumberInput = (event) => {
        let phoneNumber = event.target.value
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "")
        setPhone(phoneNumber)
    }

	const makeMenuItem = (value) => {
		return (
			<MenuItem value={value}>
				{value}
			</MenuItem>
		)
	}

	const ages = [...Array(101).keys()]
    const genders = [
        'Male',
        'Female',
    ]

  	return (
        <div
            className="SignUpForm"
            style={{
                position: "relative",
                top: "-4vw",
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
                            <AppRegistrationRoundedIcon />
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
                                        value={firstname}
                                        onChange={handleFirstNameChange}
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
                                        value={lastname}
                                        onChange={handleLastNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <FormControl fullWidth>
                                        <InputLabel id="age-select">
                                            Age
                                        </InputLabel>
                                        <Select
                                            labelId="age-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleAgeChange}
                                        >
                                            {ages.map(makeMenuItem)}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField
                                        autoComplete="tel"
                                        name="phone"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        type="tel"
                                        pattern="[0-9]*"
                                        value={phone}
                                        onChange={handlePhoneNumberInput}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        autoComplete="username"
                                        name="username"
                                        required
                                        fullWidth
                                        id="username"
                                        label="User Name"
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <FormControl fullWidth>
                                        <InputLabel id="gender-select">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            labelId="gender-simple-select"
                                            value={gender}
                                            label="Gender"
                                            onChange={handleGenderChange}
                                        >
                                            {genders.map(makeMenuItem)}
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
                                        value={email}
                                        onChange={handleEmailChange}
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
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                }}
                                disabled={
                                    firstname === "" ||
                                    lastname === "" ||
                                    phone === "" ||
                                    username === "" ||
                                    email === "" ||
                                    password === ""
                                }
                            >
                                Register
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default SignUpForm