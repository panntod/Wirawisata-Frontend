import React from "react";
import { IoPerson } from "react-icons/io5";

import Footer from "@/components/global/Footer";
import { H1, H5, P } from "@/components/global/Text";

export default function Profile() {
  return (
    <>
      <main className="flex h-screen">
        {/* Sidebar */}
        <section className="w-1/3 bg-main flex flex-col justify-center items-center">
          <div className="mb-6 p-12 bg-gray-900 shadow-xl rounded-full hover:scale-105 hover:shadow-white">
            <IoPerson className="text-8xl text-white" />
          </div>
          <H1 className="text-white">Thanks For Login</H1>
        </section>
        {/* End Sidebar */}

        {/* Content */}
        <section className="w-full">
          <H1 className="block border-b-2 border-black p-6 text-center">
            Hello Person
          </H1>

          <div className="p-12">
            <div className="mb-4">
              <H5 className="mb-2">Main</H5>
              <P className="p-2 block w-full rounded-md bg-slate-100">
                Person Gaming
              </P>
            </div>
            <div className="mb-4">
              <H5 className="mb-2">Email</H5>
              <P className="p-2 block w-full rounded-md bg-slate-100">
                email@gmail.com
              </P>
            </div>
            <div className="mb-4">
              <H5 className="mb-2">Alamat</H5>
              <P className="p-2 block w-full rounded-md bg-slate-100">
                Sawojajar, Malang, Jawa Timur
              </P>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 hover:scale-105 w-40 py-2 rounded-md"
              >
                <H5 className="text-white">Logout</H5>
              </button>
            </div>
          </div>
        </section>
        {/* End Content */}
      </main>
      <Footer />
    </>
  );
}
