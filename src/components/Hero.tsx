// import { teaserRef } from "../recoil/atoms";
// import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";

const Hero = () => {
  // const ref = useRecoilValue(teaserRef);
  return (
    <>
      <div className="hero min-h-screen bg-[url('/images/bg2024.webp')]">
        <div className="min hero absolute inset-0 z-10 grid w-full">
          <div className="title_animate -mt-44 flex items-center justify-between">
            <div className="hidden lg:block lightning_left ml-2">
              <div
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="lighting_1 w-32 h-32 lg:w-96 w-64 bg-[url('/images/petir/shadow/1.webp')] bg-contain bg-no-repeat drop-shadow-lg"
              >
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
                  className="w-32 h-32 lg:w-96 bg-[url('/images/petir/image/1.webp')] bg-contain bg-no-repeat drop-shadow-lg"
                ></motion.div>
              </div>
              <div
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="lighting_2 mt-20 h-20 lg:w-60 bg-[url('/images/petir/shadow/2.webp')] bg-contain bg-no-repeat drop-shadow-lg"
              >
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
                  className="h-20 w-60 bg-[url('/images/petir/image/2.webp')] bg-contain bg-no-repeat drop-shadow-lg"
                ></motion.div>
              </div>
            </div>
            <div className="middle lg:-ml-28 lg:mr-10">
              <div className="pemilu_raya">
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    height: "20vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="w-[80vw] lg:w-[40vw] -mt-20 lg:mt-0"
                >
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
                    className="h-full w-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/title/pemilu_raya.webp')`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="fti_2024 -mt-26">
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    height: "20vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="w-[80vw] lg:w-[40vw] -mt-12 lg:mt-0"
                >
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
                    className="h-full w-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/title/fti_uajy.webp')`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lightning_right">
              <div
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="lighting_3 w-32 h-20 lg:w-60 bg-[url('/images/petir/shadow/3.webp')] bg-contain bg-no-repeat drop-shadow-lg"
              >
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
                  className="w-32 h-20 lg:w-60 bg-[url('/images/petir/image/3.webp')] bg-contain bg-no-repeat drop-shadow-lg"
                ></motion.div>
              </div>
              <div
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="lighting_4 mt-16 h-32 w-52 bg-[url('/images/petir/shadow/4.webp')] bg-contain bg-no-repeat drop-shadow-lg"
              >
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
                  className="h-32 w-52 bg-[url('/images/petir/image/4.webp')] bg-contain bg-no-repeat drop-shadow-lg"
                ></motion.div>
              </div>
            </div>
          </div>
          <div className="hero-content z-50 text-center">
            <div className="mt-52 flex flex-col items-center justify-center">
              <p className="py-6 font-newsweekly text-3xl text-[#032960]">
                “Redefining Leadership: Empowering Servant Leaders, Creating
                <br />
                Impactful Change”
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
          {/* <div className="inset absolute min-h-screen w-full bg-gradient-to-b from-[#022960]/0 to-[#022960]/90"></div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
