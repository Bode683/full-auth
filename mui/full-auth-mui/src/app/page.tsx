import React from "react";
import Link from 'next/link'
import { Box, Typography, Button, Container } from "@mui/material";

const Page = () => {
	return (
		<Container maxWidth="sm">
			<Box className="text-center">
				<Typography variant="h3" component="h1" gutterBottom>
					Full Auth Tutorial Application
				</Typography>
				<Typography variant="body1" color="textSecondary">
					This is an application meant to showcase jwt authentication with
					Next.js and Django. Credentials in this app get stored in cookies with
					the HttpOnly flag for maximum security. Styling is done using
					Tailwind.
				</Typography>
				<Box className="mt-10 flex items-center justify-center gap-x-6">
					<Button
						variant="contained"
						color="primary"
						href="/auth/login"
						size="small"
					>
						Log into your account
					</Button>
					<Link href="/auth/register">
						<Button size="small" endIcon={<span aria-hidden="true">→</span>}>
							Or create an account
						</Button>
					</Link>
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
