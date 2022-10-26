import React, {useState} from 'react';
import TopStory from "./TopStory";
import {Button, Grid, Stack, TextField, Typography} from "@mui/material";
import NewsItem from "./NewsItem";
import {useGetAllNewsQuery, useGetTopStoriesQuery} from "../services/newsApi";
import CircularLoading from "./CircularLoading";
import useDebounce from "../hooks/useDebounce";

function Home() {
  const { data: topStoriesData, isFetching: topStoriesIsLoading } = useGetTopStoriesQuery({limit: 2});
  const [ keyword, setKeyword ] = useState('');
  const debouncedSearchTerm = useDebounce(keyword, 1000);

  return (
    <div>
      <Typography component="h2" variant="h5" mb={2}>
        Top Stories
      </Typography>
      <Grid container spacing={3} mb={4} alignItems="stretch" justifyContent="center">
        {!topStoriesIsLoading ? topStoriesData.data.map((story) => (
          <TopStory news={story} key={story.uuid}/>
        )) : <Grid item><CircularLoading /></Grid>}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mb={2}
      >
        <Grid item xs={12} sm="auto">
          <Typography component="h2" variant="h5">
            {keyword ? 'Result' : 'Latest News'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {keyword && <Button type="button" onClick={() => {setKeyword('');}}>Cancel</Button>}
            <TextField
              size="small"
              label="Search News"
              value={keyword}
              onChange={(e) => {setKeyword(e.target.value);}}
            />
          </Stack>
        </Grid>
      </Grid>
      <LatestNews keyword={debouncedSearchTerm.trim()} />
    </div>
  );
}

function LatestNews({keyword}) {
  const { data: allNewsData, isFetching: allNewsIsLoading } = useGetAllNewsQuery({limit: 5, search: keyword});

  return (
    <Grid container spacing={3} justifyContent="center">
      {!allNewsIsLoading ? allNewsData.data.map((news) => (
        <NewsItem news={news} key={news.uuid}/>
      )) : <Grid item><CircularLoading /></Grid>}
    </Grid>
  );
}

export default Home;