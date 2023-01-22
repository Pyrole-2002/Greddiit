import React from 'react'
import { Colors } from "./Colors.js";
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

function LoginBar() {
  return (
	<div
		style={{
		   display: 'flex',
		}}
	>
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
			flex: 1,
			// backgroundColor: Colors.White,
			margin: '0 1vw 0 1vw',
		}}
		>
			<AppBar
				position="static"
				sx={{
					borderRadius: 10,
					width: '100%',
				}}
			>
				<Toolbar sx={{
					display: 'flex',
				}}>
					<IconButton
						size="large"
						edge="start"
						color={Colors.Orange}
						aria-label="Home"
						sx={{
							mr: 0,
							display: 'flex',
							flex: 1,
						}}
					>
						<MenuIcon />
						Greddiit
					</IconButton>
					<Button color="inherit"
						sx={{
							mr: 0,
							display: 'flex',
						}}
					>
						Login
					</Button>
					<Button color="inherit"
						sx={{
							mr: 0,
							display: 'flex',
						}}
					>
						SignUp
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	</div>
  )
}

export default LoginBar