import React, { Component } from "react";

export default class NewsItems extends Component {

    render() {
      let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
        <div>
        <div className="card">
        <img src={!imageUrl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author} {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-info">Read More</a>
        </div>
      </div>
      </div>
    );
  }
}
