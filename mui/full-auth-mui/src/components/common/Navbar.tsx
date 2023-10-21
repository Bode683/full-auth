'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import Container from '@mui/material/Container'
import { Stack, SwipeableDrawer } from '@mui/material'
import Link from 'next/link'

import { useAppSelector, useAppDispatch } from '@/reduxx/hooks'
import { useLogoutMutation } from '@/reduxx/features/authApiSlice'
import { logout as setLogout } from '@/reduxx/features/authSlice'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()
	const dispatch = useAppDispatch()

	const router = useRouter()
	const [open, setOpen] = useState(false)

	const toggleDrawer = () => {
		setOpen(!open)
	}

	const [logout] = useLogoutMutation()

	const { isAuthenticated } = useAppSelector(state => state.auth)

	const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout())
			})
	}

	const isSelected = (path: string) => (pathname === path ? true : false)

	const authLinks = (isMobile: boolean) => (
		<>
			<Link href='/dashboard'>Dashboard</Link>
			<Button onClick={handleLogout}>Logout</Button>
		</>
	)

	const guestLinks = (isMobile: boolean) => (
		<>
			<Link href='/auth/login'>Login</Link>
			<Link href='/auth/register'>Register</Link>
		</>
	)

	return (
		<Box>
			<AppBar position='fixed' sx={{ backgroundColor: '#dfd6c8' }}>
				<Container>
					<Toolbar disableGutters>
						<IconButton
							color='inherit'
							edge='start'
							onClick={toggleDrawer}
							sx={{ mr: 2, display: { sm: 'none' }, color: '#5645A1' }}
						>
							<MenuIcon />
						</IconButton>
						<Box>
							<Button
								variant='text'
								sx={{ color: '#5645A1' }}
								onClick={() => router.push('/')}
								// startIcon={
								// 	<Avatar
								// 		alt='Remy Sharp'
								// 		src='/logo1.jpg'
								// 		sx={{
								// 			m: 1,
								// 			display: { xs: 'none', sm: 'block' },
								// 		}}
								// 	/>
								// }
							>
								Full Auth
							</Button>
						</Box>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							<Stack direction='row' spacing={2}>
								{isAuthenticated ? authLinks(false) : guestLinks(false)}
							</Stack>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<SwipeableDrawer
				sx={{ backgroundColor: '#dfd6c8', width: 250 }}
				anchor='left'
				open={open}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
			>
				<Box
					sx={{ width: 250 }}
					role='presentation'
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}
				>
					{isAuthenticated ? authLinks(true) : guestLinks(true)}
				</Box>
			</SwipeableDrawer>
		</Box>
	)
}
