import { PasswordResetConfirmForm } from '@/components/forms';
import type { Metadata } from 'next';
import { Container, Typography, Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'Full Auth | Password Reset Confirm',
  description: 'Full Auth password reset confirm page',
};

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function Page({ params: { uid, token } }: Props) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center' }}>


        <Typography variant="h5" gutterBottom>
          Reset your password
        </Typography>
      </Box>

      <PasswordResetConfirmForm uid={uid} token={token} />

    </Container>
  );
}
