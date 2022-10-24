import React from 'react';
import TopStory from "./TopStory";
import {Grid, Typography} from "@mui/material";
import NewsItem from "./NewsItem";
import {useGetAllNewsQuery, useGetTopStoriesQuery} from "../services/newsApi";

function Home() {
  const { data: topStoriesData, isLoading: topStoriesIsLoading } = useGetTopStoriesQuery(2);
  const { data: allNewsData, isLoading: allNewsIsLoading } = useGetAllNewsQuery(5);

  return (
    <div>
      <Typography component="h2" variant="h5" mb={2}>
        Top Stories
      </Typography>
      <Grid container spacing={3} mb={4} alignItems="stretch">
        {!topStoriesIsLoading && topStoriesData.data.map((story) => (
          <TopStory news={story} key={story.uuid}/>
        ))}
      </Grid>
      <Typography component="h2" variant="h5" mb={2}>
        Latest News
      </Typography>
      <Grid container spacing={3}>
        {!allNewsIsLoading && allNewsData.data.map((news) => (
          <NewsItem news={news} key={news.uuid}/>
        ))}
      </Grid>
    </div>
  );
}

export default Home;