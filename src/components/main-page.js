import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MyTabs from "./MoviesTabs/MyTabs";
import "./scss/style.scss";

const footerLinks = [
  { link: "https://www.youtube.com/watch?v=4vIMg4tTIrc", title: "View Deadpool wisdom" },
  { link: "mailto:eladr@gmail.com", title: "Need any help?" },
  { link: "https://www.facebook.com/elad.rapaport", title: "Say Hi on facebook" },
  { link: "https://sivadass.in", title: "Read My Blog" }
];

const MainPage = () => (
  <div class="sh-grid-container">
    <Header class="item1"/>
    <MyTabs class="item2"/>
    <Footer class="item3" 
      footerLinks={footerLinks}
    />
  </div>
)

export default MainPage;
