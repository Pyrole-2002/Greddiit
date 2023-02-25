import React from 'react'
import {
	useNavigate
} from 'react-router-dom'
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Container from "@mui/material/Container"
import { Colors } from 'components/Colors.js'

function LoginForm(props) {
	const navigate = useNavigate()

	const data = {
		userName: "",
		password: "",
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const rawData = new FormData(event.currentTarget)
		data.userName = rawData.get("username")
		data.password = rawData.get("password")

		const savedUserCreds = await fetch(
			"/api/auth/login",
			{
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
			}
		)
		const loggedIn = await savedUserCreds.json()
		if (loggedIn) {
			navigate("/profile")
		}
	}

	const [username, setUsername] = React.useState("")
	const [password, setPassword] = React.useState("")

	const handleUsernameChange = (event) => {
		setUsername(event.target.value)
	}
	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

  	return (
		<Container component="main">
			<Box
				sx={{
					marginTop: "10%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar
					sx={{
						margin: 1,
						backgroundColor: Colors.Cyan,
						width: 85,
						height: 85,
					}}
				>
					<LockOutlinedIcon sx={{ fontSize: "300%" }}/>
				</Avatar>
				<div style={{
					textAlign: "center",
					fontSize: "55px",
					height: "10%",
					fontWeight: "bold",
				}}>
					LOGIN
				</div>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{
						marginTop: 10,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						height: "60%",
						width: "60%",
					}}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="User Name"
						name="username"
						autoComplete="username"
						autoFocus
						value={username}
						onChange={handleUsernameChange}
						InputProps={{
							sx: {
								fontSize: "22px"
							}
						}}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="password"
						label="Password"
						name="password"
						autoComplete="current-password"
						type="password"
						value={password}
						onChange={handlePasswordChange}
						InputProps={{
							sx: {
								fontSize: "22px"
							}
						}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						disabled={username ==="" || password ===""}
						sx={{
							mt: 3,
							mb: 2,
							fontSize: "25px",
						}}
					>
						Login
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default LoginForm