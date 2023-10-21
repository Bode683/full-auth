'use client'

import { useRetrieveUserQuery } from '@/reduxx/features/authApiSlice'
import { Listing, Spinner } from '@/components/common'
import { Box, CircularProgress, Typography, Container } from '@mui/material'
export default function Page() {
	const { data: user, isLoading, isFetching } = useRetrieveUserQuery()

	const config = [
		{
			label: 'First Name',
			value: user?.first_name,
		},
		{
			label: 'Last Name',
			value: user?.last_name,
		},
		{
			label: 'Email',
			value: user?.email,
		},
	]

	if (isLoading || isFetching) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
				<CircularProgress size={40} />
			</Box>
		)
	}

	return (
		<>
			<Container maxWidth='lg'>
				<Typography variant='h6'>Dashboard</Typography>

				<Listing config={config} />
			</Container>
		</>
	)
}
