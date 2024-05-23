/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import Card from "@/components/atomic/Card";
import HeroImage from "@/components/atomic/HeroImage";
import ServiceImage from "@/components/atomic/ServiceImage";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { H1, H2, H4, H5, P } from "@/components/global/Text";
import { SectionWrapper } from "@/components/global/Wrapper";
import { transportationContent } from "@/data/Transportation";
import { wisataContent } from "@/data/Wisata";

export default function Home() {
  const [active, setActive] = useState("kereta");
  const buttonContent = ["kereta", "pesawat", "kapal", "bis"];
  const promoContent = [1, 2, 3, 4];

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

  const testimoniContent = [
    {
      img: "1",
      title: "Kepuasan Pelanggan",
      text: `WiraWisata mengutamakan kepuasan pelanggan. Kami memahami bahwa
      setiap petualangan adalah unik dan penting bagi setiap individu.
      Oleh karena itu, kami berkomitmen untuk mendengarkan kebutuhan
      dan keinginan pelanggan kami, serta memberikan layanan yang
      personal dan terbaik. Dengan pendekatan yang ramah dan
      responsif, kami selalu siap membantu dan memastikan setiap
      pelanggan merasa dihargai dan diperhatikan.`,
    },
    {
      img: "2",
      title: "Pengalaman Berkualitas",
      text: `WiraWisata memprioritaskan kualitas dalam setiap aspek perjalanan. Tim profesional yang berpengalaman bekerja keras untuk merancang dan menyelenggarakan tur yang memenuhi standar tertinggi. Mulai dari pemilihan destinasi yang menakjubkan hingga akomodasi yang nyaman, panduan wisata yang kompeten, dan kegiatan yang menarik, setiap detail diurus dengan cermat untuk memastikan pelanggan mendapatkan pengalaman yang memuaskan.`,
    },
    {
      img: "1",
      title: "Kepuasan Pelanggan",
      text: `WiraWisata mengutamakan kepuasan pelanggan. Kami memahami bahwa
      setiap petualangan adalah unik dan penting bagi setiap individu.
      Oleh karena itu, kami berkomitmen untuk mendengarkan kebutuhan
      dan keinginan pelanggan kami, serta memberikan layanan yang
      personal dan terbaik. Dengan pendekatan yang ramah dan
      responsif, kami selalu siap membantu dan memastikan setiap
      pelanggan merasa dihargai dan diperhatikan.`,
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

      <section className="h-screen relative bg-gradient flex flex-col justify-center items-center text-white">
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
      </section>

      <SectionWrapper id="transportasi">
        <H2 className="mb-6">Transportasi</H2>
        <div className="flex gap-4 mb-6">
          {buttonContent.map((content) => (
            <button
              key={`${content}-key`}
              type="button"
              onClick={() => setActive(content)}
              className={`uppercase py-1 px-3 border-2 border-black rounded-md ${active === content ? "bg-main" : ""}`}
            >
              <span className="font-semibold">{content}</span>
            </button>
          ))}
        </div>

        <section className="flex justify-between">
          {transportationContent.map((content) => (
            <Card
              key={`${content.img}-key`}
              link={content.link}
              img={`/transportation/${content.img}`}
            >
              <div className="mb-4">
                <P className="text-xs">Berangkat Dari</P>
                <H4>{content.from}</H4>
              </div>
              <div className="mb-4">
                <P className="text-xs">Sampai</P>
                <H4>{content.to}</H4>
              </div>
            </Card>
          ))}
        </section>
      </SectionWrapper>

      <SectionWrapper id="wisata">
        <H2 className="mb-6">Rekomendasi Wisata</H2>

        <section className="flex justify-between">
          {wisataContent.map((content) => (
            <Card key={`${content.img}-key`} img={`/wisata/${content.img}`}>
              <P className="text-xs">Liburan yuk ke</P>
              <H5 className="font-bold mb-10">{content.title}</H5>
            </Card>
          ))}
        </section>
      </SectionWrapper>

      <section className="bg-gradient relative min-h-screen p-12 mb-12 flex flex-col justify-center items-center">
        <H1 className="text-white w-[600px] text-wrap text-center mb-6">
          Ada paket wisatanya nih kalau mau klik aja
        </H1>

        <div className="flex flex-wrap">
          {promoContent.map((content) => (
            <div className="w-max" key={content}>
              <img
                src={`/promo/${content}.png`}
                alt="..."
                className="w-auto h-auto mb-6"
              />
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  className="py-2 px-4 border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-500"
                >
                  <IoArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionWrapper>
        <H1 className="mb-4">Kenapa Wirawisata</H1>

        <div className="flex overflow-x-auto gap-4">
          {testimoniContent.map((content, index) => (
            <div
              key={content.title + "-key"}
              className="relative w-[500px] h-auto overflow-hidden rounded-[3rem] flex-shrink-0"
            >
              <img
                src={"/testimoni/" + content.img + ".png"}
                alt="..."
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 p-12 z-10 flex flex-col justify-center after:content-[''] after:absolute after:inset-0 after:bg-black after:bg-opacity-50">
                <h1 className="text-white text-5xl font-bold drop-shadow-lg z-10">
                  #{index + 1}
                </h1>
                <h2 className="text-center text-white text-3xl mb-4 drop-shadow-lg z-10">
                  {content.title}
                </h2>
                <p className="text-white text-lg drop-shadow-lg z-10">
                  {content.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <Footer />
    </>
  );
}
