/* eslint-disable */

import { IoArrowBackOutline, IoSwapVerticalSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { H3, H5, P } from "@/components/global/Text";

export default function Kereta() {
  return (
    <main className="min-h-screen p-6">
      <header className="flex items-center gap-6 mb-6">
        <Link to="/" className="hover:scale-110 transition duration-300">
          <IoArrowBackOutline className="text-2xl" />
        </Link>
        <H3>Kereta</H3>
      </header>

      <section className="flex gap-6">
        <div className="hidden md:flex justify-center items-center px-24 py-12 w-1/2">
          <div className="w-full h-full relative z-0">
            <img
              src="/ticket/kereta-2.png"
              alt="login pictures"
              className="absolute -top-20 -right-24"
            />
            <div className="w-full h-full ">
              <img
                src="/ticket/kereta-1.png"
                alt="login pictures"
                className="mx-auto w-[380px] h-[600px]"
                width={400}
                height={600}
              />
            </div>
            <img
              src="/ticket/kereta-3.png"
              alt="login pictures"
              className="absolute -bottom-20 -left-24"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center relative md:p-24 w-full md:w-1/2">
          <div className="w-[420px] rounded-xl bg-gray-200 p-6">
            <div className="w-full p-4 rounded-lg bg-gray-100 relative mb-4">
              <input
                type="text"
                className="bg-transparent focus:outline-none py-2"
                placeholder="Jakarta"
              />
              <hr className="border border-black" />
              <input
                type="text"
                className="bg-transparent focus:outline-none py-2"
                placeholder="Malang"
              />
              <div className="absolute top-[50%] -right-3 translate-x-[-50%] translate-y-[-50%] z-10 p-2 bg-white rounded-md shadow">
                <IoSwapVerticalSharp className="text-xl" />
              </div>
            </div>

            <div className="w-full px-4 py-1 rounded-lg bg-gray-100 flex justify-between mb-4">
              <div>
                <P className="text-xs">Tanggal</P>
                <input
                  type="date"
                  className="bg-transparent focus:outline-none py-2"
                  placeholder="Jakarta"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <P className="text-xs">Pulang - Pergi</P>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                </label>
              </div>
            </div>

            <div className="w-full px-4 py-1 rounded-lg bg-gray-100 mb-4">
              <P className="text-xs">Jumlah Penumpang</P>
              <input
                type="number"
                className="bg-transparent focus:outline-none py-2"
                placeholder="1"
              />
            </div>

            <div className="w-full px-4 py-1 rounded-lg bg-gray-100">
              <P className="text-xs">Kelas</P>
              <input
                type="text"
                className="bg-transparent focus:outline-none py-2"
                placeholder="Ekonomi"
              />
            </div>
          </div>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 w-40 py-2 rounded-md"
          >
            <H5 className="text-white">Cari Sekarang</H5>
          </button>
        </div>
      </section>
    </main>
  );
}
