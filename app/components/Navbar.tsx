"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Arvo } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { usePathname } from "next/navigation"; // Importing usePathname

const font = Arvo({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative mx-auto max-w-5xl px-6 border-b-2 border-neutral-900 dark:border-neutral-50">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Diário
            <span> Cinéfilo</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link href="/tags/criticas">
            <div
              className={`${font.className} text-xl dark:text-amber-50  ${
                pathname === "/tags/criticas"
                  ? "text-purple-500 dark:text-purple-500"
                  : "border-transparent  hover:text-purple-500  dark:hover:text-purple-500"
              }`}
            >
              Críticas
            </div>
          </Link>
          <Link href="/tags/artigos">
            <div
              className={`${font.className} text-xl dark:text-amber-50  ${
                pathname === "/tags/artigos"
                  ? "text-purple-500 dark:text-purple-500"
                  : "border-transparent  hover:text-purple-500  dark:hover:text-purple-500"
              }`}
            >
              Artigos
            </div>
          </Link>
          <Link href="/tags/meus-filmes">
            <div
              className={`${font.className} text-xl dark:text-amber-50  ${
                pathname === "/tags/meus-filmes"
                  ? "text-purple-500 dark:text-purple-500"
                  : "border-transparent hover:text-purple-500 dark:hover:text-purple-500"
              }`}
            >
              Meus
              <span> filmes</span>
            </div>
          </Link>
          <Link href="/tags">
            <div
              className={`${font.className} text-xl dark:text-amber-50 ${
                pathname === "/tags"
                  ? "text-purple-500 dark:text-purple-500"
                  : "border-transparent hover:text-purple-500  dark:hover:text-purple-500"
              }`}
            >
              Categorias
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`${font.className} text-xl dark:text-amber-50  ${
                pathname === "/about"
                  ? "text-purple-500 dark:text-purple-500"
                  : "border-transparent hover:text-purple-500 dark:hover:text-purple-500"
              }`}
            >
              Sobre
              <span> mim</span>
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl dark:text-amber-50">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-neutral-100 dark:bg-black bg-opacity-90 dark:bg-opacity-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-3xl text-neutral-900 dark:text-amber-50"
            >
              <FaTimes />
            </button>
           
            <Link href="/tags/criticas">
              <div
                className={`${font.className} text-2xl my-4 ${
                  pathname === "/tags/criticas"
                    ? "text-purple-500"
                    : "text-neutral-900 dark:text-amber-50 hover:text-purple-500"
                }`}
                onClick={toggleMenu}
              >
                Criticas
              </div>
            </Link>
            <Link href="/tags/artigos">
              <div
                className={`${font.className} text-2xl my-4 ${
                  pathname === "/tags/artigos"
                    ? "text-purple-500"
                    : "text-neutral-900 dark:text-amber-50 hover:text-purple-500"
                }`}
                onClick={toggleMenu}
              >
                Artigos
              </div>
            </Link>
            <Link href="/tags/meus-filmes">
              <div
                className={`${font.className} text-2xl my-4 ${
                  pathname === "/tags/meus-filmes"
                    ? "text-purple-500"
                    : "text-neutral-900 dark:text-amber-50 hover:text-purple-500"
                }`}
                onClick={toggleMenu}
              >
                Meus
                <span> Filmes</span>
              </div>
            </Link>
            <Link href="/tags">
              <div
                className={`${font.className} text-2xl my-4 ${
                  pathname === "/tags"
                    ? "text-purple-500"
                    : "text-neutral-900 dark:text-amber-50 hover:text-purple-500"
                }`}
                onClick={toggleMenu}
              >
                Categorias
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`${font.className} text-2xl my-4 ${
                  pathname === "/about"
                    ? "text-purple-500"
                    : "text-neutral-900 dark:text-amber-50 hover:text-purple-500"
                }`}
                onClick={toggleMenu}
              >
                Sobre
                <span> mim</span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating ThemeSwitch */}
      <div className="fixed bottom-4 left-4 z-20">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
