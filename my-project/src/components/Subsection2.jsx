import React from "react";
import Algnedimg from "../assets/Algnedimg.png";
import cyberimg from "../assets/cyberimg.png";
import netrixoutlook from "../assets/netrixoutlook.png";
import resultimg from "../assets/resultimg.png";
import smartimg from "../assets/smartimg.png";
import trueimg from "../assets/trueimg.png";
import CarouselWithPagination from "./pagination";

const Subsection2 = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col px-20 py-10 gap-5">
        <div className="flex flex-col ">
          <img src={Algnedimg} alt="" className="pb-3 w-12 h-16" />
          <p className="text-xl font-bold pb-3">Aligned Solutions</p>
          <p className="text-[#747E87]">
            We will only recommend services and approaches that serve your
            greatest needs and that lie within your budget.
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={smartimg} alt="" className="pb-3 w-12 h-16" />
          <p className="text-xl font-bold pb-3">Smart Investments</p>
          <p className="text-[#747E87]">
            We will never encourage you to invest in technologies unless they
            achieve lasting, measurable results against your defined objectives.
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={trueimg} alt="" className="pb-3 w-12 h-16" />
          <p className="text-xl font-bold pb-3">True Partnership</p>
          <p className="text-[#747E87]">
            No one knows your business the way you do, that's why we've honed a
            focused approach to listening at the forefront of every engagement.
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={cyberimg} alt="" className="pb-3 w-12 h-16" />
          <p className="text-xl font-bold pb-3">Cybersecurity First</p>
          <p className="text-[#747E87]">
            Cybersecurity is at the forefront of everything we do. This is one
            reason Microsoft chose us as one of its first Managed XDR validated
            partners in 2022.
          </p>
        </div>
        <div className="flex flex-col ">
          <img src={resultimg} alt="" className="pb-3 w-12 h-16" />
          <p className="text-xl font-bold pb-3">Results-Driven</p>
          <p className="text-[#747E87]">
            It's all about the results. We help clients achieve measurable
            impacts across an ever-growing list of challenges.et.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 p-4 lg:p-16 w-full bg-gradient-to-t from-[#7044D6]  to-[#37057A]">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 ">
          <p className="text-xs lg:text-sm text-white pb-6">
            2024 SECURITY TRENDS
          </p>
          <h2 className="text-3xl lg:text-5xl text-white">
            Cybersecurity Outlook
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#00C9FF]">
            Research Report
          </h2>
          <p className="text-white pb-5">
            Organizations continue to face a multitude of cybersecurity
            challenges in 2024, from a shortage of skilled workers to
            increasingly sophisticated cyber-threats due largely in part to
            advancements in artificial intelligence. Plus, with economic
            uncertainty looming, IT decision makers face increasing pressure to
            make the most of every dollar invested. Download our 2024
            Cybersecurity Outlook Research Report to learn how IT and security
            decision makers are meeting these challenges.
          </p>
          <button className="border border-white text-white rounded-3xl  px-2 w-44 py-2">
            Download
          </button>
        </div>
        <div class=" lg:w-[37rem] w-64 lg:h-[25rem] h:64 rounded-xl lg:pl-10">
          <img
            src={netrixoutlook}
            alt="Your Image"
            class="  w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <CarouselWithPagination />
    </div>
  );
};

export default Subsection2;
