import Banner from "@/components/atomic/Banner";
import Card from "@/components/atomic/Card";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import { H1, H2, H5, P } from "@/components/global/Text";

export default function Wisata() {
  const wisataContent = [
    {
      img: "1.png",
      title: "Taman Safari Bogor",
    },
    {
      img: "2.png",
      title: "Taman Marga Satwa",
    },
    {
      img: "3.png",
      title: "A Day In Safary",
    },
    {
      img: "4.png",
      title: "Back To The Zoo",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="h-screen bg-gradient flex justify-center items-center text-white mb-12">
        <figure className="w-[840px] overflow-hidden">
          <img
            src="/wisata.png"
            alt="wisata"
            className="object-contain"
            width={700}
            height={600}
          />
        </figure>

        <div>
          <H1 className="text-white mb-2">Mau Kemana Nih?</H1>

          <div className="bg-gray-200 rounded-lg py-3 px-6 mb-6">
            <P className="text-xs">Pilih Lokasi</P>
            <input
              type="text"
              placeholder="Dufan"
              required
              className="bg-transparent text-black placeholder:text-black focus:outline-none"
            />
          </div>

          <div className="bg-gray-200 rounded-lg py-3 px-6 mb-6">
            <P className="text-xs">Pilih Tanggal</P>
            <input
              type="date"
              required
              className="bg-transparent text-black placeholder:text-black focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 shadow hover:scale-105 w-40 py-2 rounded-md"
          >
            <H5 className="text-white">Cari Sekarang</H5>
          </button>
        </div>
      </main>

      <section className="min-h-screen p-12">
        <H2 className="mb-6">Rekomendasi Hotel</H2>

        <section className="flex justify-between">
          {wisataContent.map((content) => (
            <Card key={`${content.img}-key`} img={`/wisata/${content.img}`}>
              <P className="text-xs">Liburan yuk ke</P>
              <H5 className="font-bold mb-10">{content.title}</H5>
            </Card>
          ))}
        </section>
      </section>

      <Banner />
      <Footer />
    </>
  );
}
