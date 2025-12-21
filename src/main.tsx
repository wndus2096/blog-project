import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'

import RootLayout from './pages/layout'
import App from './pages'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import CreateTopic from './pages/topics/create'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route element={<RootLayout />}>
						<Route index element={<App />} />
						<Route path='sign-in' element={<SignIn />} />
						<Route path='sign-up' element={<SignUp />} />
						<Route path='topics/create' element={<CreateTopic />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Toaster richColors position='top-center'/>
		</ThemeProvider>
	</StrictMode>
)
