import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    console.log("I am a constructor of news component")
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=53fcb599db2d40d4b6517951bd93de65";
    let data = await fetch(url);
    let parseData= await data.json();
    console.log(parseData)
    this.setState({articles: parseData.articles})
  }
  render() {
    return (
      <div className="container" >
        <h1><center>NewsTechs - Top headlines</center></h1>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4 my-3" key={ele.url}>
                <NewsItem
                  title={ele.title?ele.title:""}
                  description={ele.description?ele.description:""}
                  img={ele.urlToImage?ele.urlToImage:"https://cdn0.iconfinder.com/data/icons/ui-3-1/512/news-128.png"}
                  newsurl={ele.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
