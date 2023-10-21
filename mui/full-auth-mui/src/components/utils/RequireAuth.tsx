'use client'

import { redirect } from 'next/navigation'
import { useAppSelector } from '@/reduxx/hooks'
import { Spinner } from '@/components/common'
import { Box } from '@mui/material'
interface Props {
	children: React.ReactNode
}

export default function RequireAuth({ children }: Props) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth)

	if (isLoading) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: 8,
					marginBottom: 8,
				}}
			>
				<Spinner lg />
			</Box>
		)
	}

	if (!isAuthenticated) {
		redirect('/auth/login')
	}

	return <>{children}</>
}
