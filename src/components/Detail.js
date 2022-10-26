import React, {Fragment} from 'react';
import {Box, Button, Grid, Link, Stack, Typography} from "@mui/material";
import {Link as RouterLink, useParams} from "react-router-dom";
import {useGetNewsByUUIDQuery, useGetSimilarNewsByUUIDQuery} from "../services/newsApi";
import NewsItem from "./NewsItem";
import CircularLoading from "./CircularLoading";
import {convertDate} from "../utils/helper";

function Detail() {
  const params = useParams();
  const {data: news, isFetching : newsIsLoading} = useGetNewsByUUIDQuery({uuid: params.uuid});
  const {data: similarNewsList, isFetching : similarNewsListIsLoading} = useGetSimilarNewsByUUIDQuery({uuid: params.uuid, limit: 3});

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="body2" color="text.secondary">
          <Link to="/" component={RouterLink}>
            &gt; Back to Home
          </Link>
        </Typography>
      </Grid>
      {!newsIsLoading ?
        <Fragment>
          <Grid item xs={12}>
            <Box
              component="img"
              src={news.image_url}
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
              {news.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="left"
              alignItems="center"
            >
              <Typography variant="p" color="text.secondary">
                {convertDate(news.published_at)}
              </Typography>
              <Link component={Button} variant="contained" disableElevation href={news.url} target="_blank">
                Open Original Article
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" sx={{textAlign: 'justify'}}>
              {news.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, ex a gravida interdum, leo dolor tristique risus, at vehicula ante erat a dolor. Fusce nec scelerisque turpis. Donec orci arcu, faucibus non dolor placerat, hendrerit fermentum felis. Fusce nec lorem lobortis, placerat mauris efficitur, maximus leo. Morbi ornare felis id nunc commodo gravida. Nam id libero lectus. Quisque ipsum augue, placerat quis risus eget, sodales pretium mauris. Donec eu ipsum mauris. Integer elementum eget purus quis rhoncus. Quisque vel nunc venenatis, luctus nisl at, facilisis velit. Sed tincidunt, massa et consequat faucibus, velit mi tincidunt nisi, ut rhoncus leo nibh pellentesque ipsum. Maecenas vel quam non urna elementum viverra. Donec ullamcorper interdum dictum. Maecenas fermentum iaculis odio vitae tincidunt. Curabitur at aliquam lectus. Sed non gravida nulla. Nunc ultrices elit pellentesque nunc volutpat varius. Mauris feugiat, ipsum non ultrices scelerisque, metus urna aliquam velit, eget lacinia massa nibh vel ligula. Aliquam imperdiet ex orci, nec placerat purus blandit in. Suspendisse sollicitudin vel elit sed congue. Fusce orci sem, porta ultricies tincidunt ut, mattis vitae leo. Phasellus pharetra ipsum nulla, id interdum est ultrices vitae. Ut sit amet elit vitae nulla facilisis suscipit. Nam ac laoreet dolor, imperdiet viverra ex. Sed tempus ultricies sodales. Nunc id ante lacus. Morbi consequat ante velit, id malesuada mauris aliquam eu. Donec mauris purus, tincidunt non neque sit amet, accumsan semper ligula. Maecenas faucibus metus eget vulputate gravida. In vitae risus at tortor posuere lobortis nec nec leo. In commodo gravida sem sit amet luctus. Etiam vel iaculis nisl. Nulla commodo feugiat eros non sodales. Aliquam et massa aliquam, malesuada leo eget, imperdiet purus. Aenean arcu nibh, rutrum et arcu nec, luctus egestas velit. Quisque vel finibus nisl, a ultrices lorem. Fusce facilisis maximus sagittis. Vivamus iaculis sagittis eros, blandit blandit orci fringilla eget. Proin nec tortor posuere, tristique nisl et, varius libero. Sed malesuada libero id luctus efficitur. Ut purus ligula, congue a mi eu, ullamcorper tempor leo. Pellentesque ligula nisi, gravida et dictum non, dignissim quis leo. Fusce magna turpis, tincidunt eget fringilla vel, ultrices eu nisi. Integer nec nulla id mauris hendrerit aliquam nec nec erat. Morbi et consectetur purus. Aliquam pharetra metus odio, in tristique risus efficitur in. Vestibulum mollis finibus vulputate. Fusce semper lacinia ligula et consequat. Vestibulum dignissim turpis quis pulvinar commodo. Morbi ac erat at quam accumsan fermentum. Quisque pretium ultrices lectus id viverra. Donec congue orci dolor, nec sagittis sapien posuere nec. Duis laoreet augue non enim luctus pulvinar. Morbi aliquam dapibus ex non suscipit. Donec pellentesque, erat vitae lobortis iaculis, ante odio consectetur sapien, vel egestas lacus nisl id tellus. Etiam a cursus ante. Mauris ac pretium lectus. Nullam dapibus consectetur odio. Nam interdum imperdiet lectus, eu imperdiet diam sollicitudin ac.
            </Typography>
          </Grid>
        </Fragment> : <CircularLoading />
      }
      <Grid item xs={12}>
        <Typography component="h2" variant="h5">
          Similar News
        </Typography>
      </Grid>
      {!similarNewsListIsLoading ?
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {similarNewsList.data.map((news) => (
              <NewsItem news={news} key={news.uuid}/>
            ))}
          </Grid>
        </Grid> : <Grid item><CircularLoading /></Grid>
      }
    </Grid>
  );
}

export default Detail;