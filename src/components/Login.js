import './Style.css'
import Icon from '../assets/greddit_logo_final_upscaled.png'
import { Colors } from './Colors.js'
import React from 'react'
import Box from '@mui/material/Box'
import LoginBar from './LoginBar.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import { useNavigate } from "react-router-dom"

function Login() {
	const navigate = useNavigate()

	React.useEffect(() => {
		if (localStorage.getItem('email') === 'admin') {
			navigate('/profile')
		}
	})

	const [selectedTab, setSelectedTab] = React.useState("Login")

	const handleTabChange = (newTab) => {
		setSelectedTab(newTab)
	}
	
  	return (
		<div style={{
				margin: '5vh 0 5vh 0',
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
		>
			<Box 
				sx={{
					width: '92vw',
					height: '90vh',
					backgroundColor: Colors.Orange,
					'&:hover': {
						backgroundColor: Colors.DarkGrey,
					},
					borderRadius: '75px',
					transition: 'background-color 0.5s ease-in-out'
				}}
				style={{
					display: 'flex',
					border: `5px solid ${Colors.Orange}`,
					flexDirection: 'column',
				}}
				>
				<LoginBar handleTabChange={handleTabChange}/>

				<div
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						overflow: 'scroll',
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
					{selectedTab === "Login" ? <LoginForm handleTabChange={handleTabChange}/> : <SignUpForm handleTabChange={handleTabChange}/>}
				</div>
			</Box>
		</div>
	)
}

export default Login