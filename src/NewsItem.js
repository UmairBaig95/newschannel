import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: "0",
              justifyContent: "flex=end",
            }}
          >
            <span className="badge rounded-pill bg-success">
              Source: {source}
            </span>
          </div>
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
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
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
