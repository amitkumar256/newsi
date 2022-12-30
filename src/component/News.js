import NewsItem from './NewsItem'
import Spinner from './Spinner';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class News extends Component {
  
static defaultProps = {
  country:'in',
  pageSize: 9,
  category:'general',
}
static propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

 capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

constructor(){
  super();
  console.log("hello i am constructor");
  this.state={
    articles:[],
    loading:false,
    page:1
    
  }



}
async componentDidMount()
{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5871893db00a4410b1e94e9e9fc8e81e&page=1&pageSize=${this.props.pageSize}`
  let data=await fetch(url);
  let parsedData=await data.json();
  this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults })
}

prev=async()=>{
  console.log("previous");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5871893db00a4410b1e94e9e9fc8e81e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data=await fetch(url);
  let parsedData=await data.json();
  this.setState({
  
    page:this.state.page-1,
    articles: parsedData.articles,
    loading:false
  })

}
next = async ()=>{
  console.log("next");
if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/21)))
{


  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5871893db00a4410b1e94e9e9fc8e81e&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData=await data.json();
  this.setState({
    page:this.state.page+1,
    articles: parsedData.articles,
    loading:false
    
  })
}
}

  render() {
    return (
      
        <div>
        <div className="m-4 text-2xl text-center ">
       <h1 >NewsMonkey - Top  {this.props.category} HeadLines</h1>
      {this.state.loading && <Spinner/>}

      </div>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {this.state.articles.map((element)=>{
    return <div className="conta"key={element.url}>
    
    <NewsItem  title={element.title?element.title:""} desc={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
 

  </div>
}) }
 </div>
 <div className="flex justify-between">
 <button disabled={this.state.page<=1} onClick={this.prev} className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
 &larr; Previous
</button>
<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.next} className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
 Next &rarr; 
</button>
</div>
  </div>
      
    )
  }
}

export default News





  
   
  
