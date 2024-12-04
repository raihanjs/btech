import phone from "../../assets/mobile-jumping.png";
export default function Hero() {
  return (
    <section className="hero md:mt-20">
      <div className="container">
        <div className="md:flex justify-between">
          {/* Banner */}
          <div className="bg-[#F4E2D9] h-[80vh] -ml-[10vw] pt-20 md:pt-0 pr-10 xl:pr-20 pb-20 rounded-br-[50vw] md:rounded-br-[10vw]">
            <div className="ml-[10vw] md:w-[40vw] h-[100%] flex gap-8 flex-col md:justify-end">
              <h2 className="text-3xl md:text-4xl xl:text-6xl font-medium">
                All Can Be <br /> Handled This Apps
              </h2>
              <p className="text-lg">The Business Solution</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div>
                <button
                  className="bg-[#F42C00] text-white py-2 px-8 hover:bg-black"
                  style={{ borderRadius: "0px 20px 20px 20px" }}
                >
                  Download Now
                </button>
              </div>
            </div>
          </div>
          {/* Jumping Phone */}
          <div className="-mt-48 md:mt-0 flex justify-end">
            <img
              src={phone}
              className="mx-auto md:mx-0 w-[80%] xl:w-96 md:mt-60 "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
