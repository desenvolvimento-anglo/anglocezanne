"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleDoubleRight,
  FaMapPin,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-brand-150`}>
      <div className="row pt-10 pb-10 px-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 md:col-span-1">
              <div className="max-w-[15rem] ">
                <Image
                  src="/img/anglo/logo-anglo.png"
                  width={600}
                  height={204}
                  alt="Anglo Cezanne"
                />
                <p className="text-white leading-5 mt-3 text-justify">
                  Lorem Ipsum
                </p>
                <p className="text-white leading-5 mt-1 text-justify">
                  CNPJ
                </p>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 grid md:grid-cols-3 gap-5">
              <div className="text-white">
                <h2 className="font-bold mb-3 text-2xl">Links Importantes</h2>
                <ul className="flex gap-y-2 flex-col text-lg">
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/quem-somos">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Quem Somos
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/sustentabilidade">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Sustentabilidade
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/politica-privacidade">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Política de Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Contato</h2>
                <ul className="flex gap-y-2 flex-col text-base mb-3">
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaWhatsapp/>
                      </span>
                      (19) xxxxx-xxxx
                    </a>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="mailto:contato@anglocezanne.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaEnvelope/>
                      </span>
                      Atendimento via e-mail
                    </a>
                  </li>
                </ul>
                <h2 className="font-bold mb-3 text-xl">Endereço</h2>
                <ul className="flex gap-y-2 flex-col text-base">
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="https://maps.app.goo.gl/1crYPn8VHWHgcnXP8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaMapPin />
                      </span>
                      R. Cuba, 316 - Cechino, Americana - SP, 13465-773
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-2 text-xl">Redes Sociais</h2>
                <div className="flex gap-x-3  mb-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaYoutube />
                  </a>
                </div>
                <h1 className="font-semibold mb-3 text-lg">@anglocezanne</h1>
                <div className="flex gap-x-3 mt-5 mb-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaYoutube />
                  </a>
                </div>
                <h1 className="font-semibold mb-3 text-lg">@cezaninho</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-100">
        <div className="container flex flex-wrap place-content-center gap-1 py-3">
          <div>
            <p className="text-white">
              © {data.getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="text-white flex gap-2">
            Desenvolvido por
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 underline hover:text-brand-100 transition duration-500"
            >
              Karen
            </a>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
