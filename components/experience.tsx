"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba( 255, 255, 255, 0.15 )",
                boxShadow: "-10px 11px 46px -24px rgba(0,0,0,0.6)",
                WebkitBoxShadow: "-10px 11px 46px -24px rgba(0,0,0,0.6)",
                MozBoxShadow: "-10px 11px 46px -24px rgba(0,0,0,0.6)",
                border: "non",
                textAlign: "center",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255, 0.15)",
                fontSize: "1.5rem",
                color: theme === "light" ? "rgba(63,60,60,0.52)" : "white",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-white">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0 dark:text-white/70">
                {experience.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
