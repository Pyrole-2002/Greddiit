import React from 'react'
import Button from '@mui/material/Button'

function EnabledButton(props) {
  return (
	<div>
		<Button
			variant="contained"
		>
			{props.TextInButton}
		</Button>
	</div>
  )
}

export default EnabledButton