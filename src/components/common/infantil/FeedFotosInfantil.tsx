const cards = [
  { texto: "Card 1", img: "/img/anglo/segmentos/infantil/1.jpg" },
  { texto: "Card 2", img: "/img/anglo/segmentos/infantil/2.jpeg" },
  { texto: "Card 3", img: "/img/anglo/segmentos/infantil/3.jpg" },
  { texto: "Card 4", img: "/img/anglo/segmentos/infantil/4.jpg" },
  { texto: "Card 5", img: "/img/anglo/segmentos/infantil/5.jpg" },
  { texto: "Card 6", img: "/img/anglo/segmentos/infantil/6.jpg" },
  { texto: "Card 7", img: "/img/anglo/segmentos/infantil/7.jpg" },
  { texto: "Card 8", img: "/img/anglo/segmentos/infantil/8.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/9.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/10.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/11.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/12.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/13.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/14.jpg" },
  { texto: "Card 9", img: "/img/anglo/segmentos/infantil/15.jpg" },
];
const FeedFotosInfantil = () => {
  return (
    <section className="md:-mt-10">
      <div className="container">
        <div className="row">
            <div className="mb-4">
                <h1 className="text-brand-200 text-xl font-extrabold text-center mb-2"> 
                    Infantil e Fundamental I
                </h1>
                <div>
                    <h2 className="mb-2 text-2xl text-brand-200 font-semibold">
                        Conheça as instalações do Cezaninho
                    </h2>
                    <p className="mb-2">
                        O espaço destinado ao Cezaninho é um espaço privilegiado. Conta com salas de aula, pátio, parque com areia, play kids, horta, animaizinhos, área verde com grama, árvores e plantas, proporcionando o contato com a natureza e interação com o meio ambiente. Ali as pequenas feras podem aprender a amar e respeitar a natureza, cuidando e preservando.
                    </p>
                    <p className="mb-2">
                        As instalações foram cuidadosamente planejadas para proporcionar conforto e segurança para nossas pequenas feras em desenvolvimento.
                    </p>
                    <p className="mb-2">
                        Cada detalhe foi pensado para atender as necessidades das crianças, sua curiosidade na exploração do ambiente, sua energia, as brincadeiras, para que elas sejam muito felizes enquanto aprendem através de vivências e são preparadas para os desafios futuros.
                    </p>
                </div>
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

export default FeedFotosInfantil;
