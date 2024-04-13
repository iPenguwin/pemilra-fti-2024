// import { teaserRef } from "../recoil/atoms";
// import { useRecoilValue } from "recoil";

const Hero = () => {
  // const ref = useRecoilValue(teaserRef);
  return (
    <>
      <div className="min-h-screen bg-[#022960]">
        <div className="hero absolute inset-0 z-10 min-h-screen w-full">
          <div className="hero-content text-center z-50">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl lg:text-8xl font-bold tracking-[0.1em] font-newsweekly">
                PEMILRA FTI UAJY<br />2024
              </h1>
              <p className="py-6 tracking-[0.1em] text-3xl font-newsweekly">
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
          <div className="absolute inset min-h-screen w-full bg-gradient-to-b from-[#022960]/0 to-[#022960]/90"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
