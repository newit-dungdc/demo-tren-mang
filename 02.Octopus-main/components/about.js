import Container from "./container";

export default function About() {
  return (
    <div className="min-h-screen" id="about">
      <Container className="flex flex-wrap">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8 items-center w-full mx-auto">
          <div className="text-center">
            <img src="/img/about.png" alt="About" className="w-full mx-auto" />
          </div>
          <div className="text-center text-white md:max-w-[50%] show-animate-to-bottom">
            <h2 className="text-5xl text-title font-extrabold leading-snug tracking-tight lg:leading-tight xl:text-6xl xl:leading-tight ">
              ABOUT
            </h2>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-justify ">
              <span className="font-extrabold text-2xl lg:text-3xl">
                OCTOPUS
              </span>{" "}
              will be the next meme pioneer and a gaming platform for football
              lovers. As players can collect NFTs and predict Qatar 2022 World
              Cup matches.
              <br />
              <br />
              Did you remember the prophet Paul the octopus? In the 2010 World
              Cup, Paul the octopus guessed all eight games with a correct rate
              of 100%.
              <br />
              <br />
              Who is the next Paul the{" "}
              <span className="font-extrabold text-2xl lg:text-3xl">
                OCTOPUS?
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
