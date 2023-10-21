'use client'
import { continueWithGoogle, continueWithFacebook } from '@/utils'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Spinner } from '@/components/common'
import { useRegisterMutation } from '@/reduxx/features/authApiSlice'
import { toast } from 'react-toastify'
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SocialButtons } from '@/components/common'

const defaultTheme = createTheme()

export default function SignUp() {
	const router = useRouter()
	const [register, { isLoading }] = useRegisterMutation()

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		re_password: '',
	})

	const { first_name, last_name, email, password, re_password } = formData

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		register({ first_name, last_name, email, password, re_password })
			.unwrap()
			.then(() => {
				toast.success('please check email to verify account')
				router.push('/auth/login')
			})
			.catch(() => {
				toast.error('failed to register account')
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
						Sign up
					</Typography>
					<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='given-name'
									name='first_name'
									onChange={handleChange}
									value={first_name}
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='last_name'
									onChange={handleChange}
									value={last_name}
									autoComplete='family-name'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									onChange={handleChange}
									value={email}
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									onChange={handleChange}
									value={password}
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='re_password'
									onChange={handleChange}
									value={re_password}
									label='Confirm Password'
									type='password'
									id='re_password'
									autoComplete='new-password'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value='allowExtraEmails' color='primary' />}
									label='I want to receive inspiration, marketing promotions and updates via email.'
								/>
							</Grid>
						</Grid>
						{/* <SocialButtons /> */}
						<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							{isLoading ? <Spinner sm /> : 'Sign Up'}
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href='/auth/login' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}
