import React from 'react'
import ToggleButton from "@mui/material/ToggleButton"

function TogButton(props) {
	const [selected, setSelected] = React.useState(false);
	return (
		<div>
			<ToggleButton
				value="check"
				selected={selected}
				onChange={() => {
					setSelected(!selected)
				}}
			>
				{props.TextInButton}
			</ToggleButton>
		</div>
	)   
}

export default TogButton