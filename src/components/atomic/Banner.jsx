// Membuat component banner yang akan digunakan beberapa page

const Banner = () => (
  <section className="p-24 w-full">
    <div className="rounded-2xl mx-auto h-auto 2xl:h-[415px] w-auto 2xl:w-[1240px] banner-gradient flex flex-col xl:flex-row justify-center items-center p-12">
      <img src="/travel.png" alt="travel" className="w-[465px] h-[340px]" />
      <span className="text-white text-4xl md:text-6xl font-bold">
        Menjelajahi Keajaiban, Menciptakan Kenangan
      </span>
    </div>
  </section>
);

export default Banner;
