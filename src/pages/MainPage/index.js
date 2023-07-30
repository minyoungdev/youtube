import React from "react";
import Row from "../../components/Row";
import requests from "../../api/requests";
import "./MainPage.css"

export default function MainPage() {

  return (
    <div className="MainPage">
        <div className="categorybar">
      <button className="categorybarlink"  >전체</button>
      <button className="categorybarlink" >음악</button>
      <button className="categorybarlink" >실시간</button>
      <button className="categorybarlink" >게임</button>
      <button className="categorybarlink" >뉴스</button>
      <button className="categorybarlink" >관광지</button>
    </div>
      <Row
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
       id="TN" 
       fetchUrl={requests.fetchTrending} />
      <Row 
      id="TR" 
      fetchUrl={requests.fetchTopRated} />
      <Row
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="주요영화추천"
        id="MM"
        fetchUrl={requests.fetchNowPlaying}
        isLargeRow
      />
      
    </div>
  );
}
