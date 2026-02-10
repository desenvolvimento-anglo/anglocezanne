

const FeedPrincipios = () => {
  return (
    <section className="mt-12 bg-brand-150/80">
        <div className="container">
            <div className="row">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <div className="flex justify-center items-center">
                        <img 
                        src="/img/anglo/quem-somos/manifesto.png" 
                        alt="" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  justify-center">
                        <div>
                          <h1 className="font-black text-4xl mb-4 text-white">
                            Nossos Princípios
                          </h1>
                        </div>
                        <div className="text-justify text-sm text-white">
                           <p className="mb-2">
                             Nossa busca é educar a mente para o imponderável e o coração para o presente, construindo caminhos para o futuro que queremos.
                           </p>
                           <p className="mb-2">
                             A partir da reflexão sobre a educação que requeremos, norteamos o colégio com base em três princípios:
                           </p>
                           <ul className="list-disc ml-6">
                              <li className="mb-2"> 
                                <span className="font-semibold">Totalidade:</span> Entendemos que a totalidade da experiência humana é elemento essencial da aprendizagem. Somos aprendizagem e evolução permanentes, em fluxo com o mundo.
                              </li>
                              <li className="mb-2"> 
                                <span className="font-semibold">Relações Humanas:</span> Nossa Humanidade decorre das relações que construímos ao longo da vida. Fomentamos amor, gratidão, empatia e compaixão como elementos fundamentais da educação.
                              </li>
                              <li> 
                                <span className="font-semibold">Autoria:</span> O princípio da Autoria vem do potencial de cada indivíduo intencionalmente criar e transformar caminhos. Queremos nossos estudantes e professores a tornar o mundo um lugar melhor, trazendo a melhor versão de si mesmos para suas vidas e suas comunidades.
                              </li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeedPrincipios;
