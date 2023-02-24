import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded"
import Container from "@mui/material/Container"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Colors } from "components/Colors"
import Loader from "components/Loader"
import { setLogin } from "redux/index"

function RegisterForm(props) {
    const setSelectedTab = (value) => {
        props.setSelectedTab(value)
    }
    const navigate = useNavigate()
    
    const data = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        userName: "",
        email: "",
        password: "",
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        const rawData = new FormData(event.currentTarget)
        data.firstName = rawData.get("firstname")
        data.lastName = rawData.get("lastname")
        data.phoneNumber = rawData.get("phone")
        data.userName = rawData.get("username")
        data.email = rawData.get("email")
        data.password = rawData.get("password")
        console.log(data)

        if (data.phoneNumber.length !== 10) {
            toast.error("Invalid phone number")
        }

        const savedUserResponse = await fetch(
            "http://localhost:3001/auth/register",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            }
        )
        const savedUser = await savedUserResponse.json()
        if (savedUser) {
            setSelectedTab("login")
        }
    }

    const [firstname, setFirstName] = React.useState("")
    const [lastname, setLastName] = React.useState("")
	const [phone, setPhone] = React.useState("")
	const [username, setUsername] = React.useState("")
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
        setPassword(event.target.value)
    }
	const handleUsernameChange = (event) => {
        let userName = event.target.value
        userName = userName.replace(" ", "")
		setUsername(userName)
	}

    const handlePhoneNumberInput = (event) => {
        let phoneNumber = event.target.value
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "")
        setPhone(phoneNumber)
    }

  	return (
        <Container component="main">
            <Box
                sx={{
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar
                    sx={{
                        margin: 1,
                        backgroundColor: Colors.LightRed,
                        width: 85,
                        height: 85,
                    }}
                >
                    <AppRegistrationRoundedIcon sx={{ fontSize: "300%" }}/>
                </Avatar>
				<div style={{
					textAlign: "center",
					fontSize: "55px",
					height: "10%",
                    fontWeight: "bold",
				}}>
					REGISTER
				</div>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{
                        marginTop: "5%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						height: "60%",
						width: "70%",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstname"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstname}
                                onChange={handleFirstNameChange}
                                InputProps={{
                                    sx: {
                                        fontSize: "22px"
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="family-name"
                                name="lastname"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={lastname}
                                onChange={handleLastNameChange}
                                InputProps={{
                                    sx: {
                                        fontSize: "22px"
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                                InputProps={{
                                    sx: {
                                        fontSize: "22px"
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="username"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                value={username}
                                onChange={handleUsernameChange}
                                InputProps={{
                                    sx: {
                                        fontSize: "22px"
                                    }
                                }}
                            />
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
                                InputProps={{
                                    sx: {
                                        fontSize: "22px"
                                    }
                                }}
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
                                InputProps={{
                                    sx: {
                                        fontSize: "22px"
                                    }
                                }}
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
                            fontSize: "25px",
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
    )
}

export default RegisterForm