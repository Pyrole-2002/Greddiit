import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import authReducer from "redux/index"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistGate } from "redux-persist/integration/react"
import App from 'App'
import 'index.css'

const persistConfig = {
	key: "root",
	storage,
	version: 1,
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [
				FLUSH,
				REHYDRATE,
				PAUSE,
				PERSIST,
				PURGE,
				REGISTER,
			],
		},
	}),
})

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Router forceRefresh={true}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistStore(store)}>
					<App />
				</PersistGate>
			</Provider>
		</Router>
		<ToastContainer />
	</React.StrictMode>
)