import React from 'react'
import { Colors } from "./Colors.js"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

function TogButtonGrp({handleTabChange, texts}) {
	const [alignment, setAlignment] = React.useState(texts[0])

	const handleChange = (event, newAlignment) => {
		if (newAlignment !== null) {
			setAlignment(newAlignment)
			handleTabChange(newAlignment)
		}
    }

	const makeToggleButton = (text) => {
		return (
			<ToggleButton value={text}>{text}</ToggleButton>
		)
	}

  	return (
        <div>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
				size="large"
				style={{
					position: "relative",
					top: '0.7rem',
					left: '-3rem',
				}}
            >
				{texts.map(makeToggleButton)}
            </ToggleButtonGroup>
        </div>
    )
}

export default TogButtonGrp