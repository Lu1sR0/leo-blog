"use client";

import React, { useState } from "react";

const Sobremim = () => {
  useState(false);

  return (
    <div>
      <br />
      <br />
      <br />
      <section className="pt-12">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl dark:text-amber-50">
                Fala ai,me Chamo Leonardo
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-amber-50">
                sou apaixonaod por jogos e filmes e este é meu blog
              </p>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-amber-50">
                ⚡️ Minha redes sociais
              </p>
              <div className="mt-6 space-y-6 lg:space-y-8">
                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900 dark:text-amber-50">
                      <a href="#" title="">
                        Instagram
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900 dark:text-amber-50">
                      <a href="#" title="">
                        LetterBox
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900 dark:text-amber-50">
                      <a href="#" title="">
                        Mais alguma
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-end lg:col-span-5">
              <img
                className="w-full mx-auto"
                src="https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/421076201_478505254827453_8267270751636678422_n.jpg?ccb=11-4&oh=01_Q5AaINs4_5e4894JxDv3lZ56--EXSlmDnwQ_-jKb_O5FyFjO&oe=66C246C9&_nc_sid=5e03e0&_nc_cat=104"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobremim;
