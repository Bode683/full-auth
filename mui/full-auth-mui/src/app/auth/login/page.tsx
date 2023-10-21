'use client'

// import Link from 'next/link';
import * as React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components/common'
import { useAppDispatch } from '@/reduxx/hooks'
import { useLoginMutation } from '@/reduxx/features/authApiSlice'
import { setAuth } from '@/reduxx/features/authSlice'
import { toast } from 'react-toastify'
import { LoginForm } from '@/components/forms'
import { SocialButtons } from '@/components/common'
import type { Metadata } from 'next'

import { ImGoogle, ImFacebook } from 'react-icons/im'
import { SocialButton } from '@/components/common'
import { continueWithGoogle, continueWithFacebook } from '@/utils'

import {
	Box,
	TextField,
	FormControlLabel,
	Button,
	Grid,
	Link,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Checkbox from '@mui/material/Checkbox'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const metadata: Metadata = {
	title: 'Full Auth | Login',
	description: 'Full Auth login page',
}

const defaultTheme = createTheme()

export default function SignIn() {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [login, { isLoading }] = useLoginMutation()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		login({ email, password })
			.unwrap()
			.then(() => {
				dispatch(setAuth())
				toast.success('logged in successfully')
				router.push('/dashboard')
			})
			.catch(() => {
				toast.error('failed to login')
			})
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							onChange={handleChange}
							value={email}
							autoComplete='email'
							sx={{ padding: '10px' }}
						/>

						<TextField
							required
							fullWidth
							name='password'
							onChange={handleChange}
							value={password}
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							sx={{ padding: '10px' }}
						/>

						{/* <SocialButtons /> */}

						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							{isLoading ? <Spinner sm /> : 'Sign In'}
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href='/password-reset' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='/auth/register' variant='body2'>
									Don&apos;t have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}
