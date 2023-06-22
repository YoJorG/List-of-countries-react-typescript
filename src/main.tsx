import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import CountriesBoard, { loader as loaderCountries } from './routers/CountriesBoard.tsx'
import CountryBoard, { loader as loaderCountry } from './routers/CountryBoard.tsx'
import ErrorPage from './routers/errorPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,

		children: [
			{ errorElement: <ErrorPage /> },
			{
				index: true,
				element: <CountriesBoard />,
				loader: loaderCountries,
			},
			{
				path: 'countries/:country',
				element: <CountryBoard />,
				loader: loaderCountry,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
