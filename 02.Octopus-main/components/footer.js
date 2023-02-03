import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative container z-50 flex flex-wrap items-center justify-between py-4 px-8 mx-auto lg:justify-between xl:px-0">
          <Link href="/">
            <a className="flex items-center space-x-2 text-2xl font-bold text-white">
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
          <div className="mr-3 space-x-4 flex nav__item">
            <Link href="https://t.me/OctopusGlobal">
              <a className="inline-block px-1 py-2 " target={"_blank"}>
                <img src="./img/telegram.png" alt="Telegram" className="w-6" />
              </a>
            </Link>
            <Link href="https://twitter.com/Paul_OctopusBSC">
              <a className="inline-block px-1 py-2 " target={"_blank"}>
                <img src="./img/twitter.png" alt="Twitter" className="w-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
