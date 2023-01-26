import React from "react"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"

function stringToColor(string) {
    let hash = 0
    let i
    for (i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#"
    for (i = 0; i < 3; i++) {
        const value = (hash >> (i*8)) & 0xff
        color += `00${value.toString(16)}`.slice(-2)
    }
    return color
}

function stringAvatar(name) {
    let initials = ""
    if ((name.indexOf(" ") !== -1) && (name[(name.length) - 1] !== " ")) {
        initials = `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
    }
    else {
        initials = name[0]
    }
    return {
        sx: {
            backgroundColor: stringToColor(name),
        },
        children: initials,
    }
}

function DefaultPfp(props) {
	return (
        <Stack direction="row" spacing={2}>
            <Avatar
                {...stringAvatar(props.string)}
				style={{
					width: props.size,
                    height: props.size,
					fontSize: props.size / 2.75,
				}}
            />
        </Stack>
    )
}

export default DefaultPfp