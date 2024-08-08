import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Leo
            <span className="text-purple-500">Blog</span>
          </div>
        </Link>
        {/* <div className="flex items-center"> Ajuste aqui 
          <a 
            href="http://lrportifolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg dark:text-amber-50"
          >
            Sobre mim
          </a>
        </div> */}
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
