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
  }
  
  componentDidMount() {
    this.loadPage(0);
  }

  loadPage = async (n) => {
    let {pageSize,category, country}=this.props
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category==='home'?'general':category}&apiKey=53fcb599db2d40d4b6517951bd93de65&page=${
      this.state.page + n
    }&PageSize=${pageSize}`;
    this.setState({
      loading:true
    })
    document.title=`${this.capitalize(category)} - NewsTechs`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + n,
      totalResults: parseData.totalResults,
      loading: false
    });
  };

  capitalize=(str)=>{
     return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
          <center>{`NewsTechs - Top headlines ${this.props.category==='home'?"":`on ${this.capitalize(this.props.category)}`}`}</center>
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
                  author={ele.author}
                  date={(new Date(ele.publishedAt)).toGMTString()}
                  source={ele.source.name}
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
