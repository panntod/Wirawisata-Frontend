import React from "react";

import HeroImage from "@/components/atomic/HeroImage";
import ServiceImage from "@/components/atomic/ServiceImage";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { H1 } from "@/components/global/Text";

export default function Home() {
  const firstContent = [
    {
      img: "/hotel.png",
      title: "Hotel",
    },
    {
      img: "/wisata.png",
      title: "Wisata",
    },
    {
      img: "/paket.png",
      title: "Paket Wisata",
    },
  ];

  const lastContent = [
    {
      img: "/kereta.png",
      title: "Kereta",
    },
    {
      img: "/bis.png",
      title: "Bis",
    },
    {
      img: "/kapal.png",
      title: "Kapal",
    },
    {
      img: "/pesawat.png",
      title: "Pesawat",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="h-screen flex flex-col md:flex-row gap-12 my-12">
        <div className="w-1/2 p-12 flex flex-col items-center justify-center">
          <h1 className="text-secondary text-4xl font-semibold sm:text-7xl mb-6">
            Menggapai Destinasi Impian Bersama
          </h1>

          <img
            src="/wirawisata.png"
            alt="wirawisata"
            className="w-[500px] h-[120px]"
            width={600}
            height={200}
          />
        </div>
        <div className="justify-center items-center px-24 py-12 w-1/2">
          <HeroImage />
        </div>
      </section>
      <div className="h-screen relative bg-gradient flex flex-col justify-center items-center text-white">
        <H1 className="mb-6">Our Service</H1>
        <div className="flex gap-14 mb-6">
          {firstContent.map(({ img, title }) => (
            <ServiceImage key={`${title}-key-1`} title={title} img={img} />
          ))}
        </div>
        <div className="flex gap-14">
          {lastContent.map(({ img, title }) => (
            <ServiceImage key={`${title}-key-2`} title={title} img={img} />
          ))}
        </div>
        <div className="bg-image" />
      </div>
      <Footer />
    </>
  );
}
