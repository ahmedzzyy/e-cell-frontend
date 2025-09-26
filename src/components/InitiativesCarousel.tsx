"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import InitiativeCard from "./InitiativeCard";

gsap.registerPlugin(ScrollTrigger);

type InitiativeProps = {
  heading: string;
  description: string;
  isEnabled?: boolean;
  link?: string;
};

type Props = {
  initiatives: InitiativeProps[];
};

export default function InitiativesCarousel({ initiatives }: Props) {
  const initiativeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray(".initiative-card");

      if (sections.length > 1) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: initiativeRef.current,
            pin: true,
            scrub: 1,
            onresize: () => ScrollTrigger.refresh(),
            invalidateOnRefresh: true,
            start: "top top+=160",
            end: () =>
              "+=" +
              (initiativeRef.current?.offsetWidth || 0) * (sections.length - 1),
          },
        });
      }
    }, containerRef);

    return () => context.revert();
  }, [initiatives]);

  return (
    <div ref={initiativeRef} className="overflow-hidden">
      <div ref={containerRef} className="flex">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="initiative-card flex-shrink-0 w-full px-4"
          >
            <InitiativeCard
              heading={initiative.heading}
              description={initiative.description}
              isEnabled={initiative.isEnabled}
              link={initiative.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
