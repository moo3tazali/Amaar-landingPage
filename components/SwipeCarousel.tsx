import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectImg } from "@/lib/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

import React from "react";
import Image from "next/image";

const SwipeCarousel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {projectImg.map((img, i) => (
        <div
          style={{ direction: "ltr" }}
          key={i}
          className="flex flex-col gap-5 items-center justify-center"
        >
          <Image
            src={img}
            alt="image 1"
            className="max-h-full max-w-full object-cover md:rounded-2xl flex-1"
          />
          <p className="text-lg text-center p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            cum aliquid est laborum labore necessitatibus, odit itaque illo
            velit ipsum nesciunt corrupti ducimus numquam iste non nulla.
            Facilis, distinctio animi.
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default SwipeCarousel;
