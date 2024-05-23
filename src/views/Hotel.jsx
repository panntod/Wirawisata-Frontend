/* eslint-disable jsx-a11y/control-has-associated-label */
import { IoSwapVerticalSharp } from "react-icons/io5";

import Banner from "@/components/atomic/Banner";
import Card from "@/components/atomic/Card";
import Rate from "@/components/atomic/Rate";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { H1, H2, H5, P } from "@/components/global/Text";

export default function Hotel() {
  const hotelContent = [
    {
      img: "1.png",
      title: "Padma Hotel",
      rate: "4,8",
      location: "Bandung",
      price: "3009500",
    },
    {
      img: "2.png",
      title: "The Trans Luxury Hotel",
      rate: "4,8",
      location: "Bandung",
      price: "1009500",
    },
    {
      img: "3.png",
      title: "Rancamaya Hotel ",
      rate: "4,8",
      location: "Bogor",
      price: "3009500",
    },
    {
      img: "4.png",
      title: "Aston Inn",
      rate: "4,8",
      location: "Malang",
      price: "3009500",
    },
  ];

  const formatIDR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <>
      <Navbar />
      <main className="h-screen relative bg-gradient flex flex-col justify-center items-center text-white mb-12">
        <div className="bg-image-2" />
        <H1 className="text-white mb-2">Mau Booking Dimana</H1>

        <div className="bg-gray-200 w-[320px] rounded-lg shadow-lg py-3 px-6 mb-4">
          <P className="text-xs">Pilih Tempat</P>
          <input
            type="text"
            placeholder="Malang"
            className="bg-transparent text-black placeholder:text-black focus:outline-none"
          />
        </div>

        <H2 className="text-white mb-2">Mau Booking Sampai Kapan?</H2>

        <div className="bg-gray-200 flex gap-12 rounded-lg shadow-lg py-3 px-6 mb-6">
          <div>
            <P className="text-xs">Check In</P>
            <input
              type="date"
              required
              className="bg-transparent text-black placeholder:text-black focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="p-3 rounded-full shadow-md bg-white hover:scale-105"
          >
            <IoSwapVerticalSharp className="text-xl rotate-90 text-black" />
          </button>

          <div>
            <P className="text-xs text-end">Check Out</P>
            <input
              type="date"
              required
              className="bg-transparent text-black placeholder:text-black focus:outline-none"
            />
          </div>
        </div>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 shadow hover:scale-105 w-40 py-2 rounded-md"
        >
          <H5 className="text-white">Cari Sekarang</H5>
        </button>
      </main>
      <section className="min-h-screen p-12">
        <H2 className="mb-6">Rekomendasi Hotel</H2>

        <section className="flex justify-between">
          {hotelContent.map((content) => (
            <Card key={`${content.img}-key`} img={`/hotel/${content.img}`}>
              <H5 className="font-bold">{content.title}</H5>
              <div className="flex gap-4">
                <P>{content.rate}</P>
                <Rate />
              </div>
              <P className="text-lg font-semibold">{content.location}</P>
              <P className="text-lg font-semibold">
                {formatIDR.format(content.price)}
              </P>
            </Card>
          ))}
        </section>
      </section>

      <Banner />
      <Footer />
    </>
  );
}
