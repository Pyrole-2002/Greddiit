import React from "react"
import Box from "@mui/material/Box"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import DefaultPfp from "./DefaultPfp"

function TabPanel(props) {
	const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}

let followers = [
    'Follower1',
    'Follower2',
    'Follower3',
    'Follower4',
    'Follower5',
    'Follower6',
    'Follower7',
    'Follower8',
    'Follower9',
    'Follower10',
    'Follower11',
    'Follower12',
]
let followings = [
    'Following1',
    'Following2',
    'Following3',
    'Following4',
    'Following5',
    'Following6',
    'Following7',
    'Following8',
    'Following9',
    'Following10',
    'Following11',
    'Following12',
]

const makeUserItem = (string) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <DefaultPfp string={string} size={50}/>
            <div
                style={{
                    fontSize: "30px",
                    margin: '10px 0 10px 20px',
                }}
            >
                {string}
            </div>
        </div>
    )
}

function ProfileTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ width: "100%" }}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider"
                    }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Followers" {...a11yProps(0)} />
                        <Tab label="Following" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div
                        style={{
                            width: '400px',
                            height: '450px',
                            overflow: 'auto',
                        }}
                    >
                        {followers.map(makeUserItem)}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div
                        style={{
                            width: '400px',
                            height: '450px',
                            overflow: 'auto',
                        }}
                    >
                        {followings.map(makeUserItem)}
                    </div>
                </TabPanel>
            </Box>
        </div>
    )
}

export default ProfileTabs