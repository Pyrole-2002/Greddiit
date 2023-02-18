import React from 'react'
import {
	useNavigate,
} from "react-router-dom"
import Box from "@mui/material/Box"
import { Colors } from "../../components/Colors"
import LoginBar from "pages/Login/LoginBar"
import LoginForm from "pages/Login/LoginForm"
import RegisterForm from "pages/Login/RegisterForm"
import Loader from "components/Loader"

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
					boxShadow: `5px 5px 20px ${Colors.Orange}`,
					overflow: "auto",
				}}>
					{selectedTab === "login" ? <LoginForm /> : <RegisterForm />}
				</Box>
			</div>
		</div>
	)
}

export default Login