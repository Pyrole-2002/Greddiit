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
import { darkTheme, Colors } from './Colors.js'
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded"
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded"

function LoginForm() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
			password: data.get('password')
		})
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
		<div
			className="LoginForm" 
			style={{
				position: 'relative',
				top: '-5vw',
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
								margin: 1,
								backgroundColor: "secondary.main",
							}}
						>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							LOGIN
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
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
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="password"
								label="Password"
								name="password"
								autoComplete="current-password"
								value={password}
								onChange={handlePasswordChange}
							/>
							<FormControlLabel
								control={
									<Checkbox
										value="remember"
										color="primary"
									/>
								}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								disabled={email ==="" || password ===""}
							>
								Login
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										<div
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<LockResetRoundedIcon />
											<span>Forgot Password?</span>
										</div>
									</Link>
								</Grid>
								<Grid item>
									<Link href="#" variant="body2">
										<div
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<AddCircleRoundedIcon />
											<span>{"Don't Have an Account? Sign Up"}</span>
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

export default LoginForm