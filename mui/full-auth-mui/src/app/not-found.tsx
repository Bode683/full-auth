import { ArrowForwardIos } from '@mui/icons-material'
import { Box, Typography, Button, Container } from '@mui/material'

const NotFound = () => {
	return (
		<Container maxWidth='sm'>
			<Box
				sx={{
					p: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Typography variant='h5' color='primary' sx={{ mb: 2 }}>
					404
				</Typography>

				<Typography variant='h3' component='h1' gutterBottom sx={{ mb: 3 }}>
					Page not found
				</Typography>

				<Typography variant='body1' color='textSecondary' sx={{ mb: 4 }}>
					Sorry, we couldn&apos;t find the page you&apos;re looking for.
				</Typography>

				<Box>
					<Button variant='contained' color='primary' href='/' sx={{ mr: 2 }}>
						Go back home
					</Button>

					<Button color='primary' href='/' endIcon={<ArrowForwardIos />}>
						Contact support
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default NotFound
