import Container from "./container";

export default function Features() {
  return (
    <div id="features">
      <Container className="flex items-center ">
        <div className="text-center">
          <h2 className="text-5xl text-title font-extrabold leading-snug tracking-tight lg:leading-tight xl:text-6xl xl:leading-tight show-animate-to-bottom">
            Network Features
          </h2>
          <div className="mt-8 text-xl leading-normal w-full lg:w-2/3 mx-auto show-animate-to-bottom">
            User-friendly and feature-rich wallet released as an application for
            mobile devices The most simple solution to receive and sent funds.
            You will only need an e-mail to get started
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-10 show-animate-to-right">
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500 group transition-all ease-in duration-300">
              <img
                src="/img/receipt.png"
                alt="Limit Oders"
                className="h-16 mx-auto"
              />
              <div className="text-2xl font-semibold mt-8">Limit Oders</div>
              <div className="text-base font-normal">
                Create, sell, swap and cross-chainNFTs with ease.
              </div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500 group transition-all ease-in duration-300">
              <img src="/img/picture.png" alt="NFTs" className="h-16 mx-auto" />
              <div className="text-2xl font-semibold mt-8">NFTs</div>
              <div className="text-base font-normal">
                Create, sell, swap and cross-chainNFTs with ease.
              </div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500 group transition-all ease-in duration-300">
              <img
                src="/img/finance.png"
                alt="Crypto Loans"
                className="h-16 mx-auto"
              />
              <div className="text-2xl font-semibold mt-8">Crypto Loans</div>
              <div className="text-base font-normal">
                Create, sell, swap and cross-chainNFTs with ease.
              </div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500 group transition-all ease-in duration-300">
              <img
                src="/img/smart-contracts.png"
                alt="Smart Contracts"
                className="h-16 mx-auto"
              />
              <div className="text-2xl font-semibold mt-8">Smart Contracts</div>
              <div className="text-base font-normal">
                Create, sell, swap and cross-chainNFTs with ease.
              </div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500 group transition-all ease-in duration-300">
              <img
                src="/img/decentralized.png"
                alt="Fully Decentralized"
                className="h-16 mx-auto"
              />
              <div className="text-2xl font-semibold mt-8">
                Fully Decentralized
              </div>
              <div className="text-base font-normal">
                Create, sell, swap and cross-chainNFTs with ease.
              </div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500 group transition-all ease-in duration-300">
              <img
                src="/img/link.png"
                alt="Cross-Chain Sway"
                className="h-16 mx-auto"
              />
              <div className="text-2xl font-semibold mt-8">
                Cross-Chain Sway
              </div>
              <div className="text-base font-normal">
                Create, sell, swap and cross-chainNFTs with ease.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
