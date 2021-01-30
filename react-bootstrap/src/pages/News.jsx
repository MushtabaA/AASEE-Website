import React, { Component } from "react";
import "./News.css";
import NewsHeader from "../components/News/NewsHeader";
import NewsMain from "../components/News/NewsMain";

export default class News extends Component {
  render() {
    return (
      <div>
        
        <NewsHeader />

        <NewsMain />
        
      </div>
    );
  }
}
