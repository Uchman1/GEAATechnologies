import Reveal from "@/components/motion/Reveal";
import { beliefs } from "@/lib/site-data";

export default function WhatWeBelieve() {
  return (
    <section className="bg-navy-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">What we believe</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 border-t border-white/15 lg:mt-20">
          {beliefs.map((belief) => (
            <p
              key={belief}
              className="border-b border-white/15 py-8 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl"
            >
              {belief}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
