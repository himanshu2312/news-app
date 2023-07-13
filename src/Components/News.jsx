import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <h1>NewdTechs - Top headlines</h1>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title="MyNews"  img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"description="mydec"  img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyNews" description="mydec"  img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="MyNews" description="mydec"  img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title="MyNews" description="mydec"  img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="MyNews" description="mydec" img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyNews" description="mydec"  img="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}
