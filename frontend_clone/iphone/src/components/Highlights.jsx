import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {watchImg, rightImg } from "../utils"
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0}),
    gsap.to('.link', {opacity: 1, y: 0, duration: 1, stagger: 0.25})
  }, [])

  return (
    <section id="highlights" className="w-screen bg-zinc h-full common-padding">
      <div className="screen-max-width">
        <div className="w-full mb-12 md:flex items-end justify-between">
          {/* Highlights title */}
          <h1 id="title" className="section-heading">
            Get the Highlights.
          </h1>

          {/* Get more links */}
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the flim
              <img src={watchImg} alt="watch" className="pl-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="pl-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights;
