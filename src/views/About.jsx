import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

import Carousel from "@/components/atomic/Carousel";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { H1, H2, H4, H5, P } from "@/components/global/Text";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* HeroImage */}
        <img
          src="/HeroImage.png"
          alt="HeroImage"
          className="w-screen h-full object-contain"
        />
        {/* End HeroImage */}

        {/* About Us */}
        <section className="flex justify-center py-12">
          <H1 className="w-[160px] border-r-4 border-black">About Us</H1>
          <P className="w-[800px] ms-4 text-wrap">
            Wira Wisata adalah perusahaan yang bergerak di bidang perjalanan
            wisata, berkomitmen untuk memberikan pengalaman liburan yang unik
            dan tak terlupakan kepada para pelanggan. Fokus kami adalah
            menyediakan layanan berkualitas tinggi, mulai dari pemilihan
            destinasi yang cermat hingga perencanaan perjalanan yang terperinci.
          </P>
        </section>
        {/* End About Us */}

        {/* Visi Misi */}
        <section className="mx-auto p-12 text-center w-[960px]">
          <H4>Visi dan Misi</H4>
          <P>
            Wira Wisata hadir dengan visi menjadi mitra perjalanan pilihan utama
            yang memberikan pengalaman berwisata luar biasa. Misi kami adalah
            menghadirkan destinasi wisata terbaik, memberikan pelayanan
            pelanggan unggul, serta menyediakan pengalaman liburan yang aman,
            menyenangkan, dan berkesan bagi semua pelanggan.
          </P>
        </section>
        {/* End Visi Misi */}

        <Carousel />

        {/* Question */}
        <section className="p-12">
          <H2 className="mb-6">Pertanyaan Yang Sering Ditanyakan</H2>

          <div className="flex gap-4 justify-between mb-6">
            <div className="w-1/2 flex items-center justify-between gap-2 px-4 py-2 bg-gray-300 rounded-md">
              <H5 className="">Bagaimana Cara Memesan Perjalanan</H5>
              <IoChevronDownSharp className=" text-xl" />
            </div>

            <div className="w-1/2 flex items-center justify-between gap-2 px-4 py-2 bg-gray-300 rounded-md">
              <H5 className="">Apakah Ada Paket Perjalanan Disini</H5>
              <IoChevronDownSharp className=" text-xl" />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <div className="w-1/2 flex items-center justify-between gap-2 px-4 py-2 bg-gray-300 rounded-md">
              <H5 className="">Bagaimana Cara Pembatalan Reservasi</H5>
              <IoChevronDownSharp className=" text-xl" />
            </div>

            <div className="w-1/2 flex items-center justify-between gap-2 px-4 py-2 bg-gray-300 rounded-md">
              <H5 className="">Apakah Anda Sedia Layanan Transport</H5>
              <IoChevronDownSharp className=" text-xl" />
            </div>
          </div>
        </section>
        {/* End Question */}

        <Footer />
      </main>
    </>
  );
}
