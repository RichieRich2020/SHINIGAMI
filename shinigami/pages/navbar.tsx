import { Box, Grid, Typography, TextField } from '@mui/material';
import { display } from '@mui/system';
import { useRouter } from 'next/router';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar() {
  const router = useRouter();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <>
      <Box
        sx={{
          borderBottom: '1px solid lightgrey',
          height: '60px',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 10px 0px 10px',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Typography variant='h3'> Shinigami Store</Typography>
        <Grid
          sx={{
            height: '60px',
            display: 'flex',
            gap: '60px',

            alignItems: 'center',
          }}>
          <Typography variant='h6' onClick={() => router.push('/nike_page')}>
            {' '}
            Nike{' '}
          </Typography>
          <Typography variant='h6' onClick={() => router.push('/jordans_page')}>
            {' '}
            Jordans{' '}
          </Typography>
          <Typography variant='h6'> Contact US </Typography>
          <Typography variant='h6'> Help </Typography>
        </Grid>

        <Grid>
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        </Grid>
        <Grid>
          <IconButton aria-label='cart'>
            <StyledBadge badgeContent={4} color='secondary'>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Grid>
      </Box>
    </>
  );
}
