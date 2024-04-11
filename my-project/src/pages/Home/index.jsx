import React from "react";
import movingImage from "../../assets/MainImage2.jpg";
import LineImage from "../../assets/Line-1065.webp"; // Import your image
import { Button } from "@nextui-org/react";
import AboutNetrix from "../../components/AboutNetrix";
import Subsection2 from "../../components/Subsection2";

const Home = () => {
  return (
    <section className=" ">
      {/* Image */}
      <div className="relative h-screen lg:h-[100vh] xl:h-[120vh] 2xl:h-[150vh] flex justify-start bg-gray-700 lg:pb-20 xl:pb-40">
        <img
          src={movingImage}
          alt="Moving Image"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 animate-slide"
        />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col lg:w-1/2 h-full w-full pl-6  justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Cybersecurity And IT Solutions
          </h1>
          <h1 className="text-6xl font-bold pb-5 text-blue-300 text-shadow ">
            That Get Results
          </h1>
          <p className="pb-20 lg:text-xl">
            Choose the technical advisors you can trust to help you create a
            more profitable organisation
          </p>
        </div>
        <div className=" flex items-end  w-full lg:w-1/2 h-full px-6   gap-5 ">
          <Button
            radius="full"
            className="bg-gradient-to-tr lg:text-xl from-blue-400 to-purple-500 text-white font-bold shadow-lg transition-transform duration-300 hover:bg-purple-600 hover:scale-105"
          >
            Let's Talk About You
          </Button>
          <Button
            color="primary"
            variant="ghost"
            className="border rounded-xl lg:text-xl hover:bg-purple-500"
          >
            Get To Know Netrix
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:flex-row lg:relative lg:-top-10">
        <div className="w-full lg:w-80"></div>
        <div className="w-full lg:w-auto flex flex-col lg:flex-row px-6 lg:px-16 py-12 rounded-xl shadow-xl gap-4 bg-white justify-center">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold text-center lg:text-left">Why Netrix</p>
            <p className="text-center lg:text-left">
              See how our people, processes, and technology set us apart.
            </p>
            <Button
              color=""
              variant="light"
              className="w-full lg:w-1/2 text-red-500 hover:bg-red-300 hover:text-gray-200"
            >
              Learn More
            </Button>
          </div>
          <img src={LineImage} alt="" className="h-28 hidden lg:block" />
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold text-center lg:text-left">Solution Areas</p>
            <p className="text-center lg:text-left">
              We partner with you to build business-critical solutions across
              six key areas.
            </p>
            <Button
              color=""
              variant="light"
              className="w-full lg:w-1/2 hover:bg-red-300 hover:text-gray-200 text-red-500"
            >
              Learn More
            </Button>
          </div>
          <img src={LineImage} alt="" className="h-28 hidden lg:block" />
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="font-bold text-center lg:text-left">
              Learning Centers
            </p>
            <p className="text-center lg:text-left">
              Explore resources like best practices, user training, trends,
              news, and more.
            </p>
            <Button
              color=""
              variant="light"
              className="w-full lg:w-1/2 text-red-500 hover:bg-red-300 hover:text-gray-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <AboutNetrix />
      <Subsection2 />
    </section>
  );
};

export default Home;
