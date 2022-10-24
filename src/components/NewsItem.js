import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function NewsItem(props) {
  const {news} = props;

  return (
    <Grid item xs={12} md={4} sm={6}>
      <CardActionArea component={RouterLink} to={`/detail/${news.uuid}`} sx={{borderRadius: ".75rem", height: '100%'}}>
        <Card variant="outlined" sx={{borderStyle: 'none'}}>
          <CardMedia
            component="div"
            sx={{
              borderRadius: ".75rem",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${news.image_url})`,
              height: "200px"
          }}
          />
          <CardContent sx={{paddingLeft: '.5rem', paddingRight: '.5rem', '&:last-child': { pb: '.5rem' }}}>
            <Typography component="h3" variant="h6" sx={{lineHeight: '1.5rem'}}>
              {news.title}
            </Typography>
            <Typography variant="p" color="text.secondary">
              {new Date(news.published_at).toDateString()}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default NewsItem;