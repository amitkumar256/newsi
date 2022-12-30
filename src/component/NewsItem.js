import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,desc,imageurl,newsurl,author,date}=this.props;
    return (
      <div className=''>
    
      <div className="max-w-sm overflow-hidden rounded shadow-lg ">
    <img className="w-full" src={!imageurl?"https://img.etimg.com/thumb/msid-96219313,width-1070,height-580,overlay-economictimes/photo.jpg":imageurl} alt="Sunset "/>
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold"><h1>{title}</h1></div>
      <p className="text-base text-gray-700">
      {desc}
      </p>
      <p className="text-base text-gray-700">By {!author?"unknown":author} on {date}</p>

      <button className="px-2 py-1 my-1 font-bold text-white bg-blue-500 rounded w-15 btn hover:bg-blue-700">
  <a href={newsurl}>Read More</a> 
  </button>  </div>
   
  </div>
  </div>

    )
  }
}

export default NewsItem

   



 