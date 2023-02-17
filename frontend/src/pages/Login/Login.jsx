import React from 'react'
import {
	useNavigate,
} from "react-router-dom"
import Box from "@mui/material/Box"
import Icon from "../../assets/greddit_logo_final_upscaled.png"
import { Colors } from "../../components/Colors"
import LoginBar from "./LoginBar"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import Loader from "../../components/Loader"

function Login() {
	const [selectedTab, setSelectedTab] = React.useState("login")
	const handleTabChange = (newTab) => {
		setSelectedTab(newTab)
	}

	return (
		<div style={{
			backgroundColor: Colors.DarkGrey,
			display: "flex",
			flexDirection: "column",
			overflow: "auto",
		}}>
			<LoginBar handleTabChange={handleTabChange}/>
			<div style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
			}}>
				<div style={{
					fontFamily: "Rubik Wet Paint",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: "95px",
					textAlign: "center",
					width: "70%",
					overflow: "auto",
				}}>
					A Bit Less Weird Than 4Chan
				</div>
				<Box sx={{
					marginRight: "3%",
					marginBottom: "3%",
					marginTop: "1%",
					backgroundColor: Colors.DarkGrey,
					width: "80%",
					height: "85vh",
					"&:hover": {
						backgroundColor: Colors.Black,
					},
					borderRadius: "15vw 2vw",
					transition: "background-color 0.6s linear",
					boxShadow: `5px 5px 20px ${Colors.Orange}`
				}}>
					{selectedTab === "login" ? <LoginForm /> : <RegisterForm />}
				</Box>
			</div>
		</div>
	)





	// const [selectedTab, setSelectedTab] = React.useState("Login")

	// const handleTabChange = (newTab) => {
	// 	setSelectedTab(newTab)
	// }

	// const navigate = useNavigate()

	// React.useEffect(() => {
	// 	if (localStorage.getItem('email') === 'admin') {
	// 		navigate('/profile/admin')
	// 	}
	// })
	// if (localStorage.getItem('email') === 'admin')	{
	// 	return (
	// 		<Loader />
	// 	)
	// }

	
  	// return (
	// 	<div style={{
	// 			margin: '5vh 0 5vh 0',
	// 			display: 'flex',
	// 			alignItems: 'flex-start',
	// 			justifyContent: 'center',
	// 			backgroundColor: Colors.Cyan,
	// 		}}
	// 	>
	// 		<Box 
	// 			sx={{
	// 				width: '92vw',
	// 				height: '90vh',
	// 				backgroundColor: Colors.Orange,
	// 				'&:hover': {
	// 					backgroundColor: Colors.DarkGrey,
	// 				},
	// 				borderRadius: '2%/5%',
	// 				transition: 'background-color 0.5s ease-in-out'
	// 			}}
	// 			style={{
	// 				display: 'flex',
	// 				border: `5px solid ${Colors.Orange}`,
	// 				flexDirection: 'column',
	// 			}}
	// 			>
	// 			<LoginBar handleTabChange={handleTabChange}/>

	// 			<div
	// 				style={{
	// 					flex: 1,
	// 					display: 'flex',
	// 					flexDirection: 'row',
	// 					justifyContent: 'space-around',
	// 					alignItems: 'center',
	// 					overflow: 'auto',
	// 				}}	
	// 			>
	// 				<img
	// 					src={Icon}
	// 					alt={"Greddiit Logo"}
	// 					width="30%"
	// 					style={{
	// 						display: 'flex',
	// 						alignSelf: 'center',
	// 					}}
	// 				/>
	// 				{selectedTab === "Login" ? <LoginForm handleTabChange={handleTabChange}/> : <RegisterForm handleTabChange={handleTabChange}/>}
	// 			</div>
	// 		</Box>
	// 	</div>
	// )
}

export default Login