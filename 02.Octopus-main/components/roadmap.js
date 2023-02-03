import Container from "./container";

export default function Roadmap() {
  return (
    <div id="roadmap">
      <Container className="flex items-center ">
        <div className="text-center">
          <h2 className="text-5xl text-title font-extrabold leading-snug tracking-tight lg:leading-tight xl:text-6xl xl:leading-tight show-animate-to-bottom">
            Roadmap
          </h2>
          <div className="mt-8 text-xl leading-normal w-full lg:w-2/3 mx-auto show-animate-to-bottom">
            In light of the changes that leading blockchains have recently made
            in their tokenomics, OCTOPUS Team is proposing a large-scale update
            of the network. It goal is to improve the economic mode and
            implement deflationary
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 justify-between mt-10 show-animate-fade-in">
            <div className="text-before show-animate-to-bottom">
              <ul className="circle-text list-disc relative text-base text-left">
                <li>Website construction.</li>
                <li>Tokenomics, Token Metrics.</li>
                <li>
                  Build a global Telegram community in English, Chinese,
                  Vietnamese.
                </li>
                <li>Do environmental protection events.</li>
                <li>Connecting KOLs & Big Partners.</li>
              </ul>
              <div className="circle relative mt-20 mx-auto w-32 h-32 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-3xl leading-normal">
                  SEP 2022
                </span>
              </div>
            </div>
            <div className="text-after mt-10 lg:mt-0 show-animate-to-top">
              <ul className="lg:hidden circle-text list-disc relative text-base text-left">
                <li>Presale on Pinksale.</li>
                <li>Listing Pancakeswap.</li>
                <li>Advertise Poocoin / Week.</li>
                <li>Reach 1000 members.</li>
                <li>TelegramGLB reaches 5000 Members.</li>
                <li>Listed on CMC and CGK.</li>
              </ul>
              <div className="circle relative mt-20 lg:mt-24 mx-auto mb-10 lg:mb-20 w-32 h-32 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-3xl leading-normal">
                  JAN 2023
                </span>
              </div>
              <ul className="hidden lg:block circle-text list-disc relative text-base text-left">
                <li>Presale on Pinksale.</li>
                <li>Listing Pancakeswap.</li>
                <li>Advertise Poocoin / Week.</li>
                <li>Reach 1000 members.</li>
                <li>TelegramGLB reaches 5000 Members.</li>
                <li>Listed on CMC and CGK.</li>
              </ul>
            </div>
            <div className="text-before show-animate-to-bottom">
              <ul className="circle-text list-disc relative text-base text-left">
                <li>Market release.</li>
                <li>Reach 3000 holders.</li>
                <li>Update Game.</li>
                <li>Advertise on major platforms like Facebook, Google.</li>
              </ul>
              <div className="circle relative mt-20 mx-auto w-32 h-32 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-3xl leading-normal">
                  MAY 2023
                </span>
              </div>
            </div>
            <div className="text-after mt-10 lg:mt-0 show-animate-to-top">
              <ul className="lg:hidden circle-text list-disc relative text-base text-left">
                <li>CEX Gate, Kucoin, Huobi, Binance...</li>
                <li>Update to improve.</li>
                <li>Reach 15000 Holders.</li>
                <li>Update website.</li>
                <li>Ama and binance.</li>
              </ul>
              <div className="circle relative mt-20 lg:mt-24 mx-auto mb-10 lg:mb-20 w-32 h-32 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-3xl leading-normal">
                  JUN 2023
                </span>
              </div>
              <ul className="hidden lg:block circle-text list-disc relative text-base text-left">
                <li>CEX Gate, Kucoin, Huobi, Binance...</li>
                <li>Update to improve.</li>
                <li>Reach 15000 Holders.</li>
                <li>Update website.</li>
                <li>Ama and binance.</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
