import React from "react";

const Newsitem =(props)=> {
    let { title, description, imageUrl, url, author , date, source } = props;
    return (
      
        <div className="my-3">
          <div className="card p-0 m" style={{padding: 0}}>
          <div className="ms-auto m-0" style={{display: "flex", justifyContent: "flex-end" , position: "absolute", right: 0 ,top: 0}}>
          <span className="badge rounded-pill bg-dark">{source}</span>
          </div>
          <img
            src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqiIFP7qqDNsU_CfmEh0gBhViBnBhm_UIxWsv2m1-&s": imageUrl}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description} Read More...</p>
            <p className="card-text"><small>By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
        </div>
    );
}

export default Newsitem;
