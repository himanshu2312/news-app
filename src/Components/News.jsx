import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner";
import moment from "moment";
import {fetchNews} from "../api/index.js";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 0,
      totalResults: 0,
      loading: true
    };
  }
  api_key= "53fcb599db2d40d4b6517951bd93de65"
  componentDidMount() {
    this.loadPage();
  }
  
  loadPage = async () => {
    let {pageSize,category, country, setProgress}=this.props
    setProgress(10);
    document.title=`${this.capitalize(category)} - NewsTechs`
    
    setProgress(20)
    let result = await fetchNews({category,country,pageSize,page:this.state.page+1})
    setProgress(60);

    setProgress(70);
    this.setState({
      articles: this.state.articles.concat(result.data.articles),
      page: this.state.page + 1,
      totalResults: result.data.totalResults,
      loading: false
    });
    setProgress(100);
  };
  
  capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  fetchData = () => {
    setTimeout(() => {
      this.loadPage()
    }, 1500);
  };

  render() {

    return (
      <>
        <h1 style={{margin: '20px'}}>
          <center>{`NewsTechs - Top headlines ${this.props.category==='general'?"":`on ${this.capitalize(this.props.category)}`}`}</center>
        </h1>
        {this.state.loading&&<Spinner/>}
        <InfiniteScroll 
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={()=>{this.fetchData()}}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          >
          <div className="container">
            <div className="row" >
              {this.state.articles?.map((ele,index) => {
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
}
