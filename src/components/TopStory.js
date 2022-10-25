import React from 'react';
import {Box, Grid, Link, Paper, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {convertDate} from "../utils/helper";

function TopStory(props) {
  const {news} = props;

  return (
    <Grid item xs={12} md={6}>
      <Paper
        sx={{
          position: 'relative',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${news.image_url})`,
          borderRadius: '.75rem',
          height: '100%'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
            borderRadius: '.75rem'
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                {news.title}
              </Typography>
              <Typography component="p" variant="subtitle2" color="inherit" gutterBottom>
                {convertDate(news.published_at)}
              </Typography>
              <Typography variant="p" color="inherit" paragraph>
                {news.snippet}
              </Typography>
              <Link component={RouterLink} variant="subtitle1" to={`/detail/${news.uuid}`} sx={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>
                Continue...
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default TopStory;