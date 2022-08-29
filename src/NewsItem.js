import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: '87.5%', zIndex: '1'}}>Source: {source}</span>
          <img
            src={
              !imageUrl
                ? "https://www.nccpimandtip.gov.eg/uploads/newsImages/1549208279-default-news.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            // style={{ height: "200px", maxHeight: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date (date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
