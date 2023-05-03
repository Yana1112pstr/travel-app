import React, { useEffect } from "react";
import "./main.scss";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "travel relax",
    fees: "$5000",
    description:
      "There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation. ",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "travel",
    fees: "$3000",
    description:
      "Visiting Cappadocia should be on everyone’s bucket list and this Cappadocia guide will help you book that dream trip and make the most of it!",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Sharm El Shaikh",
    location: "Egypt",
    grade: "relax",
    fees: "$1000",
    description:
      "Excellent beaches, beautiful coral reefs, and some of the best dive spots in the world, Sharm El Sheikh may just be the perfect beach vacation destination.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Dubai",
    location: "UAE",
    grade: "travel",
    fees: "$5000",
    description:
      "Dubai is full of contrasts. There's the glittering skyline, made up of skyscrapers so tall they defy imagination; the modern collection of stores and eateries, offering up every kind of option a traveler could possibly want; and the luxurious hotels, ready to welcome even the most discerning traveler in style and excess.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Miami",
    location: "USA",
    grade: "relax",
    fees: "$4000",
    description:
      "Take a number of diverse cultures, add a strong dose of the arts and a splash of ocean water, and you have Miami. Looking at the fantastic art museums and the blossoming gastronomical scene, you might find it hard to believe that just a century ago, this colorful Floridian city was covered in swampland",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Rome",
    location: "Italy",
    grade: "travel",
    fees: "$2000",
    description:
      "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Budapest",
    location: "Hungary",
    grade: "travel",
    fees: "$1000",
    description:
      "Once called the “Queen of the Danube,” Budapest has long been the focal point of the nation and a lively cultural centre.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Maldives",
    location: "Repudlic of Maldives",
    grade: "relax",
    fees: "$5000",
    description:
      "Unrivalled luxury, stunning white-sand beaches and an amazing underwater world make Maldives an obvious choice for a true holiday of a lifetime.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Crete Island",
    location: "Greece",
    grade: "relax",
    fees: "$2000",
    description:
      "Crete is the largest island in Greece, and the fifth largest one in the Mediterranean Sea.",
  },
];

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <MdLocationPin className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
