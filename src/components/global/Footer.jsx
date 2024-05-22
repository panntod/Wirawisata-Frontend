import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import { H4, P } from "./Text";
import Logo from "../atomic/Logo";

const Footer = () => (
  <>
    <div className="flex flex-col md:flex-row bg-secondary">
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <div className="flex flex-col gap-6 mb-6 text-white">
          <div className="flex gap-4 items-center">
            <IoLogoWhatsapp className="text-2xl" />
            <Link to="/">
              <P className="text-lg text-white">+628123456789</P>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <IoLogoTwitter className="text-2xl" />
            <Link to="/">
              <P className="text-lg text-white">@wiranyawisata</P>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <IoLogoInstagram className="text-2xl" />
            <Link to="/">
              <P className="text-lg text-white">@wira.wisata</P>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <IoMailOutline className="text-2xl" />
            <Link to="/">
              <P className="text-lg text-white">wirawisata@gmail.com</P>
            </Link>
          </div>
        </div>
        <Logo color="white" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-1/2 p-6 md:p-12">
        <div>
          <H4 className="text-white mb-4">Service</H4>
          <div className="flex flex-col gap-2">
            <P className="text-white">Kereta</P>
            <P className="text-white">Pesawat</P>
            <P className="text-white">Kapal</P>
            <P className="text-white">Bis</P>
            <P className="text-white">Hotel</P>
            <P className="text-white">Wisata</P>
          </div>
        </div>

        <div>
          <H4 className="text-white mb-4">About Us</H4>
          <P className="text-white">
            Selamat datang di Wira Wisata, pelopor perjalanan tak terlupakan di
            Nusantara. Kami hadir untuk menginspirasi petualangan Anda melintasi
            panorama menakjubkan dan keindahan alam yang memukau. Dengan layanan
            profesional dan fokus pada kepuasan pelanggan, kami siap menjadi
            mitra setia Anda dalam menjelajahi keajaiban Indonesia. Sambut
            petualangan baru bersama tim Wira Wisata.
          </P>
        </div>
      </div>
    </div>
    <P className="text-center bg-main-darker py-2 text-white">
      All Right Reserved &copy; 2024 Wirawisata
    </P>
  </>
);

export default Footer;
