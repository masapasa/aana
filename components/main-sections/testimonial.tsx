import React from "react";
import Testimonials from "@/components/testimonialslider";

const testimonials = [
  {
    message:
      "All members of Aana are very supportive.",
  },
  {
    message:
      "It's been a journey of 8 months with Aana and all our doubts have been .",
  },
  {
    message: "All in all it was a great experience to be part of Aana.",
  },
  {
    message:
      "It was a wonderful experience with all the Coordinators and Members of Aana. We got to know and learn many new legal contents.",
  },
  {
    message:
      "The sessions conducted by Aana is very informative and helped me to develop my skills. I would like to thank all the working team for such amazing content.",
  },
  {
    message:
      "My experience till now in the group was awesome. Hope we would be doing such wonderful sessions in coming days.",
  },
  {
    message:
      "All the classes taken were very nice..... And every event is very well managed and amazing. Thank you Aana.",
  },
  {
    message:
      "All sessions were good and eager to earn more knowledge from the group.",
  },
  {
    message:
      "Thank you for taking extra effort to make sure the entire group was on the same page. It would have been easy for important details to slip through the cracks, but thanks to you, that didn't happen.",
  },
];

function testimonial() {
  return (
    <section className="h-fit container mx-auto">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">
            When excellence turns into words!!!
          </p>
        </div>
        <div className="mt-[10px] md:mt-[20px]">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

export default testimonial;