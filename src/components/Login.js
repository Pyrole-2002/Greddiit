import './Style.css'
import Image from '../assets/greddit_logo_final_upscaled.png'
import { Colors } from './Colors.js'
import React from 'react'
import Box from '@mui/material/Box'
import LoginBar from './LoginBar.js'

function Login() {
  return (
	<div style={{
		margin: '5vh 0 5vh 0',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
	}}>

		<Box
			sx={{
				width: '92vw',
				height: '85vh',
				backgroundColor: Colors.Orange,
				'&:hover': {
					backgroundColor: Colors.DarkGrey,
				},
				borderRadius: 10,
			}}
			style={{
				display: 'flex',
                alignItems: 'stretch',
				border: `5px solid ${Colors.Orange}`,
				flexFlow: 'row wrap',
			}}
		>

			<LoginBar />

			<img
				src={Image}
				alt={"Greddiit Logo"}
				width="30%"
				style={{
					// margin: '0 3% 0 4%',
					display: 'flex',
					alignSelf: 'center',
				}}
			/>

		</Box>

	</div>
  )
}

export default Login