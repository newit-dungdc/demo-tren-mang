import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = ["Home", "About", "Features", "Roadmap", "Tokenomics"];

  return (
    <div className="w-full bg-bg fixed z-50 ease-in duration-300">
      <div className="mx-auto max-w-7xl">
        <nav className="relative container z-50 flex flex-wrap items-center justify-between py-4 px-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <a className="flex items-center space-x-2 text-2xl font-extrabold">
                      <span>
                        <img
                          src="/logo.png"
                          alt="logo"
                          className="w-10 lg:w-14 rounded"
                        />
                      </span>
                      <span>OCTOPUS</span>
                    </a>
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto bg-white text-bg rounded-md lg:hidden hover:text-bg focus:text-bg focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full mt-5 lg:hidden">
                    <>
                      {navigation.map((item, index) => (
                        <Link key={index} href={`/#${item.toLowerCase()}`}>
                          <a className="w-full px-4 py-2 -ml-4 rounded-md hover:font-bold focus:font-bold focus:bg-default-100 focus:outline-none">
                            {item}
                          </a>
                        </Link>
                      ))}
                      <div className="w-full lg:flex lg:items-center">
                        <Link href="https://t.me/OctopusGlobal">
                          <a className="inline-block p-2 " target={"_blank"}>
                            <img
                              src="./img/telegram.png"
                              alt="Telegram"
                              className="w-6"
                            />
                          </a>
                        </Link>
                        <Link href="https://twitter.com/Paul_OctopusBSC">
                          <a className="inline-block p-2" target={"_blank"}>
                            <img
                              src="./img/twitter.png"
                              alt="Twitter"
                              className="w-6"
                            />
                          </a>
                        </Link>
                      </div>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden lg:flex">
            <div className="text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map((menu, index) => (
                  <li className="mr-3 nav__item" key={index}>
                    <Link href={`/#${menu.toLowerCase()}`}>
                      <a className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md hover:bg-gradient-header focus:bg-gradient-header focus:outline-none">
                        {menu}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mr-3 space-x-4 lg:flex nav__item">
              <Link href="https://t.me/OctopusGlobal">
                <a className="inline-block px-1 py-2 " target={"_blank"}>
                  <img
                    src="./img/telegram.png"
                    alt="Telegram"
                    className="w-6"
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/Paul_OctopusBSC">
                <a className="inline-block px-1 py-2 " target={"_blank"}>
                  <img src="./img/twitter.png" alt="Twitter" className="w-6" />
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
