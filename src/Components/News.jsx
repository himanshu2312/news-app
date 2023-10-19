import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner";
import moment from "moment";
import { fetchNews } from "../api/index.js";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [page, setpage] = useState(0);
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line
  }, [])


  const loadPage = async () => {

    let { pageSize, category, country, setProgress } = props
    setProgress(10);

    if (category !== "general") {
      document.title = `${capitalize(category)} | NewsTechs`
    }
    setProgress(20)

    let result = await fetchNews({ category, country, pageSize, page: page + 1 })
    setProgress(60);

    setArticles(articles.concat(result.data.articles));
    setProgress(70);

    setpage(page + 1);
    setProgress(80);

    setTotalResults(result.data.totalResults);
    setProgress(90);

    setLoading(false);
    setProgress(100);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const fetchData = () => {
    setTimeout(() => {
      loadPage()
    }, 1500);
  };


  return (
    <>
      <h1 style={{ margin: '20px', marginTop: "80px" }}>
        <center>{`NewsTechs - Top headlines ${props.category === 'general' ? "" : `on ${capitalize(props.category)}`}`}</center>
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={() => { fetchData() }}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row" >
            {articles?.map((ele, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={ele.title ? ele.title : ""}
                    description={ele.description ? ele.description : ""}
                    img={
                      ele.urlToImage
                    }
                    newsurl={ele.url}
                    author={ele.author}
                    date={moment(ele.publishedAt).fromNow()}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;