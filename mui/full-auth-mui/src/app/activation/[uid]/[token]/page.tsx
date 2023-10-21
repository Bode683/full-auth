'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useActivationMutation } from '@/reduxx/features/authApiSlice'
import { toast } from 'react-toastify'
import { Container, Typography } from '@mui/material'

interface Props {
	params: {
		uid: string
		token: string
	}
}

export default function Page({ params }: Props) {
	const router = useRouter()
	const [activation] = useActivationMutation()

	useEffect(() => {
		const { uid, token } = params

		activation({ uid, token })
			.unwrap()
			.then(() => {
				toast.success('Account activated')
			})
			.catch(() => {
				toast.error('Failed to activate account')
			})
			.finally(() => {
				router.push('/auth/login')
			})
	}, [])

	return (
		<Container maxWidth='sm'>
			<div>
				<Typography variant='h5' component='h1' gutterBottom align='center'>
					Activating your account...
				</Typography>
			</div>
		</Container>
	)
}
