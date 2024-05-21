export function SectionWrapper({ children, id }) {
  return (
    <section className="relative w-full py-[82px]" id={id}>
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
