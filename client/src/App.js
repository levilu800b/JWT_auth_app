import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import all components */
import Username from './components/UserName/Username';
import Password from './components/Password/Password';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Reset from './components/Reset/Reset';
import Recovery from './components/Recovery/Recovery';
import PageNotFound from './components/PageNotFound/PageNotFound';

/** root routes */

const router = createBrowserRouter([
	{
		path: '/',
		element: <Username></Username>,
	},
	{
		path: '/register',
		element: <Register></Register>,
	},
	{
		path: '/password',
		element: <Password></Password>,
	},
	{
		path: '/profile',
		element: <Profile></Profile>,
	},
	{
		path: '/recovery',
		element: <Recovery></Recovery>,
	},
	{
		path: '/reset',
		element: <Reset></Reset>,
	},
	{
		path: '*',
		element: <PageNotFound></PageNotFound>,
	},
]);

export default function App() {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	);
}
