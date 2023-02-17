import React from 'react'
import { Colors } from "../../components/Colors"
import Icon from "../../assets/greddit_logo_final_upscaled.png"
import Logo from "../../assets/greddit_ph_trans.jpg"
import ToggleButton from "@mui/material/ToggleButton"

function LoginBar(props) {
	const [selected, setSelected] = React.useState(true)

	const handleLoginChange = (event) => {
		if (selected === false) {
			setSelected(true)
			props.handleTabChange("login")
		}
	}
	const handleRegisterChange = (event) => {
		if (selected === true) {
			setSelected(false)
			props.handleTabChange("register")
		}
	}

	return (
		<div
			style={{
				backgroundColor: Colors.Black,
				width: '100%',
				height: '80px',
				boxShadow: `0px 0px 10px ${Colors.Orange}`,
				display: 'flex',
				alignItems: "center",
		}}>
			<img src={Icon} alt="Icon"
				style={{
					width: "81px",
					height: "65px",
					margin: 'auto 5px auto 15px',
			}}/>
			<img src={Logo} alt="Logo"
				style={{
					width: '200px',
					height: '85px',
					margin: '0 5px 0 5px',
			}}/>
			<div
				style={{
					width: "800%",
			}}/>
			<ToggleButton
				value="login"
				selected={selected}
				onChange={handleLoginChange}
				sx={{
					fontSize: "25px",
					borderRadius: "500px",
					height: "70%",
					width: "70%",
				}}
			>
				Login
			</ToggleButton>
			<div style={{
				width: "400px",
			}}/>
			<ToggleButton
				value="register"
				selected={!selected}
				onChange={handleRegisterChange}
				sx={{
					fontSize: "25px",
					borderRadius: "500px",
					height: "70%",
					width: "70%",
				}}
			>
				Register
			</ToggleButton>
			<div style={{
				width: "500px",
			}}/>
		</div>
	)
}

export default LoginBar