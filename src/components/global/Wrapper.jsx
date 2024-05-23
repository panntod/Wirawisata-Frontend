export function SectionWrapper({ children, id }) {
  return (
    <section className="relative min-h-screen p-12 mb-12" id={id}>
      {children}
    </section>
  );
}

export function SmallSectionWrapper({ children, id }) {
  return (
    <section className="w-full py-[32px] mt-[42px] xl:mt-0" id={id}>
      {children}
    </section>
  );
}
