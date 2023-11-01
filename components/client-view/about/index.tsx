"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "@/public/assets/about-image.png";
import LogoClouds from "@/components/logo-clouds/logo-clouds";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface PropsAbout {
  aboutme: String;
  numberOfProjects: String;
  yearsOfExperience: String;
  numberOfClients: String;
  skills: String;
}

interface PropsData {
  data: PropsAbout;
}
export default function ClientAboutView({ data }: PropsData) {
  const setVariants = useMemo(() => variants(), []);
  console.log("numero de clientes", data?.numberOfProjects);
  console.log("numero de clientes", data);

  const aboutDataInfo = [
    {
      label: "Clientes",
      value: data?.numberOfClients || "1",
    },
    {
      label: "Projetos",
      value: data?.numberOfProjects || "1",
    },
    {
      label: "Experiências",
      value: data?.yearsOfExperience || "1",
    },
  ];

  const headingText = "Por que me contratar para o seu próximo projeto?";

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="w-full flex">
        <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-main bg-ehite-500 z-10">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
                ${
                  index === 0
                    ? "sm:justify-start"
                    : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-end"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
              key={index}
              custom={{ duration: 2 + index }}
              variants={setVariants}
            >
              <div className="flex m-0 w-40 sm:w-auto">
                <div className="flex flex-col">
                  <p className="text-[50px] text-green-main font-bold">
                    {infoItem.value}+
                  </p>
                  <p className="text-[25px] font-bold text-[#000000]">
                    {infoItem.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>
      <LogoClouds />
    </div>
  );
}
