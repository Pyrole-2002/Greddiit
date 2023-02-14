import React from 'react'
import {
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
// import Register from "./pages/Register/Register"

function App() {
	return (
		<Routes>
			<Route path="/" element={
				<Login />
			} />
			<Route path="/profile/:userName" element={
				<Profile />
			} />
			{/* <Route path="/*" element={
				<Login />
			} /> */}
			<Route path="/*" element={
				<Navigate to="/" />
			} />
		</Routes>
	)
}

export default App
