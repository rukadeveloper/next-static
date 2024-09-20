"use client";

import React from "react";

import styled from "styled-components";
import { Reset } from "styled-reset";

const News = styled.div`
  img {
    width: 75%;
    margin: 0 auto;
  }
  span {
    display: block;
  }
`;

// This function can be named anything
async function getProjects() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-08-20&sortBy=publishedAt&apiKey=1b33618ee3964c9dae912df5aca38324`
  );
  const news = await res.json();

  return news;
}

const page = async ({ params }) => {
  const news = await getProjects();

  const filtered = news.articles.filter(
    (item) => item.publishedAt === decodeURIComponent(params.id)
  );

  console.log(filtered);

  return (
    <>
      <Reset />
      <News>
        <span>{filtered[0].title}</span>
        <img src={filtered[0].urlToImage} alt={filtered[0].content} />
      </News>
    </>
  );
};

export default page;
