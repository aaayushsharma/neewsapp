import React, {useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
//  export class News extends Component{
  


  // articles=[
  //       {  
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Northern Ireland Protocol: Sunak 'giving it everything' to reach Brexit deal",
  //         "description": "The prime minister says no agreement has been made but he is hopeful of a \"positive outcome\".",
  //         "url": "http://www.bbc.co.uk/news/uk-politics-64773214",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1452D/production/_128754238_sunakmunich3.jpg",
  //         "publishedAt": "2023-02-26T12:07:17.8471992Z",
  //         "content": "Rishi Sunak says he is \"giving it everything\" this weekend to secure a new Brexit deal for Northern Ireland, and he wants \"to get the job done\".\r\nBut the prime minister said no agreement had yet been… [+6180 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Italy shipwreck: Dozens of migrants killed in Calabria shipwreck",
  //         "description": "A boat reportedly carrying 100 people broke apart while trying to land at a seaside resort.",
  //         "url": "http://www.bbc.co.uk/news/world-europe-64776621",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15B7B/production/_128755988_7e9d7d0d796dd245dc3708cfde3c4e55fb2844d5.jpg",
  //         "publishedAt": "2023-02-26T10:07:13.7371055Z",
  //         "content": "More than 30 migrants, including a babe in arms, have died and dozens more have survived after their overloaded boat sank in rough seas off southern Italy.\r\nThe vessel reportedly broke apart while tr… [+1182 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Papua New Guinea kidnap: Archaeologist Bryce Barker and colleagues freed",
  //         "description": "Bryce Barker and his colleagues are freed after being held hostage for a week.",
  //         "url": "http://www.bbc.co.uk/news/world-asia-64775769",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7373/production/_128755592_brycebarker.jpg",
  //         "publishedAt": "2023-02-26T08:37:18.9411378Z",
  //         "content": "An archaeologist and two of his colleagues have been rescued after being held captive for a week by an armed group in Papua New Guinea (PNG). \r\nProfessor Bryce Barker, a New Zealand citizen who lives… [+2551 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Singapore's rave scene offers freedom in a straight-laced city",
  //         "description": "A revived post-Covid party scene offers space to unwind in the socially conservative city-state.",
  //         "url": "http://www.bbc.co.uk/news/world-asia-64113904",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0DC9/production/_128192530_dsc00344.jpg",
  //         "publishedAt": "2023-02-26T07:37:13.487239Z",
  //         "content": "Aloysius, a 23-year-old dancer, spends his day completing his mandatory military service in Singapore.\r\nSo at night on the weekends, \"Loy\" as he calls himself, goes raving. Under the lights and in th… [+7650 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Dilbert comic strip dropped by US media over creator's racist tirade",
  //         "description": "The comic strip's creator Scott Adams said white people should \"get the hell away\" from black people.",
  //         "url": "http://www.bbc.co.uk/news/world-us-canada-64775250",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C387/production/_128755005_us_cartoon_getty.jpg",
  //         "publishedAt": "2023-02-26T06:22:15.9566544Z",
  //         "content": "Many US newspapers including the Washington Post have dropped the long-running Dilbert cartoon strip after its creator made racist comments.\r\nIn a video on YouTube, Scott Adams, who is white, said bl… [+1439 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Turkey earthquakes: Collapsed buildings investigation widens",
  //         "description": "More than 600 people are being investigated over whether failings in construction made the disaster worse.",
  //         "url": "http://www.bbc.co.uk/news/world-europe-64774726",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15BDF/production/_128755098_75bf97f572e49717fe554d57afb58e52ccb1ec480_388_5500_30951000x563.jpg",
  //         "publishedAt": "2023-02-26T05:07:15.4266774Z",
  //         "content": "More than 600 people are now being investigated in Turkey over buildings that collapsed in the deadly earthquake on 6 February, the government has said.\r\nOn Saturday, Justice Minister Bekir Bozda sai… [+1775 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Alex Murdaugh trial: Power, privilege, and the downfall of a dynasty",
  //         "description": "In a dramatic fall from grace, top lawyer Alex Murdaugh is on trial for murdering his wife and son.",
  //         "url": "http://www.bbc.co.uk/news/world-us-canada-64645725",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8D95/production/_128754263_alexstandingjbthestatecopy.jpg",
  //         "publishedAt": "2023-02-26T02:22:15.909739Z",
  //         "content": "For generations, the Murdaugh family dominated their rural swath of South Carolina - then Alex Murdaugh was accused of the brutal murders of his wife and son. What followed was the stunning unravelli… [+12054 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Ukraine's Banksy stamps feature art of Putin in judo match",
  //         "description": "They reproduce a mural by the UK graffiti artist on a Ukrainian house devastated by Russian shelling.",
  //         "url": "http://www.bbc.co.uk/news/world-europe-64774717",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A2AD/production/_128754614_ukraine_banksy_stamp_getty.jpg",
  //         "publishedAt": "2023-02-26T00:52:12.9875451Z",
  //         "content": "Ukraine has issued postage stamps featuring a mural by renowned UK graffiti artist Banksy to mark the first anniversary of Russia's full-scale invasion.\r\nThe mural depicts a man resembling Russian Pr… [+1560 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "G20 meeting deadlocked over calling out Ukraine war",
  //         "description": "Russia and China refused to condemn Moscow's invasion at a meeting of finance ministers in India.",
  //         "url": "http://www.bbc.co.uk/news/world-asia-64773618",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15A3B/production/_128753688_ee1be69fb8a9e8e62545fb2dd88b306eb5a2931c0_0_5006_33381000x667.jpg",
  //         "publishedAt": "2023-02-25T19:07:20.1749413Z",
  //         "content": "Finance ministers of the world's largest economies have failed to agree on a closing statement following talks in India due to differences over the war in Ukraine. \r\nRussia and China refused to conde… [+2139 chars]"
  //       },
  //       {
  //         "source": { "id": "bbc-news", "name": "BBC News" },
  //         "author": "BBC News",
  //         "title": "Nigeria election: Votes counted after tight poll, final results may take days",
  //         "description": "The elections are the biggest democratic exercise in Africa, with 87 million people eligible to vote.",
  //         "url": "http://www.bbc.co.uk/news/world-africa-64772763",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/133DF/production/_128751887_whatsappimage2023-02-25at15.44.09.jpg",
  //         "publishedAt": "2023-02-25T17:22:33.8639664Z",
  //         "content": "Vote counting is under way in Nigeria's tightest presidential election since military rule ended in 1999.\r\nVoting was marred by long delays as polling stations failed to open on time in some areas be… [+6077 chars]"
  //       }
  //     ]


  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  //  constructor(props){
  //   super(props);
  //   console.log("I am constructor");
  //    document.title=`${this.capitalizeFirstLetter(props.category)}-NewsMonkey`;
  //  }

   const updateNews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    props.setProgress(70);
    // this.setState({articles: parsedData.articles});
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    props.setProgress(100);
   }
   useEffect(() => {
   updateNews();
  },[]);

  const handleprevclick=async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f431e2d6f8b54dcea3e7fc9f17ef1bb7&page=${this.state.page-1}&pagesize=${props.pagesize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // this.setState({articles: parsedData.articles});
    // this.setState({
    //   page: this.state.page-1,
    //   articles: parsedData.articles,
    //   loading:false
    // })
    setPage(page-1);
 
    updateNews();
   }
   const handlenextclick=async()=>{
  //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/20)))
  //    {
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f431e2d6f8b54dcea3e7fc9f17ef1bb7&page=${this.state.page+1}&pagesize=${props.pagesize}`;
  //   this.setState({loading:true});
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   this.setState({articles: parsedData.articles});
  //   this.setState({
  //     page: this.state.page+1,
  //     articles: parsedData.articles,
  //     loading:false
  //   })
  // }

  setPage(page+1);
 
  updateNews();

   }
   const fetchMoreData = async() => {
    setPage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    // this.setState({articles: parsedData.articles});
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
   
};

  
    return (
      // <div className="container my-3">
      //   <h2 className="text-center">Ayush Sharma - Top {this.capitalizeFirstLetter(props.category)} Headlines</h2>
      //   {this.state.loading&&<Spinner/>}
      //   <div className="row">
      //   {!this.state.loading&&this.state.articles.map((element)=>{
      //   return <div className="col-md-4" key={element.url}>
      //   <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      // </div>
      //   })}
        
          
      //     </div>
      //     <div className="container d-flex justify-content-between">
      //     <button disabled={this.state.page<=1} onClick={this.handleprevclick} type="button" className="btn btn-dark">&larr;Previous</button>
      //     <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} onClick={this.handlenextclick} type="button" className="btn btn-dark">Next&rarr;</button>
      //     </div>
      //     </div>
      <>
        <h2 className="text-center" style={{marginTop:'80px'}}>Ayush Sharma - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div>
        })}


          </div>
          </div>
          </InfiniteScroll>
          </>
    )
  
}
News.defaultProps={
  pagesize:4,
  country:'in',
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
  }
export default News