// import { teaserRef } from "../recoil/atoms";
// import { useRecoilValue } from "recoil";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import "./hero_animation.css";

const Hero = () => {
  // const ref = useRecoilValue(teaserRef);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <>
      <div ref={ref} className="relative grid h-screen w-full place-items-center overflow-hidden">
        <motion.div
          initial={{
            transform: "translateZ(8px) translateY(-2px)",
          }}
          animate={{
            transform: "translateZ(32px) translateY(-8px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          className="animasi_judul relative z-10 md:text-9xl"
        >
          <div className="flex flex-row justify-center">
            <div className="hidden lg:block petir_kiri -mt-12">
              <div className="petir_kiri1" style={{ position: "relative", right: "-50%" }}>
                <div style={{ maxWidth: "20%", maxHeight: "50vh" }}>
                  <img
                    src="/images/petir/image/1.webp"
                    style={{
                      position: "absolute",
                      top: "-3.5%",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "40%", maxHeight: "100vh" }}>
                  <img
                    src="/images/petir/shadow/1.webp"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div
                className="petir_kiri2"
                style={{ position: "relative", right: "-50%", top: "40%" }}
              >
                <div style={{ maxWidth: "20%", maxHeight: "50vh" }}>
                  <img
                    src="/images/petir/image/2.webp"
                    style={{
                      position: "absolute",
                      top: "-10%",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "40%", maxHeight: "50vh" }}>
                  <img
                    src="/images/petir/shadow/2.webp"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="judul_mid">
              <div
                style={{
                  maxWidth: "90vw",
                  maxHeight: "50vh",
                  marginTop: "-10%",
                }}
              >
                <img
                  src="/images/title/pemilu_raya.webp"
                  alt="Pemilu Raya"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  maxWidth: "90vw",
                  maxHeight: "45vh",
                }}
              >
                <img
                  src="/images/title/fti_uajy.webp"
                  alt="Pemilu Raya"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            <div className="hidden lg:block petir_kanan -mt-5 ml-4">
              <div className="petir_kanan1" style={{ position: "relative" }}>
                <div style={{ maxWidth: "40%", maxHeight: "50vh" }}>
                  <img
                    src="/images/petir/image/3.webp"
                    style={{
                      position: "absolute",
                      top: "-8%",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "45%", maxHeight: "100vh" }}>
                  <img
                    src="/images/petir/shadow/3.webp"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <div className="petir_kanan2" style={{ position: "relative", top: "40%" }}>
                <div style={{ maxWidth: "20%", maxHeight: "50vh" }}>
                  <img
                    src="/images/petir/image/4.webp"
                    style={{
                      position: "absolute",
                      top: "-3%",
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "43%", maxHeight: "100vh" }}>
                  <img
                    src="/images/petir/shadow/4.webp"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="judul_tema hero-content z-50 -mt-20 text-center">
          <div className="-mt-48 lg:-mt-48 flex flex-col items-center justify-center">
            <p className="relative py-6 font-newsweekly text-3xl text-[#032960]">
              “Redefining Leadership: Empowering Servant Leaders, Creating Impactful Change”
            </p>
            <button
              className="btn-primary btn"
              onClick={() =>
                document.getElementById("teaser")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Read More
            </button>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/images/black_people.webp), url(/images/bgonly.webp)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            marginBottom: "-rem",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/images/paper_bawah.webp)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            marginBottom: "-2.5rem",
          }}
        />
      </div>
      {/* <div className="inset absolute min-h-screen w-full bg-gradient-to-b from-[#022960]/0 to-[#022960]/90"></div> */}
    </>
  );
};

export default Hero;
