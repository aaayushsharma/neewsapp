import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Newsitem=(props)=>{
 
  
    let {title,description,imageurl,newsurl,author,date,source}=props;
    return (
      <div className="my-3">
       <div className="card">
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position: 'absolute',
          right:'0'
        }}>
        {/* <div className="d-flex align-items-start"> */}
       <span class="badge rounded-pill bg-primary">
    {source}dd</span>
    </div>
  <img className="card-img-top" src={!imageurl?"https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80":imageurl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}...</p>
    <p className="card-Text"><small className="text-primary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a target="_blank" rel="nonreferrer" href={newsurl} className="btn btn-sm btn-dark">Go somewhere</a>
  </div>
</div>
      </div>
    )
  
}

export default Newsitem
