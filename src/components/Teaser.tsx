const Teaser = () => {
  return (
    <>
      <div
        id="teaser"
        className="flex flex-col items-center justify-center gap-8 bg-[#023A89] p-4 pb-24"
      >
        <h1 className="font-newsweekly text-5xl font-bold tracking-[0.1em]">TEASER</h1>
        <div className="h-84 card flex w-full max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/lVbLlVnxlH8?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              frameBorder={0}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Teaser;
