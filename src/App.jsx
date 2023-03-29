import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiFillLinkedin,
} from "react-icons/ai";
import dev from "/dev-ed-wave.png";
import design from "/design.png";
import code from "/code.png";
import cons from "/consulting.png";
import { work } from "./portfolio";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-darked transition-all duration-500">
        <section className="px-5 py-5 md:px-20 lg:px-40 transition-all duration-500 backdrop-blur-md sticky  top-0 z-10">
          <nav className="flex justify-between ">
            <h1 className="text-2xl dark:text-offwhite text-darked">Tohsaka</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-darked dark:text-offwhite"
                />
              </li>
              <li>
                <a
                  href=""
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className=" px-10 md:px-20 lg:px-40 ">
          <section className="min-h-screen">
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-green">
                Tohsaka
              </h2>
              <h3 className="text-2xl py-2 dark:text-white font-thin">
                Desarollador Front-end y Diseñador UI{" "}
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-offwhite">
                Soy apasionado por crear experiencias digitales atractivas y
                efectivas que mejoren la vida de los usuarios.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-green">
              <a href="">
                <AiOutlineTwitter />
              </a>
              <a href="">
                <AiOutlineDribbble />
              </a>
              <a href="">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
              <img src={dev} className="object-cover h-80 w-96" />
            </div>
          </section>
          <section className="mt-10">
            <div>
              <h3 className="text-3xl py-1 font-bold dark:text-white">
                Mis habilidades
              </h3>
              <p className="text-md py-2-leading-8 text-gray-800 mt-3 dark:text-offwhite">
                ¡Hola! Soy un desarrollador{" "}
                <span className="text-teal-600 dark:text-green">Frontend</span>{" "}
                con experiencia en UX y UI.
              </p>
              <p className="text-md py-2-leading-8 text-gray-800 mt-3 dark:text-offwhite">
                Mi enfoque se centra en crear experiencias de usuario efectivas
                y atractivas, lo que significa que mi trabajo no se limita a la
                codificación del sitio web, sino también en la experiencia del
                usuario final.
              </p>
              <p className="text-md py-2-leading-8 text-gray-800 mt-3 dark:text-offwhite">
                Mi experiencia en{" "}
                <span className="text-teal-600 dark:text-green">UX/UI</span> me
                permite tomar en cuenta cómo se sentirá y utilizará el sitio web
                el usuario, lo que me permite diseñar soluciones creativas y
                efectivas.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black">
                <img src={design} className="mx-auto" />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Hermosos diseños
                </h3>
                <p className="py-2 dark:text-offwhite">
                  creating elegant desings suites dor your needs design theory
                </p>
                <h4 className="py-4 text-teal-600 dark:text-green">
                  desgin tools i use
                </h4>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  Photoshop
                </p>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  illustrator
                </p>
                <p className="text-gray-800 py-1 dark:text-offwhite">figma</p>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  adobe xd
                </p>
                <p></p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black">
                <img src={code} className="mx-auto" />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Hermosos diseños
                </h3>
                <p className="py-2 dark:text-offwhite">
                  creating elegant desings suites dor your needs design theory
                </p>
                <h4 className="py-4 text-teal-600 dark:text-green">
                  desgin tools i use
                </h4>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  Photoshop
                </p>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  illustrator
                </p>
                <p className="text-gray-800 py-1 dark:text-offwhite">figma</p>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  adobe xd
                </p>
                <p></p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black">
                <img src={cons} className="mx-auto" />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Hermosos diseños
                </h3>
                <p className="py-2 dark:text-offwhite">
                  creating elegant desings suites dor your needs design theory
                </p>
                <h4 className="py-4 text-teal-600 dark:text-green">
                  desgin tools i use
                </h4>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  Photoshop
                </p>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  illustrator
                </p>
                <p className="text-gray-800 py-1 dark:text-offwhite">figma</p>
                <p className="text-gray-800 py-1 dark:text-offwhite">
                  adobe xd
                </p>
                <p></p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 font-bold dark:text-white">
                Portafolio
              </h3>
            </div>
            <div className="">
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                {work.map((proyect) => (
                  <div className="mb-10 shadow-2xl rounded-xl overflow-hidden basis-1/3 flex-1 hover:scale-105 transition-all duration-500">
                    <a href={proyect.link} className="">
                      <img
                        src={proyect.work}
                        alt=""
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
