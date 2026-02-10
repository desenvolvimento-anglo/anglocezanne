

const FeedProposta = () => {
  return (
    <section className="mt-12 bg-brand-150">
        <div className="container">
            <div className="row">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <div className="flex justify-center items-center">
                        <img 
                        src="/img/anglo/quem-somos/proposta.png" 
                        alt="" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  justify-center">
                        <div>
                          <h1 className="font-black text-4xl mb-4 text-white">
                            Proposta Pedagógica
                          </h1>
                        </div>
                        <div className="text-justify text-sm text-white">
                           <p className="mb-2">
                             A Solução Educacional Anglo é uma evolução do Sistema de Ensino. Ao integrar materiais didáticos e recursos através de uma plataforma tecnológica, potencializamos a prática da sala de aula e o desempenho pedagógico, para garantir o melhor resultado aos nossos alunos: desenvolvimento da autonomia e disponibilidade de ferramentas para que atinja o seu máximo potencial .O Anglo Cezanne fornece ferramentas e dados para que a escola, junto à assessoria pedagógica, crie um plano de melhoria e transforme seu desempenho acadêmico e a qualidade de ensino. Mais recursos para o professor planejar sua aula, informações detalhadas sobre o desempenho da turma e atualização do conhecimento.
                           </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeedProposta;
