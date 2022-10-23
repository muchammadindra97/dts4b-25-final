import React from 'react';
import TopStory from "./TopStory";
import {Grid, Typography} from "@mui/material";
import NewsItem from "./NewsItem";

const topStoryList = [
  {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  },
  {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  }
];

const latestNewsList = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  }
];

function Home() {
  return (
    <div>
      <Typography component="h2" variant="h5" mb={2}>
        Top Stories
      </Typography>
      <Grid container spacing={3}>
        {topStoryList.map((story, index) => (
          <TopStory news={story} key={index}/>
        ))}
      </Grid>
      <Typography component="h2" variant="h5" mb={2}>
        Latest News
      </Typography>
      <Grid container spacing={3}>
        {latestNewsList.map((news, index) => (
          <NewsItem news={news} key={index}/>
        ))}
      </Grid>
    </div>
  );
}

export default Home;