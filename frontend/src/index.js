import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { store } from 'app/store'
import App from 'App'
import 'index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
		<ToastContainer />
	</React.StrictMode>
)