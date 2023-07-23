import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let { title, description , img, newsurl,author, date, source} = this.props;
    return (
      <div>
        <div className="card">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
              {source}
            </span>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-primary">By {author!==null?author:'Unknown'} on {date}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
