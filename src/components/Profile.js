import React from 'react'
import { Colors } from './Colors.js'
import Icon from '../assets/greddit_logo_final_upscaled.png'
import Logo from '../assets/greddit_ph_trans.jpg'
import DefaultPfp from './DefaultPfp.js'

function Profile() {
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
					height: '4vw',
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
			</div>
			<div
				style={{
					display: 'flex',
                    flexDirection: 'column',
				}}
			>
				<DefaultPfp string="Admin Admin"/>
			</div>
		</div>
	)
}

export default Profile