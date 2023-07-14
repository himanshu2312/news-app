import React, { Component } from "react";

export default class NewsItem extends Component {
  constructor(){
    super();
    console.log("I am a constructor of a newsitem")
  }
  render() {
    let { title, description , img, newsurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title+"...."}</h5>
            <p className="card-text">{description+"........"}</p>
            <a href={newsurl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
