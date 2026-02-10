const cards = [
  {
    texto: "Consolidado e reconhecido pelos altos números de aprovação, o Sistema Anglo preza pela tradição, pioneirismo, inovação e resultados de alta performance. Há mais de 70 anos o Sistema Anglo é pioneiro em aprendizagem e educação, sendo reconhecido por aprovações nas melhores universidades do país. Unindo tradição e inovação, o Anglo se destaca pela excelência de ensino, que prepara os alunos para o futuro e para a vida.",
    img: "/img/anglo/diferenciais/anglo.png",
  },
  {
    texto: "O Plurall é um ambiente virtual de aprendizagem para alunos, responsáveis, professores e coordenadores. Acessível, prática e organizada, essa solução inovadora acompanha os estudantes e educadores 24 horas por dia, podendo ser acessada a qualquer hora e em qualquer lugar!",
    img: "/img/anglo/diferenciais/plurall.png",
  },
  {
    texto: "O Líder em Mim (LEM) é um programa de formação socioemocional que promove, por meio de mudança de paradigmas, significativas transformações na mentalidade de educadores e de estudantes de todos os segmentos da Educação Básica, além de auxiliar no desenvolvimento da autoestima e do autoconhecimento. Essas transformações contribuem para formar jovens protagonistas de suas próprias vidas e que atuem na transformação da sociedade. Padrão de qualidade endossado pela Casel (the Collaborative for Academic, Social and Emotional Learning).",
    img: "/img/anglo/diferenciais/lider.png",
  },
  {
    texto: "Solução exclusiva de ensino de inglês com abordagem bilíngue, oferecendo flexibilidade e consistência na transição da escola para o ensino bilíngue. Eduall baseia-se no conceito building blocks, que permite escolher módulos de conteúdo conforme a proposta da escola, gerando uma grade totalmente personalizada. (Uma parceria com a Macmillan Education).",
    img: "/img/anglo/diferenciais/edua.png",
  },
  {
    texto: "A Plataforma Matific é uma relação de atividades online de matemática, que ensina aos alunos a solução de problemas e o pensamento crítico por meio da descoberta. Oferece a experiência educacional perfeita combinando diversão e aprendizado. Junte-se aos seus filhos nesta aventura extraordinária, que vai incentivar eles a amarem a matemática!",
    img: "/img/anglo/diferenciais/matific.png",
  },
];

const FeedDiferenciais = () => {
  return (
    <section className="mt-16">
      <div className="container mx-auto space-y-12">

        {/* PRIMEIRA LINHA - 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.slice(0,3).map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
                <img
                    src={item.img}
                    className="rounded-xl mb-2 w-48 h-48 object-cover"
                />
                <p className="text-gray-600 text-sm">
                    {item.texto}
                </p>
            </div>
          ))}
        </div>

        {/* SEGUNDA LINHA - 2 CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.slice(3,5).map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center">
                <img
                    src={item.img}
                    className="rounded-xl mb-2 w-48 h-48 object-cover"
                />
                <p className="text-gray-600 text-sm">
                    {item.texto}
                </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeedDiferenciais;
