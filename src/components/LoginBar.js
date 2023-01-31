import React from 'react'
import { Colors } from "./Colors.js"
import Logo from "../assets/greddit_ph_trans.jpg"
import TogButtonGrp from './TogButtonGrp.js'

function LoginBar(props) {
  return (
	<div
		style={{
			backgroundColor: Colors.Midnight,
			width: '87vw',
			height: '80px',
			borderRadius: '75px',
			boxShadow: `5px 5px 5px ${Colors.Midnight}`,
			display: 'flex',
			position: 'relative',
			top: '0.1vw',
			left: '2vw',
		}}
	>
		<img src={Logo} alt="Greddiit"
			style={{
				width: '200px',
				height: '85px',
				margin: '0 5px 0 5px',
			}}
		/>
		<div
			style={{
				flex: 1,
			}}
		/>
		<div>
			<TogButtonGrp handleTabChange={props.handleTabChange} texts={['Login', 'Sign Up']}/>
		</div>
	</div>
  )
}

export default LoginBar