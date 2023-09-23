import React from "react";
import tw, { css } from "twin.macro";
import Robottok1 from "../imagesfarm/farmlist/farm1.png";
import Robottok2 from "../imagesfarm/farmlist/farm2.png";
import Robottok3 from "../imagesfarm/farmlist/farm3.png";
import Robottok4 from "../imagesfarm/farmlist/farm4.png";
import Robottok5 from "../imagesfarm/farmlist/farm5.png";
import Robottok6 from "../imagesfarm/farmlist/farm6.png";
import Robottok7 from "../imagesfarm/farmlist/farm7.png";
import Robottok8 from "../imagesfarm/farmlist/farm8.png";
import Robottok9 from "../imagesfarm/farmlist/farm9.png";
import Robottok10 from "../imagesfarm/farmlist/farm10.png";
import Robottok11 from "../imagesfarm/farmlist/farm11.png";
import Robottok12 from "../imagesfarm/farmlist/farm12.png";
import Robottok13 from "../imagesfarm/farmlist/farm13.png";

const RobottokImages = [
  { src: Robottok1, link: "https://www.notion.so/9c844210836248b2a8c319c75d912b09?pvs=4" },
  { src: Robottok2, link: "외부 링크 URL 2" },
  { src: Robottok3, link: "외부 링크 URL 3" },
  { src: Robottok4, link: "외부 링크 URL 4" },
  { src: Robottok5, link: "외부 링크 URL 5" },
  { src: Robottok6, link: "외부 링크 URL 6" },
  { src: Robottok7, link: "외부 링크 URL 7" },
  { src: Robottok8, link: "외부 링크 URL 8" },
  { src: Robottok9, link: "외부 링크 URL 9" },
  { src: Robottok10, link: "외부 링크 URL 10" },
  { src: Robottok11, link: "외부 링크 URL 11" },
  { src: Robottok12, link: "외부 링크 URL 12" },
  { src: Robottok13, link: "외부 링크 URL 13" },
];

const Pagelist = () => {
  const handleImageClick = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {RobottokImages.map((image, index) => (
        <div key={index} onClick={() => handleImageClick(image.link)} style={{ cursor: 'pointer' }}>
          <img src={image.src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Pagelist;
