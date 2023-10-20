import React from "react";

function section2() {
  return (
    <section className="h-fit container mx-auto " id="about">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div>
          <p className="text-5xl md:text-7xl font-bold pt-4">Why Join Us?</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto gap-10 mt-[10px] md:mt-[20px]">
          <div className="flex align-middle">
            <p className="text-justify text-sm md:text-base ml-1 lg:ml-4 mt-4 sm:my-auto h-fit">
            Aana is a non-profit organization in Nepal that provides legal consultation and representation
            for underrepresented and undereducated women. Founded by three lawyer advocates, Aana offers a
            safe space for women who often face legal and economic discrimination. we are seeking funding
            to support Aana’s mission and expand its reach.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <iframe
              className="w-4/5 aspect-video rounded-xl"
              src="https://www.youtube.com/embed/GtLxHohHEJ4?si=JGRX9g7X94UU7Dkm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section2;
