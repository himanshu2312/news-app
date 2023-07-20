import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    console.log(this.state.page);
  }
  
  componentDidMount() {
    this.loadPage(0);
  }

  loadPage = async (n) => {
    let {pageSize,category, country}=this.props
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=53fcb599db2d40d4b6517951bd93de65&page=${
      this.state.page + n
    }&PageSize=${pageSize}`;
    console.log(url)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page + n,
      totalResults: parseData.totalResults,
    });
  };

  handleNext = () => {
    this.loadPage(1);
  };

  handlePre = () => {
    this.loadPage(-1);
  };

  render() {

    return (
      <div className="container">
        <h1 style={{margin: '20px'}}>
          <center>NewsTechs - Top headlines</center>
        </h1>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4 my-3" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title : ""}
                  description={ele.description ? ele.description : ""}
                  img={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://cdn0.iconfinder.com/data/icons/ui-3-1/512/news-128.png"
                  }
                  newsurl={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            id="btnPre"
            className="btn btn-dark "
            disabled={this.state.page <= 1}
            onClick={this.handlePre}
          >
            &larr; Previous
          </button>
          <button
            id="btnNext"
            className="btn btn-dark "
            onClick={this.handleNext}
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) === this.state.page
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
