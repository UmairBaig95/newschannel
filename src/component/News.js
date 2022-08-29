import React from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends React.Component {
  static defaultProps = {
    countryName: "us",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    countryName: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.countryName
    }&category=${
      this.props.category
    }&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.countryName
    }&category=${
      this.props.category
    }&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
    console.log(this.state.page)
  };
  handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.countryName
      }&category=${
        this.props.category
      }&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    console.log(this.state.page)
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News Channel - Top Headline</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date = {element.publishedAt}
                    author = {element.author}
                    source = {element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)
            }
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
