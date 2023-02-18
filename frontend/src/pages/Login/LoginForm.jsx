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

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
			password: data.get('password')
		})
		if ((data.get('email') === "admin") && (data.get('password') === "admin")) {
			if (data.get('remember') === true) {
			}
			localStorage.setItem('email', data.get('email'))
			navigate('/profile')
		}
	}

	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}
	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

  	return (
		<Container component="main">
			<Box
				sx={{
					marginTop: 25,
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
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={handleEmailChange}
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
						disabled={email ==="" || password ===""}
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