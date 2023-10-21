import { RequireAuth } from '@/components/utils'
import { Box } from '@mui/material'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return <RequireAuth>{children}</RequireAuth>
}
