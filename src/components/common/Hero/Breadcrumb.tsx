interface Props {
  title: string;
  desc?: string;
}

const Breadcrumb = ({
  title,
  desc = "Conheça mais sobre a nossa história.",
}: Props) => {
  return (
    <section className="bg-gradient-to-br from-brand-100 to-brand-150 mt-20 relative">
      <div className="absolute top-0 left-0 flex gap-x-3 w-36 h-full">
        <div className="bg-white/10 w-20 h-full -skew-x-[25deg]"></div>
        <div className="bg-white/10 w-3 h-full -skew-x-[25deg]"></div>
      </div>
      <div className="row relative">
        <div className="container">
          <h1 className="text-white font-black text-lg md:text-2xl uppercase">{title}</h1>
          <p className="font-medium text-sm md:text-lg text-white">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
