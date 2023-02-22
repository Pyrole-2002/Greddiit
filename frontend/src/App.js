import React from 'react'
import {
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Login from "pages/Login/Login"
import Profile from "pages/Profile/Profile"
import { darkTheme } from "components/Colors"

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Routes>
				<Route path="/" element={
					<Login />
				} />
				<Route path="/profile/:userName" element={
					<Profile />
				} />
				<Route path="/*" element={
					<Navigate to="/" />
				} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
