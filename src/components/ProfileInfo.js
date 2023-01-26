import React from 'react'
import { Colors } from './Colors.js'

function ProfileInfo(props) {
	return (
		<div
			style={{
				backgroundColor: Colors.DarkRed,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					fontSize: '30px',
				}}
			>
				{props.username}
			</div>
		</div>
	)
}

export default ProfileInfo