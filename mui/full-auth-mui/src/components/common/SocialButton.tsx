import { Button, Grid } from '@mui/material';

interface Props {
  provider: 'google' | 'facebook';
  children: React.ReactNode;
  [rest: string]: any;
}

export default function SocialButton({ provider, children, ...rest }: Props) {
  return (
    <Grid item xs={12} sm={6}>
    <Button 
      variant="contained"
      sx={{ 
        flex: 1,
        borderRadius: 1,
        px: 2, 
        py: 1.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'white',
        bgcolor: provider === 'google' ? '#EA4335' : '#4267B2',
        '&:hover': {
          bgcolor: provider === 'google' ? '#C53224' : '#365899'
        }
      }}
      {...rest}
    >
      <span>{children}</span>
    </Button>
    </Grid>
  );
}