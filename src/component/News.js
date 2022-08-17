import React from "react";
import NewsItem from "../NewsItem";

export class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles : 1
    };
  }
  componentDidMount() {
    this.fetchFunction();
  }
  async fetchFunction() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=1&pageSize=20"
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults});
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=${this.state.page - 1 }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      page : this.state.page - 1,
      articles: parseData.articles });
  };
  handleNextClick = async() => {
    if(this.state.page + 1 > Math.ceil(this.state.totalArticles/20))
    {
    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({ 
        page : this.state.page + 1,
        articles: parseData.articles });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2>News Channel - Top Headline</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled = {this.state.page<= 1}
            type="button"
            className="btn btn-outline-dark"
            onClick={this.handlePreviousClick}> &larr; Previous
          </button>
          <button
            id="nextClickButton"
            type="button"
            className="btn btn-outline-dark"
            onClick={this.handleNextClick}
          >
            Next Page &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
