import Container from "./container";

export default function Hero() {
  return (
    <div id="home">
      <Container className="flex flex-wrap">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center w-full mx-auto">
          <div className="md:max-w-xl show-animate-to-bottom">
            <h1 className="text-center  font-extrabold ">
              <p className="text-4xl lg:text-6xl ">Welcome to</p>
              <p className="text-6xl text-title">OCTOPUS</p>
            </h1>
            <p className="py-5 text-xl lg:text-3xl text-center">
              <span className="font-extrabold text-2xl lg:text-4xl">
                OCTOPUS
              </span>{" "}
              is a blockchain platform for marine conservation organizations and
              football games.
            </p>
            <div className="mx-auto text-center mt-10">
              <button className="p-6 text-white min-w-[300px] text-xl rounded-3xl transition-all bg-gradient-btn hover:bg-gradient-btn-hover">
                Explore
              </button>
            </div>
          </div>
          <div className="text-center animate-to-bottom-infinite w-full">
            <img
              src="/img/octopus.png"
              alt="OCTOPUS"
              className="mx-auto w-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
