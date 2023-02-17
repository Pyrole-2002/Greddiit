import React from 'react'
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function Loader() {
	return (
		<div
			style={{
				display: 'flex',
                justifyContent: 'center',
				alignItems: 'center',
				position: 'fixed',
				top: '50%',
				left: '50%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				<CircularProgress size={100}/>
			</Box>
		</div>
	)
}

export default Loader