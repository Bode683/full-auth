import { PasswordResetForm } from '@/components/forms';
import type { Metadata } from 'next';
import { Container, Typography, Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'Full Auth | Password Reset',
  description: 'Full Auth password reset page',
};

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center' }}>

        <Typography variant="h5" gutterBottom>
          Password Reset
        </Typography>
      </Box>

      <PasswordResetForm />

    </Container>
  );
}
