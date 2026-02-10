"use client";

import React, { useEffect, useState, Fragment } from "react";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaAngleDown,
  FaLinkedinIn,
} from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import Logo from "../../../public/img/anglo/logo-anglo.png";
import { usePathname } from "next/navigation";
import navigation from "./navigation";

declare const window: any;

const quemsomos = [
  { name: "A Escola", href: "a-escola" },
  { name: "Diferenciais", href: "diferenciais",},
];

const segmentos = [
  { name: "Berçário", href: "bercario" },
  { name: "Infantil", href: "infantil",},
  { name: "Fundamental I", href: "fundamentalI",},
  { name: "Fundamental II", href: "fundamentalII",},
  { name: "Ensino Médio", href: "ensino-medio",},
];

const informativos = [
  { name: "Cardápio", href: "/" },
  { name: "Lista de Materiais 2026", href: "/",},
  { name: "Tour 360º", href: "/",},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const data = {
    logoAlt: "Anglo Cezanne",
    redeSocial: {
      facebook: "/",
      instagram: "/",
      linkedin: "/",
      whatsapp: "/",
    },
    contato: {
      phone: "/",
    },
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <header>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 text-white text-3xl shadow-xl bg-[#25D366] p-3 rounded-full z-30"
        >
          <FaWhatsapp />
        </a>
        <div className="bg-brand-100 md:px-5d z-20 font-light border-b border-white/20 relative text-white ">
          <div className="max-w-7xl mx-auto flex place-content-between">
            <div className="flex place-items-center gap-x-5">
              <a
                href="mailto:contato@anglocezanne.com.br"
                className="font-semibold hidden sm:block text-lg"
              >
                <span className="inline-block text-lg -mb-1 mx-2">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                contato@anglocezanne.com.br
              </a>
              <a href="tel:" className="font-semibold text-lg">
                <span className="inline-block -mb-1 mx-2">
                  <FaPhoneAlt></FaPhoneAlt>
                </span>
                (19) xxxx-xxxx
              </a>
            </div>

            <div className="flex">
              <a
                href={data.redeSocial.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaWhatsapp />
              </a>
              <a
                href={data.redeSocial.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href={data.redeSocial.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaInstagram />
              </a>
              <a
                href={data.redeSocial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <nav
          className={
            navbar
              ? "bg-white shadow-lg fixed w-full z-50 px-5 top-0 animate-slideInDown"
              : "bg-white shadow-lg fixed w-full z-50 px-5 "
          }
        >
          <div className="row text-lg font-semibold">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 max-w-[240px] md:max-w-[300px]">
                  <Link
                    href="/"
                    className="cursor-pointer max-w-[8rem] md:max-w-[8rem]"
                  >
                    <Image
                      src={Logo}
                      width={600}
                      height={229}
                      className="cursor-pointer"
                      title={data.logoAlt}
                      alt={data.logoAlt}
                    />
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className=" flex items-center space-x-4 font-semibold ">
                    {navigation.map((item) =>
                      item.name == "Quem Somos" ? (
                        <div key={item.href} className="group relative text-right">
                          <Link
                            href={item.href}
                            className={
                              navbar
                                ? "cursor-pointer px-2 py-7 font-medium hover:text-brand-200 text-brand-100 uppercase text-base tracking-tight"
                                : "cursor-pointer transition hover:text-brand-200 px-2 py-7 font-medium text-brand-100 uppercase text-base tracking-tight"
                            }
                          >
                            {item.name}
                            <span className="inline-block -mb-1 text-brand-100/80">
                              <FaAngleDown />
                            </span>
                          </Link>

                          <div className="hidden group-hover:block absolute top-9 bg-white w-48 p-[2px]">
                            {quemsomos.map((subItem, i) => (
                              <Link
                                key={i}
                                href={`/quem-somos/${subItem.href}`}
                                className="hover:bg-brand-100 text-brand-100 hover:text-white flex w-full items-center px-2 py-2 text-base font-semibold"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.name == "Segmentos" ? (
                        <div key={item.href} className="group relative text-right">
                          <Link
                            href={item.href}
                            className={
                              navbar
                                ? "cursor-pointer px-2 py-7 font-medium hover:text-brand-200 text-brand-100 uppercase text-base tracking-tight"
                                : "cursor-pointer transition hover:text-brand-200 px-2 py-7 font-medium text-brand-100 uppercase text-base tracking-tight"
                            }
                          >
                            {item.name}
                            <span className="inline-block -mb-1 text-brand-100/80">
                              <FaAngleDown />
                            </span>
                          </Link>

                          <div className="hidden group-hover:block absolute top-9 bg-white w-56 p-[2px]">
                            {segmentos.map((subItem, i) => (
                              <Link
                                key={i}
                                href={`/segmentos/${subItem.href}`}
                                className="hover:bg-brand-100 text-brand-100 hover:text-white flex w-full items-center px-2 py-2 text-base font-semibold"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.name == "Informativos" ? (
                        <div key={item.href} className="group relative text-right">
                          <Link
                            href={item.href}
                            className={
                              navbar
                                ? "cursor-pointer px-2 py-7 font-medium hover:text-brand-200 text-brand-100 uppercase text-base tracking-tight"
                                : "cursor-pointer transition hover:text-brand-200 px-2 py-7 font-medium text-brand-100 uppercase text-base tracking-tight"
                            }
                          >
                            {item.name}
                            <span className="inline-block -mb-1 text-brand-100/80">
                              <FaAngleDown />
                            </span>
                          </Link>

                          <div className="hidden group-hover:block absolute top-9 bg-white w-56 p-[2px]">
                            {informativos.map((subItem, i) => (
                              <Link
                                key={i}
                                href={`/informativos/${subItem.href}`}
                                className="hover:bg-brand-100 text-brand-100 hover:text-white flex w-full items-center px-2 py-2 text-base font-semibold"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={
                            navbar
                              ? "cursor-pointer px-2 py-7 font-medium hover:text-brand-200 text-brand-100 uppercase text-base tracking-tight"
                              : "cursor-pointer transition hover:text-brand-200 px-2 py-7 font-medium text-brand-100 uppercase text-base tracking-tight"
                          }
                        >
                          {item.name}
                        </Link>
                      )
                    )}

                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-200 hover:-translate-y-1 transition duration-500 font-semibold rounded-md py-3 px-5 text-white uppercase text-sm"
                    >
                      Área de acessos
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-brand-100 bg-brand-400 outline-none shadow-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu ">
                <div
                  ref={ref}
                  className="bg-zinc-100 -mx-5 px-2 space-y-1 sm:px-3 py-4 overflow-y-auto max-h-[63vh]"
                >
                  <div>
                    {navigation.map((item) =>
                      item.name == "Segmentos" ? (
                        <div key={item.href} className="relative text-right">
                          <Menu as="div" className="">
                            <Menu.Button className="cursor-pointer text-brand-100 block px-2 py-2 rounded-md text-base font-semibold tracking-wider">
                              Segmentos
                              <span className="inline-block -mb-1 text-brand-100">
                                <FaAngleDown />
                              </span>
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="ml-5 mb-0 origin-top-right divide-y divide-gray-100 ">
                                <div className="px-1 pb-1 ">
                                  {segmentos.map((item, i) => (
                                    <Menu.Item key={i}>
                                      {({ active }) => (
                                        <Link
                                          href={`/produtos/${item.href}`}
                                          onClick={() => setIsOpen(false)}
                                          className={`${
                                            active
                                              ? "bg-brand-100 text-white "
                                              : "text-brand-100"
                                          } group text-start flex w-full items-center rounded-md px-1 py-1 text-base `}
                                        >
                                          {item.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={`${item.href}`}
                          onClick={() => setIsOpen(false)}
                          className="cursor-pointer text-brand-100 block px-3 py-2 rounded-md text-base font-semibold tracking-wider"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                    <div className="mt-3 ml-3 mb-3">
                      <Link
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-200 font-medium rounded-md py-3 px-5 text-white"
                      >
                        Área de acessos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}
