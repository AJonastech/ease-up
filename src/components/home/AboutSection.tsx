"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Heading2 from "../ui/Heading2";
import { useRef } from "react";
function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0 0.5"],
  });
  const scale = useTransform(scrollYProgress, [0 ,1], [0.5,1])

  return (
    <section
      id="about"
  
      className="w-full  lg:px-12 px-3 sm:px-6 py-12 lg:py-0   mt-[90vh] lg:mt-[100vh] z-10 relative min-h-[90vh]   flex items-center  bg-background"
    >
      <div     ref={containerRef} className="lg:flex container mx-auto gap-x-12 items-center justify-center h-fit">
        <div className="text-[15px] text-center lg:text-left basis-1/2 flex flex-col justify-center gap-y-6">
         <Heading2>
          About Us
         </Heading2>
          <motion.p viewport={{once:true}} initial={{y:50}} transition={{type:"tween"}} whileInView={{y:0}}>
            EaseUp is committed to bridging the gap between clients seeking
            reliable home services and skilled handymen looking for
            opportunities.
          </motion.p>
          <motion.p viewport={{once:true}}initial={{y:50}} transition={{type:"tween"}} whileInView={{y:0}}>
            Our mobile app, with its user-friendly interface and advanced
            features, exemplifies our dedication to making the entire process
            hassle-free and transparent.
          </motion.p>
          <motion.p viewport={{once:true}} initial={{y:50}} transition={{type:"tween"}} whileInView={{y:0}}>
            Whether youre a client in need of home improvement services or a
            skilled tradesperson seeking opportunities, EaseUp and the Beaver
            mobile app are here to simplify your experience.
          </motion.p>
        </div>
        <motion.div
          style={{ scale}}
          className="lg:basis-1/2  h-[450px] lg:h-[450px] mt-8  "
        >
          <div className="relative bg-[url('/about.png')] bg-no-repeat bg-cover  cursor-pointer transition-all ease-in-out  w-full h-full rounded-[50px] lg:rounded-[100px] overflow-hidden "></div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
