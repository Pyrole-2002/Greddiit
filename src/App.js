import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login.js'
import { darkTheme } from './components/Colors.js'

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />

				<Login />
				
			</ThemeProvider>
		</div>
	)
}

export default App