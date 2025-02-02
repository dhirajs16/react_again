import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    window.innerWidth < 760
      ? setVideoSrc(smallHeroVideo)
      : setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", {y: -100, delay: 2.5, opacity: 1})
  }, []);

  return (
    <section className="w-screen nav-height relative">
      {/* Hero title and video */}
      <div className="w-full h-5/6 flex-center flex-col">
        <p id="hero-title" className="text-sm hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video autoPlay key={videoSrc} playsInline={true} muted className="pointer-events-none outline-none">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* buy button */}
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="" className="btn">Buy</a>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
