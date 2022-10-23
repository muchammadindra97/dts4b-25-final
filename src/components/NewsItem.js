import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function NewsItem(props) {
  const {news} = props;

  return (
    <Grid item xs={12} md={3} sm={6}>
      <CardActionArea component={RouterLink} to="/detail" sx={{borderRadius: ".75rem"}}>
        <Card variant="outlined" sx={{borderStyle: 'none'}}>
          <CardMedia
            component="img"
            height="200"
            image={news.image}
            alt={news.imageLabel}
            sx={{borderRadius: ".75rem"}}
          />
          <CardContent sx={{paddingLeft: '0', paddingRight: '0'}}>
            <Typography component="h3" variant="h6">
              {news.title}
            </Typography>
            <Typography variant="p" color="text.secondary">
              {news.date}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default NewsItem;