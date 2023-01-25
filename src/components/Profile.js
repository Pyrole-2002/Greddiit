import React from 'react'
import { Colors } from './Colors.js'
import Icon from '../assets/greddit_logo_final_upscaled.png'
import Logo from '../assets/greddit_ph_trans.jpg'
import DefaultPfp from './DefaultPfp.js'
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Loader from './Loader.js'

function Profile() {
	const navigate = useNavigate()

    React.useEffect(() => {
        if (localStorage.getItem("email") !== "admin") {
            navigate("/login")
        }
    })

	const handleLogOut = () => {
		localStorage.removeItem("email")
        navigate("/login")
	}

	if (localStorage.getItem('email') !== 'admin')	{
		return (
			<Loader />
		)
	}


	return (
		<div
			style={{
				display: 'flex',
                flexDirection: 'column',
			}}
		>
			<div
				style={{
					backgroundColor: Colors.Grey,
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					height: '70px',
				}}
			>
				<img src={Icon} alt="Icon"
					height='60vw'
					style={{
						display: 'flex',
						alignSelf: 'center',
						margin: 'auto 0 auto 1vw'
					}}
				/>
				<img src={Logo} alt="Logo"
					width='150vw'
					style={{
						display: 'flex',
						alignSelf: 'center',
						margin: 'auto 0 auto 0.5vw',
					}}
				/>
				<div
					style={{
						flex: 1,
					}}
				/>
				<Button
					variant="contained"
					onClick={handleLogOut}
					style={{
						fontSize: '16px',
						height: '55px',
						margin: 'auto 0 auto 0',
						backgroundColor: Colors.LightRed,
						position: 'relative',
						left: '-5px',
					}}
				>
					Log Out
				</Button>
			</div>
			<div
				style={{
					display: 'flex',
                    flexDirection: 'column',
					backgroundColor: Colors.CherryRed,
				}}
			>
				<DefaultPfp string="Admin Admin"/>
			</div>
		</div>
	)
}

export default Profile