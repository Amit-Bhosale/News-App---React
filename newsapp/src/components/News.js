import React, {useEffect, useState, Component}  from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("Hello its me constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = this.props.category + " News";
  }

  async updateNews() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
    
  }

  async componentDidMount() {
    this.updateNews();
  }

  async componentDidUpdate(prevProps) {
    if(this.props.country !== prevProps.country)
    {
      this.updateNews();
    }
  } 


  // handleNextClick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePreviousClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    console.log("render");
    console.log(this.props.country)
    return (
      <div className="container my-4">
        {/* {<div key={this.props.country}>{this.props.country}</div>} */}
        <h3 className="text-center">NewsDaily - Top Headlines</h3>
        <h5 className="text-center my-3 text-secondary">
          {this.props.category} Related News
        </h5>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      newsUrl={element.url}
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}


//for Function


// const News = (props)=>{
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)
  
//   const capitalizeFirstLetter = (string) => {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//   } 

//   const updateNews = async ()=> {
//       props.setProgress(10);
//       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
//       setLoading(true)
//       let data = await fetch(url);
//       props.setProgress(30);
//       let parsedData = await data.json()
//       props.setProgress(70);
//       setArticles(parsedData.articles)
//       setTotalResults(parsedData.totalResults)
//       setLoading(false)
//       props.setProgress(100);
//   }

//   //changes componentDidMOunt
//   useEffect(() => {
//       document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//       updateNews(); 
//       // eslint-disable-next-line
//   }, [])


//   const fetchMoreData = async () => {   
//       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//       setPage(page+1) 
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       setArticles(articles.concat(parsedData.articles))
//       setTotalResults(parsedData.totalResults)
//     };
//     console.log(props.country)
//       return (
//           <>

//               <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//               {loading && <Spinner />}
//               <InfiniteScroll
//                   dataLength={articles.length}
//                   next={fetchMoreData}
//                   hasMore={articles.length !== totalResults}
//                   loader={<Spinner/>}
//               > 
//                   <div className="container">
                       
//                   <div className="row">
//                       {articles.map((element) => {
//                           return <div className="col-md-4" key={element.url}>
//                               <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                           </div>
//                       })}
//                   </div>
//                   </div> 
//               </InfiniteScroll>
//           </>
//       )
  
// }


// News.defaultProps = {
//   country: 'in',
//   pageSize: 8,
//   category: 'general',
// }

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// }

// export default News