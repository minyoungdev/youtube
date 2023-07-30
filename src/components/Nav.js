import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"} `}>
          <div className = "leftheader">
      <img 
      alt="hamburger"
      src="icons/hamburger-menu.svg" 
      className = "hamberger"/>
      <img
        alt="youtube logo"
        src="icons/youtube-logo.svg	"
        className="nav__logo"
        onClick={() => (window.location.href = "/")}
      />
      </div>
      <div className="middleheader">
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="검색"
      />
       <button className="sbutton">  
            <img alt = "/"src="icons/search.svg" className="simg"/>
                <div className="stooltip">검색</div>
            </button>  

       <button className="voicebtn">
            <img
            alt="voiceimg" 
            src="icons/voice-search-icon.svg"
            className="voiceimg"/>
            <div className="vtooltip">음성검색</div>
        </button>
     </div>
     <div className="rightheader">
            <img alt = "/"src="icons/upload.svg" className = "uploadimg"/>
            <img alt = "no" src="icons/youtube-apps.svg"  className="menu"/>
                <div className="notificationcontainer">
                <img alt="/" src="icons/notifications.svg" className="notification" />

                <div className="notificationalarm">1</div>
            </div>
            <img alt = "/" src="/images/avatars/avatar-1.png" className = "avatar"/>
    </div>
   



    <div className = "sidebar">
        <div className="sidebarlink">
            <img alt='/' src="icons/home.svg"/>
            <div>홈</div>
        </div>
        <div className = "sidebarlink">
            <img alt='/' src="icons/explore.svg"/>
            <div>shorts</div>
        </div>
        
        <div className = "sidebarlink">
            <img alt='/' src="icons/subscriptions.svg" />    
            <div>구독</div>
        </div>
        <div className = "sidebarlink">
            <img alt='/' src="icons/library.svg"/>
            <div>보관함</div>
        </div>
       
        
        <div className = "sidebarlink">
            <img alt='/' src="icons/youtube-music.svg"/>
            <div> Music</div>
        </div>
        
        <div className = "sidebarlink">
            <img alt='/' src="icons/originals.svg" />    
            <div>시청기록</div>
        </div>

    </div>
  
    </nav>
  );
}
