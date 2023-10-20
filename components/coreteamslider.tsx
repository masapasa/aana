"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import vanshaj from "@/assets/people/vanshaj.png";
import somya from "@/assets/people/somya.png";
import unique from "@/assets/people/unique.png";
import shailesh from "@/assets/people/shailesh.png";
import parth from "@/assets/people/parth.png";
import simran from "@/assets/people/simran.png";
import laveena from "@/assets/people/laveena.png";
import instagram from "@/assets/svg/in.svg";
import linkedin from "@/assets/svg/li.svg";

const studenthead = [
  {
    name: "Unisha Bhattarai",
    profile_pic: vanshaj,
    alt: "Development Head - Unisha Bhattarai",
    year: "III yr",
    branch: "Business Development",
    role: "Development Head",
    instagram_link: "https://www.instagram.com/vanshaj_kataria/",
    linkedin_link: "https://www.linkedin.com/in/vanshaj-kataria/",
  },
  {
    name: "Urvashi Bhattarai",
    profile_pic: somya,
    alt: "Management Head - Urvashi Bhattarai",
    year: "III yr",
    branch: "Outreach",
    role: "Management Head",
    instagram_link: "https://www.instagram.com/somyaa_jain08/",
    linkedin_link: "https://www.linkedin.com/in/somya-jain-76b230223/",
  },
  {
    name: "Sagar Pyakurel",
    profile_pic: unique,
    alt: "Tutor Head - Sagar Pyakurel",
    year: "III yr",
    branch: "Finance",
    role: "Tutor Head",
    instagram_link: "https://www.instagram.com/paliwalunique/",
    linkedin_link: "https://www.linkedin.com/in/unique-paliwal-6a3456226/",
  },
  {
    name: "Sabu Subedi",
    profile_pic: shailesh,
    alt: "Content Head - Sabu Subedi",
    year: "III yr",
    branch: "Commerce",
    role: "Content Head",
    instagram_link: "https://www.instagram.com/bhaba_shailesh.raj/",
    linkedin_link: "https://www.linkedin.com/in/shailesh-purohit-9917291b7/",
  },
  {
    name: "Rajeshwor Dhital",
    profile_pic: parth,
    alt: "Design Head - Rajeshwor Dhital",
    year: "III yr",
    branch: "CSE",
    role: "Design Head",
    instagram_link: "https://www.instagram.com/art_at_adobe/",
    linkedin_link: "https://www.linkedin.com/in/parth-jain-b95182214/",
  },
  {
    name: "Pranij Man Shrestha",
    profile_pic: simran,
    alt: "Social Media/PR Head - Pranij Man Shrestha",
    year: "III yr",
    branch: "CSE",
    role: "Social Media/PR Head",
    instagram_link: "https://www.instagram.com/simranrawat2513/",
    linkedin_link: "https://www.linkedin.com/in/simran-rawat-150554214/",
  },
];

const coreteamslider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [swiperSlides, setSwiperSlides] = useState(1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const updateSwriperSlides = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSwiperSlides(3); // Desktop
      } else if (screenWidth >= 992) {
        setSwiperSlides(2); // Desktop-Small
      } else if (screenWidth >= 768) {
        setSwiperSlides(1); // Tablet
      } else {
        setSwiperSlides(1); // Mobile
      }
    };
    updateSwriperSlides();
    window.addEventListener("resize", updateSwriperSlides);
    return () => {
      window.removeEventListener("resize", updateSwriperSlides);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={swiperSlides}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mt-[15px] flex justify-center z-10"
      >
        {studenthead.map((coordinator, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="flex justify-center">
                <Image
                  src={coordinator.profile_pic}
                  alt={coordinator.name}
                  width={120}
                  className="rounded-full"
                />
              </div>
              <div className="mt-[10px] text-center">
                <span className="text-base md:text-xl font-bold">{coordinator.name}</span>
              </div>
              <div className="flex justify-center">
                <div>
                  <span>{coordinator.year},</span>
                </div>
                <div>
                  <span>&nbsp;{coordinator.branch}</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <span>{coordinator.role}</span>
                </div>
              </div>
              <div className="flex justify-center gap-5 mt-[10px]">
                <div>
                  <Link href={coordinator.instagram_link} target="_blank">
                    <Image
                      src={instagram}
                      alt="Instagram"
                      width={30}
                      className="hover:scale-110 duration-150"
                    />
                  </Link>
                </div>
                <div>
                  <Link href={coordinator.linkedin_link} target="_blank">
                    <Image
                      src={linkedin}
                      alt="LinkedIn"
                      width={30}
                      className="hover:scale-110 duration-150"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default coreteamslider;
