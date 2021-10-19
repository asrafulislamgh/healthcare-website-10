import React from "react";
import News from "../News/News";
import Services from "../Services/Services";
import CarouselSlider from "./CarouselSlider/CarouselSlider";
import CEO from "./CEO";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <CarouselSlider></CarouselSlider>
      <Services></Services>
      <Newsletter></Newsletter>
      <News></News>
      <CEO></CEO>
    </div>
  );
};

export default Home;
