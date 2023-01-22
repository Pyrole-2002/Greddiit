import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './components/Login'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

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