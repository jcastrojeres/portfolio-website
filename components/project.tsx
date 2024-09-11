"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        transition: scrollYProgress,
      }}
      className="mb-5 sm:mb-8 last:mb-0"
    >
      <section className="group relative bg-gray-100 max-w-[49rem] rounded-sm border border-black/5 overflow-hidden sm:pr-8  sm:h-[25rem]  shadow-md dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition ">
        <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex-col h-full ">
          <h3 className="text-2xl font-semibold dark:text-white/80">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm sm:mt-auto dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7] uppercase tracking-wider text-white text-sm rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project i worked on"
          quality={95}
          className="absolute hidden sm:block top-20 -right-60 w-[39.25rem] rounded-t-lg shadow-2xl group-hover:scale-[1.09] group-hover:translate-x-2 group-hover:translate-y-2 group-hover:-rotate-3 transition"
        />
      </section>
    </motion.div>
  );
}
