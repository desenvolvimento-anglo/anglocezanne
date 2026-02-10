const cards = [
  { texto: "Card 1", img: "/img/anglo/segmentos/bercario/1.jpg" },
  { texto: "Card 2", img: "/img/anglo/segmentos/bercario/2.jpg" },
  { texto: "Card 3", img: "/img/anglo/segmentos/bercario/3.jpg" },
  { texto: "Card 4", img: "/img/anglo/segmentos/bercario/4.jpg" },
  { texto: "Card 5", img: "/img/anglo/segmentos/bercario/5.jpg" },
  { texto: "Card 6", img: "/img/anglo/segmentos/bercario/6.jpg" },
  { texto: "Card 7", img: "/img/anglo/segmentos/bercario/7.jpg" },
  { texto: "Card 8", img: "/img/anglo/segmentos/bercario/8.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/bercario/9.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/bercario/10.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/bercario/11.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/bercario/12.jpg" },
];

const FeedFotosBercario = () => {
  return (
    <section className="md:-mt-10">
      <div className="container">
        <div className="row">
            <div className="mb-4">
                <h1 className="text-brand-200 text-3xl font-extrabold text-center"> Galeria </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cards.map((item, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md text-center flex flex-col items-center"
                    >
                    <img
                        src={item.img}
                        alt={item.texto}
                        className=" rounded-xl object-cover"
                    />

                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeedFotosBercario;
