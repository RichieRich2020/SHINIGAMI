import { Box, colors, Grid, Typography } from '@mui/material';
import { display } from '@mui/system';
import { useRouter } from 'next/router';
import Navbar from './navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
export default function Nike_page() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          justifyContent: 'center',
          justifyItems: 'center',
        }}>
        <Typography
          variant='h1'
          sx={{
            textAlign: 'center',
          }}>
          JORDANS
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              image='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99ce3792-6f31-4903-b876-b9f91aa30e3d/jordan-4-retro-younger-shoes-SjlnCk.png'
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Jordan 4 Retro
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                The Jordan 4 Retro is inspired by the original AJ4.Made with
                real and synthetic leather and textile, soft foam cushioning,
                and play-ready rubber traction, it features the mesh panelling
                and angled overlays that made the shoe so memorable.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
