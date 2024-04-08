import React from "react";
import DifferenceImg from "../assets/DifferenceImg.jpeg";
import DifferenceImg2 from "../assets/Differenceimg2.webp";

const AboutNetrix = () => {
  return (
    <div className="px-10">
      <div className="flex lg:flex-row flex-col p-8 gap-5 items-center justify-between">
        <div className="w-full lg:w-1/2">
          <p className="text-xs lg:text-sm text-red-600 pb-6">
            ABOUT NETRIX GLOBAL
          </p>
          <h2 className="text-3xl lg:text-5xl text-[#330073]">
            Holistic Approach to
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#7347DB]">
            Cybersecurity & IT Challenges
          </h2>
        </div>
        <div className="w-full lg:w-2/3">
          <p className="text-sm lg:text-xl">
            Netrix Global is an award-winning MSSP and MSP that designs,
            delivers, and supports business-critical solutions for our clients
            across the full spectrum of their complex, risky, and ever-changing
            IT infrastructures. While other providers deliver commoditized
            projects that only address point-in-time challenges, we are unique
            in how we partner with our clients to achieve real business outcomes
            that create lasting value. By continuously evaluating clients’
            evolving needs, we ensure that their solutions are always on, always
            secure, and fully modernized.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5  p-8 w-full">
        <div class="relative lg:w-[35rem] w-64 lg:h-[28rem] h:64 bg-[#330073] rounded-xl">
          <img
            src={DifferenceImg}
            alt="Your Image"
            class="lg:absolute lg:top-[-10px] lg:left-[10px] w-full h-full rounded-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-5 pl-10">
          <p className="text-xs lg:text-sm text-red-600 pb-6">
            WHAT MAKES US DIFFERENT
          </p>
          <h2 className="text-3xl lg:text-5xl text-[#330073]">
            Achieving Real
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#7347DB]">
            Business Outcomes
          </h2>
          <p>
            What makes us different is our relentless pursuit of our clients’
            best interests. We are very selective in our hiring practices, so
            our clients work with only the most accomplished engineers, solution
            architects, and service professionals. You will never get our “B
            team” because we don’t have one. We provide the highest standards of
            service, which includes rapid response times to client outreach,
            fast resolution to issues, and ongoing monitoring of your
            environment.
          </p>
          <button className="border border-purple-500 text-purple-500 rounded-3xl  px-2 w-44 py-2">
            Why Netrix
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5  p-8 w-full">
        <div className="w-full lg:w-1/2 flex flex-col gap-5 pl-10">
          <p className="text-xs lg:text-sm text-red-600 pb-6">
            POWERING BUSINESS FORWARD
          </p>
          <h2 className="text-3xl lg:text-5xl text-[#330073]">
            Keeping Our Clients
          </h2>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#7347DB]">
            Ahead of Market Disruptions
          </h2>
          <p>
            We’ve all heard the words of caution shared by leading business
            strategists, investors, and technology leaders, “Adopt AI, or you’ll
            be out of business.” AI will soon become a fundamental part of our
            business infrastructures, changing the way we work, learn, travel,
            and communicate with each other. So how do you intelligently invest
            in AI quickly, since the manual on adopting this maturing technology
            continues to be written? Finding practical uses that drive real
            business outcomes takes a strong understanding of AI capabilities
            but an even stronger understanding of the root business challenges.
            Our methodology backed by our teams of data, AI, and ML experts,
            will keep your investments in AI strategic and your goals
            attainable.
          </p>
        </div>
        <div class="relative lg:w-[35rem] w-64 lg:h-[28rem] h:64 bg-[#330073] rounded-xl">
          <img
            src={DifferenceImg2}
            alt="Your Image"
            class="lg:absolute lg:top-[-10px] lg:left-[10px] w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutNetrix;
