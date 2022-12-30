import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class navbar extends Component {
  render() {
    return (
      <div>
        
        <ul className="flex w-full h-12 p-2 bg-gray-900 ">
  <li className="mr-6">
    <Link className="text-xl font-bold text-white" to ="/">NewsMonkey</Link>
  </li>
  <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/business">Business</Link>
  </li>
  <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/entertainment">Entertainment</Link>
  </li>
  <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/general">General</Link>
  </li> 
   <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/health">Health</Link>
  </li>
  <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/science">Science</Link>
  </li>
  <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/sports">Sports</Link>
  </li>
  <li className="mr-6">
    <Link className="text-white hover:text-gray-300" to ="/technology">Technology</Link>
  </li>
</ul>
      </div>
    )
  }
}

export default navbar


   
