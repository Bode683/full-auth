import { Box, Typography } from '@mui/material'
import ToggleDarkMode from './ToggleDarkMode'
export default function Footer() {
	return (
		<Box
			sx={{ bgcolor: 'grey.100', position: 'fixed', bottom: 0, width: '100%' }}
		>
			<Box
				sx={{
					p: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant='caption' color='text.secondary'>
					&copy; 2023 Full Auth, Inc. All rights reserved.
				</Typography>
			</Box>
			{/* <ToggleDarkMode /> */}
		</Box>
	)
}
