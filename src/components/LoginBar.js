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
		   alignSelf: 'flex-start',
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
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color={Colors.White}
						aria-label="menu"
						sx={{ mr: '72.5vw' }}
					>
						<MenuIcon />
						Greddiit
					</IconButton>
					<Button color="inherit">
						Login
					</Button>
					<Button color="inherit">
						SignUp
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	</div>
  )
}

export default LoginBar