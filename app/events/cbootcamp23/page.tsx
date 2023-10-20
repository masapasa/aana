import React from "react";
import Image from "next/image";
import Link from "next/link";

import cbootcampposter from "@/assets/images/cbootcampposter.webp";

function CBOOTCAMP() {
  return (
    <>
      <header className="bg-[#0A146E]  text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/10Yj7YIt464DSrsc6PrTFuwxgULbp644s/view?usp=share_link"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center">Notice</p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/KjCB38P1Y1XmskC47" target="_blank">
              <button className="bg-white text-[#0A146E] p-2 rounded-full hover:bg-transparent hover:text-white border-white border text-center ease-in-out duration-300">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="text-center my-4 mx-16">
          <p className="bg-[#0A146E] text-2xl lg:text-6xl text-yellow-400 font-bold rounded-xl">
            Legal Day
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={cbootcampposter} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                Legal consultation and representation in an orphanage in Kathmandu.
                </p>
                <br />
                <p className="text-left md:text-center">
                  Join us for: <br />
                  • Both online and offline event 💻 <br />
                  • Problem-solving activities 🧑‍💻 <br />
                  • Engaging assignments 📙 <br />• Helpful doubt-solving sessions 📚
                </p>
                <br />
              </div>
            </div>
            <div className="text-lg md:text-4xl mx-16">
              <div className="w-fit mx-auto text-left md:text-center">
                <div>
                  <p>
                    <b>Starting:</b> 25 December, 2023
                  </p>
                </div>
                <div>
                  <p>
                    <b>Offline:</b> Wednesday 1:30PM - 3:30PM, at 4F4
                  </p>
                  <p>
                    <b>Online:</b> Monday and Saturday, 5:30PM to 7:00PM
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> Hybrid
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 text-center mx-8 text-sm sm:text-xl">
              <p>
                <b>Legal WhatsApp Group: </b>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://chat.whatsapp.com/Jl6VFqm6t7h1sgyA63hrfW"
                  target="_blank"
                >
                  https://chat.whatsapp.com/Jl6VFqm6t7h1sgyA63hrfW
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CBOOTCAMP;
