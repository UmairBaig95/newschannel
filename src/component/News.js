import React from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends React.Component {
  static defaultProps = {
    countryName: "us",
    // pageSize: 5,
    category: "general",
  };

  static propTypes = {
    countryName: PropTypes.string,
    // pageSize: PropTypes.number,
    category: PropTypes.string,
    totalResults: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page:1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Channel`
  }
capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount() {
    this.fetchMoreData();
  }

  async updatedNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=${
    this.props.countryName
  }&category=${
    this.props.category
  }&apiKey=d3f8678263384e8e858637c3a8bd0c17&page=${this.state.page}`;
  // this.setState({ loading: true });
  let data = await fetch(url);
  let parseData = await data.json();
  console.log(parseData)
  this.setState({
    articles: parseData.articles,
    totalArticles: parseData.totalResults,
    loading: true,
  });
}
  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 }, () => {
      console.log(this.state.page, 'page');
      this.updatedNews();
    }); 
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      console.log(this.state.page, 'page');
      this.updatedNews();
    }); 
};

fetchMoreData = async () => {
  this.props.setProgress(10)
  this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${
    this.props.countryName
  }&category=${
    this.props.category
  }&apiKey=${this.props.apiKey}&page${this.state.page}`;
  let data = await fetch(url);
  this.props.setProgress(30)
  let parseData = await data.json();
  console.log(parseData)
  this.props.setProgress(50)
  this.setState({
    articles: this.state.articles.concat(parseData.articles),
    totalResults: parseData.totalResults,
  });
  this.props.setProgress(100)
  console.log(this.state.articles.length)
  console.log(this.state.totalResults)
}

  render() {
    return (
      <>
        <h2 className="text-center my-3">News Channel On {this.capitalizeFirstLetter(this.props.category)}</h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={(this.state.articles.length - 20) !== (this.state.totalResults)}
          loader={<Spinner/>}
        >
          <div className="container">
                    <div className="row">
          {/* {!this.state.loading && */}
           { this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
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
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
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
              this.state.page + 1 > Math.ceil(this.state.totalArticles /this.props.pageSize)
            }
            type="button"
            className="btn btn-outline-dark"
            onClick={this.handleNextClick}
          >
            Next Page &rarr;
          </button>
        </div> */}
        {/*  */}
       </>
    );
  }
 
}
export default News;
