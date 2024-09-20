"use client";

import React, { useState, useEffect } from "react";

import styles from "./page.module.css";

import { Reset } from "styled-reset";
import Link from "next/link";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-08-20&sortBy=publishedAt&apiKey=1b33618ee3964c9dae912df5aca38324"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <>
      <Reset />
      <div className={`${styles.home}`}>
        <ul>
          {news?.map((ne, index) => (
            <li key={index}>
              <Link href={`news/${ne.publishedAt}`}>
                <img src={ne.urlToImage} alt={ne.content} />
                <span>{ne.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
