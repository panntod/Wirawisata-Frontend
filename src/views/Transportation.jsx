import { useState } from "react";

import Banner from "@/components/atomic/Banner";
import Card from "@/components/atomic/Card";
import ServiceImage from "@/components/atomic/ServiceImage";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { H2, H3, P } from "@/components/global/Text";
import { transportationContent } from "@/data/Transportation";

export default function Transportation() {
  const [active, setActive] = useState("kereta");

  const dataContent = [
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

  const buttonContent = ["kereta", "pesawat", "kapal", "bis"];

  return (
    <>
      <Navbar />
      <main className="h-screen relative bg-gradient flex flex-col justify-center items-center text-white mb-12">
        <div className="flex gap-16 mb-6">
          {dataContent.map(({ img, title }) => (
            <ServiceImage key={`${title}-key-1`} title={title} img={img} />
          ))}
        </div>
        <div className="bg-image" />
      </main>

      <section className="min-h-screen p-12">
        <H2 className="mb-6">Perjalanan yang sering di pesan</H2>
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
                <H3>{content.from}</H3>
              </div>
              <div className="mb-4">
                <P className="text-xs">Sampai</P>
                <H3>{content.to}</H3>
              </div>
            </Card>
          ))}
        </section>
      </section>

      <Banner />
      <Footer />
    </>
  );
}
