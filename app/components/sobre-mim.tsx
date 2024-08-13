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
                Sou o Leonardo Miranda Bezerra,
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-amber-50">
                amante da arte acima de tudo,mas também cineasta, músico,
                artista e escritor. Me aventuro a escrever críticas de filmes e
                textos sobre temas que eu tenho muito amor e quero expor o que
                penso sobre e esse aqui é um espaço para isso, espero que gostem
                e possam sair com algo novo sempre que lerem.
              </p>
            </div>

            <div className="self-end lg:order-last lg:pb-36 lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-amber-50">
                Minha redes sociais
              </p>
              <div className="mt-6 space-y-6 lg:space-y-8">
                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900 dark:text-amber-50">
                      <a  href="https://www.instagram.com/leo.mbz/" title="Meu Instagram" target="_blank">
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
                      src="https://play-lh.googleusercontent.com/PFcm5Ne2otuXxkCNgql_XtpHjYrlhIGGQRFaz9XLFg2wikmMP5YCv_OsvFe1PLDAvGg"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900 dark:text-amber-50">
                      <a href="https://letterboxd.com/leo_mbz/" title="Meu Letterboxd" target="_blank">
                        Letterboxd
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
                className="w-full mx-auto rounded-md "
                src="/leonardo-removebg-preview.png"
                alt="Autor do Blog,Diario Cinefilio"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobremim;
