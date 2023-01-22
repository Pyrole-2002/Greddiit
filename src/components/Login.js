import './Style.css'
import Icon from '../assets/greddit_logo_final_upscaled.png'
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
				height: '90vh',
				backgroundColor: Colors.Orange,
				'&:hover': {
					backgroundColor: Colors.DarkGrey,
				},
				borderRadius: '75px',
			}}
			style={{
				display: 'flex',
				border: `5px solid ${Colors.Orange}`,
				flexDirection: 'column',
				// alignItems: 'center',
			}}
			>
			<LoginBar />

			<div
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
                    alignItems: 'center',
					// backgroundColor: Colors.Blue,
				}}	
			>
				<img
					src={Icon}
					alt={"Greddiit Logo"}
					width="420vw"
					style={{
						display: 'flex',
						alignSelf: 'center',
					}}
				/>
				{/* Debug */}
				<div style={{ backgroundColor:`${Colors.Cyan}`, width: 500, height: 500 }}></div>
			</div>
		</Box>
	</div>
  )
}

export default Login