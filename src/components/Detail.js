import React from 'react';
import {Box, Grid, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Detail() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body2" color="text.secondary">
          <Link to="/" component={RouterLink}>
            &gt; Back to Home
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          component="img"
          src="https://source.unsplash.com/random"
          sx={{
            width: '100%',
            height: {xs: '300px', md: '400px'},
            objectFit: 'cover',
            borderRadius: '.75rem'
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography component="h1" variant="h4" sx={{fontWeight: 'bold'}}>
          Judul Berita yang Panjang
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="p">
          Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet. Lorem ipsum sir dolor amet.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Detail;