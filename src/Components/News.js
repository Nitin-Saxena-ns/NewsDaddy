import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);

  const capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 

 const updateNews = async () => {
 
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    console.log(parsedData);
    setarticles(parsedData.articles);
    setTotalResults(parsedData.totalresults);
    setloading(false)
    props.setProgress(100);
  };
   useEffect(() => {
    document.title = `NewsDaddy - ${capitalizeLetter(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalresults);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center " style={{margin:80}}>
        NewsDaddy - Top {capitalizeLetter(props.category)} Headlines
      </h1>
      {loading && <Spiner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalresults}
        loader={<Spiner />}
      >
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );

};
  News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
export default News;
