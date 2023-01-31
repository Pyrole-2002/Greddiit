import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login.js'
import { darkTheme } from './components/Colors.js'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile.js'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					element={
						<ThemeProvider theme={darkTheme}>
							<CssBaseline />
							<Login />
						</ThemeProvider>
					}
					path='/'
				/>
				<Route
					element={
						<ThemeProvider theme={darkTheme}>
							<CssBaseline />
							<Profile />
						</ThemeProvider>
					}
					path='/user/:username'
				/>
				<Route
					element={
						<ThemeProvider theme={darkTheme}>
							<CssBaseline />
							<Login />
						</ThemeProvider>
					}
					path='/*'
				/>
			</Routes>
		</div>
	)
}

export default App