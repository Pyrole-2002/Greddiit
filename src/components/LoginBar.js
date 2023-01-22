import React from 'react'
import { Colors } from "./Colors.js";
import Logo from "../assets/greddit_ph_trans.jpg"
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import EnabledButton from './EnabledButton.js'
import DisabledButton from './DisabledButton.js'

function LoginBar() {
  return (
	<div
		style={{
			backgroundColor: Colors.Midnight,
			width: '87vw',
			height: '70px',
			borderRadius: '75px',
			boxShadow: `5px 5px 5px ${Colors.Midnight}`,
			display: 'flex',
			position: 'relative',
			top: '0.1vw',
			left: '2.2vw',
			display: 'flex',
		}}
	>
		<img src={Logo} alt="Greddiit"
		style={{
			margin: '0 5px 0 5px',
		}}
		/>
		<div
			style={{
				flex: 1,
			}}
		/>
		<div
			style={{
				position: 'relative',
				top: '0.8vw',
				left: '-3vw',
			}}
		>
			<EnabledButton TextInButton="Login"/>
		</div>
		<div
			style={{
				position: 'relative',
				top: '0.8vw',
				left: '-2vw',
			}}
		>
			<DisabledButton TextInButton="SignUp"/>
		</div>
	</div>
  )
}

export default LoginBar