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
          background: 'white',
          justifyContent: 'center',
          justifyItems: 'center',
        }}>
        <Typography
          variant='h1'
          sx={{
            textAlign: 'center',
          }}>
          NIKE
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              image='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/57558712-5ebe-4abb-9984-879f9e896b4c/air-force-1-07-flyease-shoes-lpjTWM.png'
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Nike Air Force 1
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Quicker than 1, 2, 3—the original hoops shoe lets you step in
                and get going. Its easy-entry FlyEase system gives you a
                hands-free experience. Crisp leather dons the cleanest colour
                for the ultimate wearability. Yeah, it's everything you love and
                then some.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
