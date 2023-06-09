import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div container mx-auto>
        <div className="flex flex-col lg:flex-row gap-x-10 lg:gap-y-0 h-screen">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <h2 className="h2 leading-tight text-accent">
              My latest <br /> work.
            </h2>
            <p className="max-w-sm mb-16">
              
              I have completed several projects, both for myself and for clients. Most of the projects have their repositories in my github account, and I have deployed  most of them ready for use to my clients.
              
            </p>
            <button className="btn btn-sm">View all projects</button>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/20 rounded-*1">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              src={Img1}
              alt=""
              className="group-hover:scale-125 transition-all duration-500"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient"> UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3*1 text-white">Project Title</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              src={Img1}
              alt=""
              className="group-hover:scale-125 transition-all duration-500"
            />
            {/* <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"> */}
              {/* <span className="text-gradient"> UI/UX Design</span> */}
            {/* </div> */}
            {/* <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50"> */}
              {/* <span className="text-3*1 text-white">Project Title</span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
