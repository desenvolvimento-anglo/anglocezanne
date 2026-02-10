import { CottonIcon, DropsIcon, Pano, RecycleIcon, Relogio, Residuos, Retorno, Resistente, Piso, Lustra, Polimento, Praticidade, Fibras, Vazamento, Toque, Cores, Folhas, Limpeza, Solvente, Valor, Entrega, Oleo, Graxa, Sustentavel } from '../components/icon'


export var produtos = [
  {
    name: 'Toalha Industrial (Venda)',
    slug: 'toalha-industrial-venda',
    img: '/img/produtos/toalha-industrial-nova.webp',
    conteudo: '/img/conteudo/toalha-industrial-nova.webp',
    conteudo1: '/img/conteudo/toalha-industrial-venda-add.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Toalhas Industriais',
    desc: [
      'Pano Industrial confeccionado em tecido 100 % algodão, com tramas bem fechadas sendo muito absorventes e resistente na limpeza podendo ser lavado e reutilizado várias vezes sem perder a eficácia.',
      'Produto absorvente e durável que favorece a sustentabilidade.',
      'Ideal para atender às demandas de limpeza em ambientes comerciais, industriais ou institucionais onde a limpeza e higiene são essenciais.',
      'Atende a todos os segmentos industriais.',
      'Usos diversos: limpeza básica até a mais pesada como remoção de sujeiras, líquidos, óleos, graxas, solventes, tintas e vernizes.',
      'Material versátil que se adapta a qualquer necessidade de limpeza: mãos, peças, máquinas, mesas e estações de trabalho.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% Algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Relogio />,
        desc: 'Duráveis'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
      {
        icon: <RecycleIcon />,
        desc: 'Reutilizáveis',
      },
      {
        icon: <Residuos />,
        desc: 'Não solta fiapos ou resíduos'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: tecido 100% algodão',
        },
        {
          size: 'Dimensões: 30x40',
        },
        {
          size: 'Cores: Azul/Branca',
        },
        {
          size: 'Bordas: costura em overlock',
        },
        {
          size: 'Embalagens: 500 unds',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'vantagens e beneficios',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Duráveis',
        },
        {
          size: 'Diversos usos',
        },
        {
          size: 'Reutilizáveis',
        },
        {
          size: 'Não solta fiapos ou resíduos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'aplicacoes',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'segmentos',
      },
      content: [
        {
          size: 'Automotivo, aeroespacial, agrícola, eletrônica, química, cerâmica, alimentício, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, limpeza e higiene, limpeza profissional, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/toalha-industrial-nova.webp",
      "/img/conteudo/toalha-industrial-venda-add.webp",
    ],
  },
  {
    name: 'Toalha Industrial (Locação)',
    slug: 'toalha-industrial-locacao',
    img: '/img/produtos/toalha-industrial-locacao.webp',
    conteudo: '/img/conteudo/toalha-industrial-locacao.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Toalhas Industriais',
    desc: [
      'A Toalheiro Santa Bárbara trabalha com a venda e também locação das toalhas industriais.',
      'Confeccionadas em tecido 100% algodão, nossas toalhas industriais são absorventes e resistentes na limpeza. Removem óleos, graxas, solventes, resinas e outros produtos utilizados nos processos de limpeza e manutenção de máquinas e equipamentos.',
      'No sistema de locação não é necessário a compra das toalhas. São fornecidas através de um contrato de locação onde atendemos as necessidades específicas de cada cliente como quantidade, tipo de toalha e frequência de entregas.',
      'Através de uma programação é estabelecida a entrega de toalhas limpas e retirada das toalhas sujas, de acordo com a necessidade do cliente.',
      'As toalhas sujas, que seguem para higienização passam por um processo de inspeção, reparação e substituição quando necessário. Caso alguma toalha esteja danificada ou desgastada, ela é substituída para garantir que o cliente tenha um suprimento adequado de toalhas em boas condições.',
      'Nosso processo de lavagem industrial utiliza equipamentos e produtos para garantir a eficácia na limpeza e higienização das toalhas priorizando cumprir as regulamentações ambientais exigidas através da conservação e descarte responsável dos resíduos gerados',
      '(Por gentileza, consulte-nos sobre a disponibilidade deste serviço de locação para a sua região).',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% Algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorventes'
      },
      {
        icon: <Relogio />,
        desc: 'Duráveis'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
      {
        icon: <RecycleIcon />,
        desc: 'Reutilizáveis e alternativa sustentável',
      },
      {
        icon: <Entrega />,
        desc: 'Coletas e entregas programadas'
      },
      {
        icon: <Residuos />,
        desc: 'Substituição das toalhas desgastadas'
      },
      {
        icon: <Valor />,
        desc: 'Valor fixo de aluguel e não há custo com descarte'
      },

      {
        icon: <Sustentavel />,
        desc: 'Destinação legal dos resíduos'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: tecido 100% algodão',
        },
        {
          size: 'Dimensões: 30x40 aproximadamente',
        },
        {
          size: 'Cor: Azul',
        },
        {
          size: 'Acabamento: tingidas',
        },
        {
          size: 'Bordas: costura em overlock',
        },
        {
          size: 'Embalagem: 500unds',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'vantagens',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Duráveis',
        },
        {
          size: 'Diversos usos',
        },
        {
          size: 'Reutilizáveis',
        },
        {
          size: 'Coletas e entregas programadas',
        },
        {
          size: 'Substituição das toalhas desgastadas',
        },
        {
          size: 'Valor fixo de aluguel',
        },
        {
          size: 'Não há custo com descarte',
        },
        {
          size: 'Alternativa sustentável',
        },
        {
          size: 'Destinação legal dos resíduos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'segmentos',
      },
      content: [
        {
          size: 'Automotivo, aeroespacial, agrícola, eletrônica, química, cerâmica, alimentos e bebidas, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, limpeza e higiene, limpeza profissional, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Panos de Algodão Alvejados',
    slug: 'panos-algodao-alvejado',
    img: '/img/produtos/pano-alvejado-algodao.webp',
    conteudo: '/img/conteudo/pano-alvejado-algodao.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos de algodão / Sacos Alvejados',
    desc: [
      'Panos confeccionados em algodão sem costura nas extremidades, sendo muito resistentes com alto poder de absorção e limpeza.',
      'Frequentemente usados nas indústrias para uma ampla variedade de aplicações.',
      'São muito utilizados para limpar equipamentos, superfícies, ferramentas e máquinas industriais.',
      'Muito eficazes na limpeza geral e na remoção de sujeiras mais pesadas como óleos, graxas e outros resíduos.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Resistente />,
        desc: 'Resistente',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Material: tecido 100% algodão',
        },
        {
          size: 'Dimensões: 32x25 / 65x42 / 65x84 / 65x100 cm',
        },
        {
          size: 'Cor: branco',
        },
        {
          size: 'Acabamento: alvejado',
        },
        {
          size: 'Bordas: sem costura',
        },
        {
          size: 'Embalagens: 10 / 30 / 50 / 60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Resistente',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
        //quantity: 'unid.'
      },
      content: [
        {
          size: 'Automotivo, gráfico, cerâmico, alimentício, metalúrgico, químico, construção, oficinas e manufatura geral.',
          //quantity: 500
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Saco Alvejado Leve',
    slug: 'saco-alvejado-leve',
    img: '/img/produtos/saco-alvejado-leve.webp',
    conteudo: '/img/conteudo/saco-alvejado-leve.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos de algodão / Sacos Alvejados',
    desc: [
      'Saco alvejado fechado costurado confeccionado em tecido fino de gramatura leve, 100% algodão.',
      'Leves e fáceis de manusear durante as tarefas de limpeza, tornando-se uma opção prática e conveniente para limpeza de chão e outras superfícies',
      'Indicado para uso industrial, comercial, institucional e doméstico. ',
      'Possui boa capacidade de absorção e durabilidade.',
      'Disponível em 3 tamanhos diferentes para cada necessidade de limpeza.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão e leve'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Resistente />,
        desc: 'Resistente',
      },
      {
        icon: <Praticidade />,
        desc: 'Fácil manuseio',
      },
      {
        icon: <Residuos />,
        desc: 'Não solta resíduos',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Material: 100% algodão',
        },
        {
          size: 'Dimensões: 33x53 / 38x58 / 44x67 cm',
        },
        {
          size: 'Gramaturas: 55g / 71g / 100g respectivamente',
        },
        {
          size: 'Cor: branco',
        },
        {
          size: 'Embalagem: 200 unds',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Resistente',
        },
        {
          size: 'Leves',
        },
        {
          size: 'Fácil manuseio',
        },
        {
          size: 'Não solta fiapos',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
        //quantity: 'unid.'
      },
      content: [
        {
          size: 'Limpeza profissional, residencial, hospitalar, clínicas, restauantes, indústrias comércios, laboratórios e limpeza em geral.',
          //quantity: 500
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Saco Alvejado Extra',
    slug: 'saco-alvejado-extra',
    img: '/img/produtos/saco-alvejado-extra.webp',
    conteudo: '/img/conteudo/saco-alvejado-extra.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos de algodão / Sacos Alvejados',
    desc: [
      'Saco alvejado fechado costurado confeccionado em tecido de gramatura pesada, 100% algodão.',
      'Indicado para todo tipo de limpeza de superfícies em geral e de chão.',
      'Indicado para uso industrial, comercial, institucional e doméstico.',
      'Produzido em algodão possui excelente capacidade de absorção e durabilidade',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Resistente />,
        desc: 'Resistente',
      },
      {
        icon: <Residuos />,
        desc: 'Não solta resíduos',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Material: 100% algodão ',
        },
        {
          size: 'Dimensões: 48x68 cm',
        },
        {
          size: 'Gramatura: 115g',
        },
        {
          size: 'Cor: branco',
        },
        {
          size: 'Embalagem: 200 unds.',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Resistente',
        },
        {
          size: 'Não solta resíduos',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza profissional, residencial, hospitalar, clínicas, restaurantes, indústrias, comércios, laboratórios, e limpeza em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Saco Xadrez Lavado',
    slug: 'saco-xadrez-lavado',
    img: '/img/produtos/saco-xadrez-lavado.webp',
    conteudo: '/img/conteudo/saco-xadrez-lavado.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos de algodão / Sacos Alvejados',
    desc: [
      'Pano de chão xadrez alvejado, confeccionado em tecido 100% algodão sendo muito resistente e durável, ideal para limpeza em geral de superfícies e pisos.',
      'São práticos na limpeza por serem leves e fáceis de manusear ao lavar, torcer, e passar no piso. A cor escura não deixa à mostra marcas de uso da limpeza. ',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Resistente />,
        desc: 'Resistente',
      },
      {
        icon: <Residuos />,
        desc: 'Não solta resíduos',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Material: 100% algodão ',
        },
        {
          size: 'Dimensões: 38x60 / 45x65cm',
        },
        {
          size: 'Gramaturas: 58g / 88g',
        },
        {
          size: 'Cor: xadrez',
        },
        {
          size: 'Embalagem: 200 unds.',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Resistente',
        },
        {
          size: 'Não solta resíduos',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza profissional, residencial, hospitalar, clínicas, restaurantes, indústrias, comércios, laboratórios, e limpeza em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Saco Xadrez Cru',
    slug: 'saco-xadrez-cru',
    img: '/img/produtos/saco-xadrez-cru.webp',
    conteudo: '/img/conteudo/saco-xadrez-cru.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos de algodão / Sacos Alvejados',
    desc: [
      'Pano de chão xadrez cru, confeccionado em tecido 100% algodão sendo muito resistente e durável, ideal para limpeza em geral de superfícies e pisos.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Resistente />,
        desc: 'Resistente',
      },
      {
        icon: <Residuos />,
        desc: 'Não solta resíduos',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Material: 100% algodão ',
        },
        {
          size: 'Dimensões: 70x40 cm',
        },
        {
          size: 'Gramatura: 63g',
        },
        {
          size: 'Embalagem: 200 unds.',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Resistente',
        },
        {
          size: 'Não solta resíduos',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza profissional, residencial, hospitalar, clínicas, restaurantes, indústrias, comércios, laboratórios, e limpeza em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Capa de fardo Lavada',
    slug: 'capa-fardo-lavada',
    img: '/img/produtos/capa-fardo-lavada.webp',
    conteudo: '/img/conteudo/capa-de-fardo-lavado.webp',
    conteudo1: '/img/conteudo/capa-de-fardo-lavado.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Retalhos',
    desc: [
      'A capa de fardo é um retalho proveniente das embalagens de fardos agrícolas de algodão.',
      'Nossa Capa de Fardo Lavada, passa por um processo de higienização e remoção dos resíduos de algodão e são cortadas para serem utilizadas na limpeza de peças e máquinas industriais.',
      'Com alto poder de absorção é bastante indicada para indústrias e mecânicas, na limpeza de óleos, graxas mãos peças e serviços de limpeza em geral',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: 'Tecido 100% algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente custo benefício',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: tecido 100% algodão',
        },
        {
          size: 'Dimensões: variadas',
        },
        {
          size: 'Acabamento: lavada e alvejada',
        },
        {
          size: 'Bordas: irregulares',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Excelente custo benefício',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/capa-fardo-lavada.webp",
      "/img/conteudo/capa-de-fardo-lavada-add.webp",
    ],
  },
  {
    name: 'Capa de fardo Crua',
    slug: 'capa-fardo-crua',
    img: '/img/produtos/capa-fardo-crua.webp',
    conteudo: '/img/conteudo/capa-fardo-crua.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Retalhos',
    desc: [
      'A capa de fardo crua é um retalho proveniente das embalagens de fardos agrícolas de algodão. ',
      'Nossa Capa de Fardo Crua, passa por um procedimento de remoção dos resíduos de algodão, depois é cortada em tamanhos apropriados para serem utilizadas na limpeza industrial. Não passa pelo processo de lavagem.',
      'Com aparência rústica, também conhecida como trapo para limpeza, é muito indicada na remoção das sujeiras mais pesadas como óleos, graxas e outros resíduos.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: 'Tecido 100% algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente custo benefício',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: tecido 100% algodão',
        },
        {
          size: 'Dimensões: variadas',
        },
        {
          size: 'Acabamento: crua',
        },
        {
          size: 'Bordas: irregulares',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Excelente custo benefício',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
        //quantity: 'unid.'
      },
      content: [
        {
          size: 'Automotivo, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Malha Branca / Crua',
    slug: 'malha-branca-crua',
    img: '/img/produtos/malha_crua.webp',
    conteudo: '/img/conteudo/malha_crua.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Retalhos',
    desc: [
      'Retalhos de pano de malha de algodão nas cores branco e cru sem costura.',
      'As malhas para limpeza são amplamente utilizadas em diversos setores e ambientes para realizar tarefas de limpeza e manutenção.',
      'Possui boa capacidade de absorção, não risca e não solta fiapos. Por serem brancas podem ser utilizadas com solventes.',
      'São macias e podem ser utilizadas também em superfícies delicadas como móveis na remoção de poeira, serragem, manchas e resíduos de madeira, sem danificar as superfícies.',
      'Eficiente tanto na limpeza leve como na limpeza pesada de óleos, graxas mãos e peças. ',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: 'Malha 100% algodão e macias'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente custo benefício',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
        quantity: 'kg'
      },
      content: [
        {
          size: 'Material: malha 100% algodão',
        },
        {
          size: 'Dimensões: variadas',
        },
        {
          size: 'Cor: branca',
        },
        {
          size: 'Bordas: sem costura ',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Macias',
        },
        {
          size: 'Excelente custo benefício',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, moveleira, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Malha Colorida',
    slug: 'malha-colorida',
    img: '/img/produtos/malha-colorida.webp',
    conteudo: '/img/conteudo/malha-colorida.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Retalhos',
    desc: [
      'Retalhos coloridos de pano de malha de algodão sem costura. Tecido macio com boa capacidade de absorção, não risca e não solta fiapos. Por ser colorida não é recomendável o uso com solventes. Eficiente tanto na limpeza leve em geral como na limpeza pesada de óleos, graxas mãos e peças.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: 'Malha 100% algodão e macias'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente custo benefício',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos',
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: malha 100% algodão',
        },
        {
          size: 'Dimensões: variadas',
        },
        {
          size: 'Cores: variadas',
        },
        {
          size: 'Bordas: sem costura',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Macias',
        },
        {
          size: 'Excelente custo benefício',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Retalhos de malha costurados',
    slug: 'retalho-malha-costurado',
    img: '/img/produtos/retalho-malha-costurado.webp',
    conteudo: '/img/conteudo/retalho-malha-costurado.webp',
    conteudo1: '/img/conteudo/retalho-de-malha-costurado-add.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Retalhos',
    desc: [
      'Retalhos de malha coloridos costurados, também conhecidos como, “estopa de pano” “pastelão”, ou “trapo de malha.” ',
      'São pequenos retalhos de malha provenientes de confecção, sobrepostos e costurados.',
      'Recomendado para diversas aplicações, principalmente em setores onde são necessárias atividades de manutenção para limpar superfícies metálicas, remover óleos, graxas e partículas de resíduos em peças e componentes. Por ser colorido não é recomendável o uso com solventes.',
    ],
    highlights: [
      {
        icon: <DropsIcon />,
        desc: 'Absorventes'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente custo benefício'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      }
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: malhas',
        },
        {
          size: 'Dimensões: 25x20 cm aproximadamente',
        },
        {
          size: 'Cores: variadas',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Excelente custo benefício',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/retalho-malha-costurado.webp",
      "/img/conteudo/retalho-de-malha-costurado-add.webp",
    ],
  },
  {
    name: 'Retalhos de toalha felpuda',
    slug: 'retalho-toalha-felpuda',
    img: '/img/produtos/retalhos-toalhas-felpudas.webp',
    conteudo: '/img/conteudo/retalhos-toalhas-felpudas.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Retalhos',
    desc: [
      'São peças de tecido atoalhado com fibras macias, conhecidas como felpa, que proporcionam alto poder de limpeza.',
      'Indicados para limpeza de sujeira, graxas, óleos, resíduos e outros detritos presentes em maquinários, equipamentos e superfícies industriais. As fibras felpudas são capazes de absorver a sujeira, tornando este retalho ideal para a limpeza de derramamentos ou áreas com acúmulo de substâncias.',
      'Em sua composição possui algodão e poliéster que confere absorção, durabilidade e resistência.',
    ],
    highlights: [
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Resistente />,
        desc: 'Resistente',
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: algodão e poliéster',
        },
        {
          size: 'Dimensões: 50x30 aproximadamente',
        },
        {
          size: 'Cores: variadas',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Resistente',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Branca para Polimento',
    slug: 'estopa-branca-polimento',
    img: '/img/produtos/estopa-branca-para-polimento.webp',
    conteudo: '/img/conteudo/estopa-branca-para-polimento.webp',
    conteudo1: '/img/conteudo/estopa-branca-para-polimento-solta.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Estopas',
    desc: [
      'Produzida em fibras 100% algodão de alta qualidade para polimento e limpeza de superfícies em geral.',
      'Uma ótima opção de polimento suave e não abrasiva.',
      'Muito utilizada para polimento e limpeza em várias aplicações, incluindo automóveis, móveis de madeira, metais e superfícies delicadas.',
      'A estopa branca para polimento também é amplamente utilizada em indústrias na limpeza de máquinas e equipamentos devido à sua versatilidade e eficácia em polimento e remoção de óleos, graxas e outros produtos químicos.',
      'Disponível em fardos a granel e também em pacotes menores, para distribuidores, com opção de inserir o rótulo com a logomarca do cliente.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% Algodão e super macia'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
        quantity: 'pacote'
      },
      content: [
        {
          size: 'Material: fios têxteis 100% algodão',
        },
        {
          size: 'Cor: branca',
        },
        {
          size: 'Fardos: 10/30/50/60 kg',
        },
        {
          size: 'Pacote: 150gr - 50 unds.',
        },
        {
          size: 'Pacote: 200gr - 50 unds.',
        },
        {
          size: 'Pacote: 400gr - 25 unds.',
        },
        {
          size: 'Pacote: 500gr - 20 unds.',
        },
        {
          size: 'Pacote: 1kg - 10 unds.',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: '100% algodão',
        },
        {
          size: 'Super macia',
        },
        {
          size: 'Absorvente',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Polimento',
        },
        {
          size: 'Limpeza leve',
        },
        {
          size: 'Limpeza pesada',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/estopa-branca-para-polimento.webp",
      "/img/conteudo/estopa-branca-para-polimento-solta.webp",
    ],
  },
  {
    name: 'Branca para Limpeza',
    slug: 'estopa-branca-limpeza',
    img: '/img/produtos/estopa-branca-para-limpeza.webp',
    conteudo: '/img/conteudo/estopa-branca-para-limpeza.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Estopas',
    desc: [
      'Produzida em fibras têxteis mistas de algodão e poliéster indicada para limpeza de superfícies em geral.',
      'Ótima opção para limpar e remover sujeiras, poeiras, óleos, graxas, resíduos de máquinas e equipamentos industriais.',
      'Pode ser aplicada com ou sem o uso de produtos químicos, dependendo da finalidade do uso.',
    ],
    highlights: [
      {
        icon: <Limpeza />,
        desc: 'Limpeza em geral'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
      {
        icon: <Solvente />,
        desc: 'Pode ser utilizada com solventes'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 80% algodão e 20% poliéster',
        },
        {
          size: 'Cor: branca',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza em geral',
        },
        {
          size: 'Diversos usos',
        },
        {
          size: 'Pode ser utilizada com solventes',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Colorida (1ª linha)',
    slug: 'estopa-colorida-1-linha',
    img: '/img/produtos/estopa-colorida-1-linha.webp',
    conteudo: '/img/conteudo/estopa-colorida-1-linha.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Estopas',
    desc: [
      'Estopa Colorida de Primeira Linha, produzida em fibras têxteis coloridas de algodão com excelente poder de absorção.',
      'Ótima opção para oficinas e limpeza pesada de óleos, graxas, resíduos de máquinas e equipamentos industriais.',
      'Pode ser aplicada com ou sem o uso de produtos químicos, dependendo da finalidade do uso. Por ser colorida não é recomendado o uso com solventes.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% Algodão'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente poder de limpeza'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 100% algodão',
        },
        {
          size: 'Cor: colorida',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
        //quantity: 'unid.'
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Excelente poder de limpeza',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
        {
          size: 'Limpeza média',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Colorida (2ª linha)',
    slug: 'estopa-colorida-2-linha',
    img: '/img/produtos/estopa-colorida-2-linha.webp',
    conteudo: '/img/conteudo/estopa-colorida-2-linha.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Estopas',
    desc: [
      'A Estopa Colorida de Segunda Linha é uma estopa mista, produzida com fios têxteis de algodão e poliéster coloridos.',
      'Ideal para limpeza pesada, muito usada por postos de combustíveis, em áreas de graxa, oficinas mecânicas de máquinas pesadas, manutenção de máquinas agrícolas e tratores.',
      'Por ser colorida não recomendado o uso com solventes.',
    ],
    highlights: [
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Retorno />,
        desc: 'Excelente poder de limpeza'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 70% algodão e 30% poliéster',
        },
        {
          size: 'Cor: colorida',
        },
        {
          size: 'Embalagens: 10/30/50/60 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Excelente poder de limpeza',
        },
        {
          size: 'Diversos usos',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza pesada',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Automotivo, alimentos e bebidas, aeroespacial, agrícola, eletrônica, química, cerâmica, embalagens, papel e celulose, metalúrgica, construção, energia, transporte, impressão e gráfica, oficinas, manufatura em geral.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Algodão Hidrofóbico para laboratório',
    slug: 'algodao-hidrofobico-laboratorio',
    img: '/img/produtos/algodao-hidrofobico.webp',
    conteudo: '/img/conteudo/algodao-hidrofobico.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Algodão',
    desc: [
      'O algodão hidrofóbico é elaborado com fibras 100% de algodão cru com baixa capacidade de absorção de líquidos e baixo teor de impurezas.',
      'Produtos elaborados com material hidrofóbico não são impermeáveis, porém a capacidade de repelência é suficiente e essencial para impedir a transferência de líquidos.',
      'O algodão hidrofóbico é uma opção adequada para uso em laboratórios, dependendo das necessidades específicas e das aplicações realizadas no ambiente laboratorial. O algodão hidrofóbico é tratado para repelir a água, o que pode ser conveniente em algumas situações de laboratório em que o contato com líquidos é incompatível com a análise ou experimento em questão.',
      'Também pode ser utilizado na fabricação de aparelhos gessados e ortopedia em geral.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão e extra macio'
      },
      {
        icon: <DropsIcon />,
        desc: 'Baixa absorção'
      },
      {
        icon: <Residuos />,
        desc: 'Baixo teor de impurezas'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 100% algodão',
        },
        {
          size: 'Cor: cru natural',
        },
        {
          size: 'Pacotes/Embalagens: 1kg - 10 unds.',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Baixa absorção',
        },
        {
          size: 'Baixo teor de impurezas',
        },
        {
          size: 'Extra macio',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Repelir líquidos',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Indústrias químicas, em análises e experimentos laboratoriais, indústrias de aparelhos ortopédicos ou situações compatíveis onde há necessidade de repelir líquidos.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Algodão Hidrofóbico para pets',
    slug: 'algodao-hidrofobico-pets',
    img: '/img/produtos/algodao-hidrofobico.webp',
    conteudo: '/img/conteudo/algodao-hidrofobico.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Algodão',
    desc: [
      'O algodão hidrofóbico para pets é elaborado com fibras 100% de algodão cru com baixa capacidade de absorção de líquidos e baixo teor de impurezas.',
      'Produtos elaborados com material hidrofóbico não são impermeáveis, porém a capacidade de repelência é suficiente e essencial para impedir a transferência de líquidos.',
      'O algodão hidrofóbico ou impermeável para pets é bastante utilizado para proteger os ouvidos de cães e gatos durante o banho, impedindo a entrada de água nos canais auditivos, uma vez que essa é uma das causas mais frequentes de otite nos animais. Com o algodão hidrofóbico os ouvidos do seu pet estarão protegidos durante o banho.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% algodão e extra macio'
      },
      {
        icon: <DropsIcon />,
        desc: 'Baixa absorção'
      },
      {
        icon: <Residuos />,
        desc: 'Baixo teor de impurezas'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 100% algodão',
        },
        {
          size: 'Cor: cru natural',
        },
        {
          size: 'Pacotes/Embalagens: 200gr - 50 unds',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Extra macio',
        },
        {
          size: 'Baixa absorção',
        },
        {
          size: 'Baixo teor de impurezas',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Proteção de ouvidos de cães durante o banho',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Para banhos em pet shops, clínicas veterinárias de banho e tosa e banhos domésticos.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Resíduos de algodão',
    slug: 'residuos-algodao',
    img: '/img/produtos/algodao-hidrofobico.webp',
    conteudo: '/img/conteudo/algodao-hidrofobico.webp',
    conteudo1: '/img/conteudo/flats-add.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Algodão',
    desc: [
      'Resíduos de algodão para confecção de fios têxteis.',
      'Nossos resíduos: piolho, flats e penteadeira são indicados para fiações na produção de fios têxteis, e são vendidos de acordo com a qualidade determinada pelos tipos de fibras, filamentos e impurezas.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% resíduo de algodão'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 100% resíduo de algodão',
        },
        {
          size: 'Embalagem: Fardões',
        },
      ]
    },
    vantagens: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Produção de fios têxteis.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/algodao-hidrofobico.webp",
      "/img/conteudo/flats-add.webp",
      "/img/conteudo/piolho-add.webp",
      "/img/conteudo/penteadeira-add.webp",
    ],
  },
  {
    name: 'MicroFibra Lisa',
    slug: 'microfibra-lisa',
    img: '/img/produtos/microfibra-lisa.webp',
    conteudo: '/img/conteudo/microfibra-lisa.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Microfibra',
    desc: [
      'Os panos de microfibra são feitos de tecido sintético composto por fibras ultrafinas de poliéster e poliamida. As fibras extremamente finas proporcionam alto poder de absorção de poeiras, sujeiras e líquidos.',
      'Possui toque macio, sendo muito indicado para a limpeza de telas, vidros e demais superfícies espelhadas ou cromadas devido a sua característica de limpar sem riscar.',
    ],
    highlights: [
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Polimento />,
        desc: 'Retém a poeira'
      },
      {
        icon: <Toque />,
        desc: 'Toque macio'
      },
      {
        icon: <Residuos />,
        desc: 'Limpa sem riscar e sem manchar'
      },
      {
        icon: <Pano />,
        desc: 'Não solta pelo'
      },
      {
        icon: <Cores />,
        desc: 'Cores diferentes para cada setor'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
        quantity: ''
      },
      content: [
        {
          size: 'Material: 80% poliéster e 20% poliamida',
        },
        {
          size: 'Dimensões: 40x40 / 50x90 / 60x80',
        },
        {
          size: 'Gramatura: 230 g/m²',
        },
        {
          size: 'Absorção: alta',
        },
        {
          size: 'Cores: azul, verde, amarela, laranja, cinza',
        },
        {
          size: 'Bordas: overlock nas extremidades',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorventes',
        },
        {
          size: 'Retém a poeira',
        },
        {
          size: 'Toque macio',
        },
        {
          size: 'Limpa sem riscar',
        },
        {
          size: 'Limpa sem manchar',
        },
        {
          size: 'Não solta pelo',
        },
        {
          size: 'Cores diferentes para cada setor',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Em todos os segmentos industriais, escritórios ou residências onde seja necessária a remoção de poeiras e limpeza de superfícies espelhadas ou cromadas, bem como na limpeza de vidros e veículos. ',
        },
      ]
    },
    indicacoes: {
      type: {
        size: 'indicacoes',
      },
      content: [
        {
          size: 'Para maior durabilidade das microfibras, lave-as sempre separadas de outros tipos de panos. Não use amaciantes ou alvejantes, somente sabão neutro.',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'MicroFibra para Vidros',
    slug: 'microfibra-vidros',
    img: '/img/produtos/microfibra-vidros.webp',
    conteudo: '/img/conteudo/microfibra-vidros.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Microfibra',
    desc: [
      'O Pano de Microfibra especial para vidros foi desenvolvido especialmente para a limpeza de superfícies vítreas. Suas tramas não soltam fiapos ou deixam resíduos na superfície.',
      'Com textura diferenciada das demais microfibras, permite que a sujeira seja removida rapidamente e não cause danos ao vidro.',
      'Excelente opção para profissionais que buscam por um perfeito acabamento, livre de resíduo e resultado cristalino.',
      'Ideal para ser utilizado somente com água, para enxugar ou com algum produto como limpa vidros.',
    ],
    highlights: [
      {
        icon: <Polimento />,
        desc: 'Retém a poeira'
      },
      {
        icon: <Toque />,
        desc: 'Toque macio'
      },
      {
        icon: <Residuos />,
        desc: 'Limpa sem riscar e sem manchar'
      },
      {
        icon: <Pano />,
        desc: 'Não solta pelo'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 80% poliéster e 20% poliamida',
        },
        {
          size: 'Dimensões: 40x40cm',
        },
        {
          size: 'Gramatura: 230 g/m²',
        },
        {
          size: 'Cor: azul',
        },
        {
          size: 'Bordas: overlock nas extremidades',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Retém a poeira',
        },
        {
          size: 'Toque macio',
        },
        {
          size: 'Limpa sem riscar',
        },
        {
          size: 'Limpa sem manchar',
        },
        {
          size: 'Não solta pelo',
        },
        {
          size: 'Absorvente',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza leve',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza de superfícies como vidros, espelhos e metais, onde se deseja um acabamento perfeito.',
        },
        {
          size: 'Ideal para limpeza e secagem de vidros automotivos, residenciais, institucionais.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: 'indicacoes',
      },
      content: [
        {
          size: 'Para maior durabilidade das microfibras, lave-as sempre separadas de outros tipos de panos. Não use amaciantes ou alvejantes, somente sabão neutro.',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'MicroFibra Automotiva',
    slug: 'microfibra-automotiva',
    img: '/img/produtos/microfibra-automotiva.webp',
    conteudo: '/img/conteudo/microfibra-automotiva.webp',
    conteudo1: '/img/conteudo/microfibra-automotiva-nova.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Microfibra',
    desc: [
      'O Pano de Microfibra Automotiva com Borda Laranja é extremamente macio, confere segurança para lavar, secar, aplicar produtos, remover ceras, lustrar e limpeza a seco.',
      'Absorve bem a água, não risca e não solta fiapos.  Sua qualidade e tamanho o torna eficaz e dinâmico para qualquer trabalho automotivo, seja na limpeza externa ou interna como vidros e painéis.',
      'Possui dois lados sendo um deles mais felpudo que funciona muito bem na remoção de produto ou secagem automotiva e o lado com a microfibra mais lisa, mais baixa para lustrar e dar acabamento.',
    ],
    highlights: [
      {
        icon: <Retorno />,
        desc: 'Ótimo custo benefício'
      },
      {
        icon: <Relogio />,
        desc: 'Durável'
      },
      {
        icon: <Toque />,
        desc: 'Toque macio'
      },
      {
        icon: <Residuos />,
        desc: 'Limpa sem riscar'
      },
      {
        icon: <Pano />,
        desc: 'Não solta pelo'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
    ],
    especificacoes: {
      type: {
        size: 'espicificacoes',
      },
      content: [
        {
          size: 'Material: 80% poliéster e 20% poliamida',
        },
        {
          size: 'Dimensões: 40x60cm',
        },
        {
          size: 'Gramatura: 300 / 350 g/m²',
        },
        {
          size: 'Absorção: alta',
        },
        {
          size: 'Cor: amarelo',
        },
        {
          size: 'Bordas: overlock laranja',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Ótimo custo benefício',
        },
        {
          size: 'Durável',
        },
        {
          size: 'Toque macio',
        },
        {
          size: 'Limpa sem riscar',
        },
        {
          size: 'Não solta pelo',
        },
        {
          size: 'Absorvente',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza em geral',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Indicado para qualquer cuidado automotivo. Excelente absorção de sujeira, gordura e água. Pode ser utilizado seco, úmido ou molhado.',
        },
        {
          size: 'Pode ser utilizado em uma ampla variedade de objetos, incluindo superfícies delicadas.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: 'indicacoes',
      },
      content: [
        {
          size: 'Para maior durabilidade das microfibras, lave-as sempre separadas de outros tipos de pano. Pode ser lavado a mão ou na máquina. Não use amaciantes ou alvejantes, somente sabão neutro.',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/microfibra-automotiva.webp",
      "/img/conteudo/microfibra-automotiva-nova.webp",
    ],
  },
  {
    name: 'Flanela Laranja',
    slug: 'flanela-laranja',
    img: '/img/produtos/flanela-laranja.webp',
    conteudo: '/img/conteudo/flanela-laranja.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Flanelas',
    desc: [
      'Confeccionadas em tecido 100% algodão possui textura macia, indicada para limpeza de superfícies delicadas e polimento de objetos. Disponível nas cores laranja e branca, em 3 tamanhos diferentes.',
    ],
    highlights: [
      {
        icon: <CottonIcon />,
        desc: '100% Algodão'
      },
      {
        icon: <Toque />,
        desc: 'Toque macio'
      },
      {
        icon: <Residuos />,
        desc: 'Não risca'
      },
      {
        icon: <Lustra />,
        desc: 'Lustra'
      },
      {
        icon: <Polimento />,
        desc: 'Promove polimento'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 100% algodão',
        },
        {
          size: 'Dimensões: 28x38 / 28x48 / 38x58 cm',
        },
        {
          size: 'Gramatura: 16g / 20g / 32g ',
        },
        {
          size: 'Cores: branca e laranja',
        },
        {
          size: 'Acabamento: flanelado',
        },
        {
          size: 'Bordas: overlock nas extremidades',
        },
        {
          size: 'Embalagem: pacotes com 12 unds.',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Toque macio',
        },
        {
          size: 'Não risca',
        },
        {
          size: 'Lustra',
        },
        {
          size: 'Promove polimento',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza leve e polimento',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Em todos os segmentos industriais, escritórios ou residências onde seja necessária a remoção de poeiras e limpeza em superfícies delicadas e polimento de objetos.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Multiuso Rolo',
    slug: 'multiuso-rolo',
    img: '/img/produtos/multiuso-rolo.webp',
    conteudo: '/img/conteudo/multiuso-rolo.webp',
    conteudo1: '/img/conteudo/pano-multiuso-add.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Multiuso',
    desc: [
      'Pano multiuso indicado para limpeza doméstica e institucional. Ótimo para a limpeza de superfícies pois enxuga e retém com eficácia a sujeira.  Disponível em quatro cores diferentes, ideal para setorizar a limpeza e evitar a contaminação cruzada.',
    ],
    highlights: [
      {
        icon: <Toque />,
        desc: 'Limpeza de diversas superfícies'
      },
      {
        icon: <Residuos />,
        desc: 'Não risca e não solta fiapos'
      },
      {
        icon: <Folhas />,
        desc: 'Folhas destacáveis'
      },
      {
        icon: <Praticidade />,
        desc: 'Praticidade'
      },
      {
        icon: <Limpeza />,
        desc: 'Uso profissional'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 50% viscose / 50% poliéster',
        },
        {
          size: 'Dimensões: 28x40',
        },
        {
          size: 'Gramatura: 35g/m',
        },
        {
          size: 'Cores: azul / branco / laranja / verde',
        },
        {
          size: 'Embalagem: Rolo com 600 panos',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza de diversas superfícies',
        },
        {
          size: 'Não risca e não solta fiapos',
        },
        {
          size: 'Folhas destacáveis',
        },
        {
          size: 'Praticidade',
        },
        {
          size: 'Uso profissional',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpezas em geral em indústrias alimentícias, restaurantes, setores industriais, clínicas, hospitais e serviços domésticos.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/multiuso-rolo.webp",
      "/img/conteudo/pano-multiuso-add.webp",
    ],
  },
  {
    name: 'TNT Wiper',
    slug: 'tnt-wiper',
    img: '/img/produtos/tnt-wiper.webp',
    conteudo: '/img/conteudo/tnt-wiper.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Multiuso',
    desc: [
      'O TNT Wiper é um tecido não tecido, bem leve, composto por um aglomerado de fibras sintéticas como polipropileno, poliéster e polietileno.',
      'É um material descartável, indicado para diversos setores industriais onde houver necessidade de limpeza fina e leve de superfícies em geral.',
      'Não risca, não solta pelinhos ou fiapos.',
      'Vendidos por kg como (2ª Linha) podem conter alguns defeitos.',
    ],
    highlights: [
      {
        icon: <Residuos />,
        desc: 'Não solta fiapos ou resíduos'
      },
      {
        icon: <Pano />,
        desc: 'Diversos usos'
      },
      {
        icon: <Praticidade />,
        desc: 'Praticidade'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: polipropileno, poliéster e polietileno.',
        },
        {
          size: 'Dimensões: 40x35 cm aproximadamente',
        },
        {
          size: 'Gramatura: 35g/m²',
        },
        {
          size: 'Cor: branca ',
        },
        {
          size: 'Embalagem: sacos 10 kg',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Não solta fiapos',
        },
        {
          size: 'Diversos usos',
        },
        {
          size: 'Praticidade',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Atende diversos setores industriais, institucionais, na limpeza em geral de peças e máquinas.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Pralim',
    slug: 'pralim',
    img: '/img/produtos/pralim.webp',
    conteudo: '/img/conteudo/pralim.webp',
    conteudo1: '',
    conteudo2: '',
    conteudo3: '',
    category: 'Panos Multiuso',
    desc: [
      'Pralim é um pano absorvente industrial produzido a partir de um não tecido agulhado.  Possui estrutura porosa, para absorver e reter rapidamente qualquer tipo de sujeira ou líquido gerado por máquinas e equipamentos industriais. Ideal para ser colocado em cima de algum derramamento ou limpeza pesada na absorção de óleos e graxas.',
    ],
    highlights: [
      {
        icon: <Fibras />,
        desc: '100% fibras diversas'
      },
      {
        icon: <Oleo />,
        desc: 'Absorção de óleo'
      },
      {
        icon: <Graxa />,
        desc: 'Remoção de graxa'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Material: 100% fibras diversas',
        },
        {
          size: 'Dimensões: 29x29 cm',
        },
        {
          size: 'Gramatura: 180g/m2',
        },
        {
          size: 'Core: cinza',
        },
        {
          size: 'Quantidade por embalagem: 500 unds',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorção de óleo',
        },
        {
          size: 'Remoção de graxa',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Limpeza média',
        },
        {
          size: 'Limpeza pesada',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Indicado para uso em gráficas, oficinas mecânicas, indústrias químicas, postos de combustíveis e outros.',
        },
        {
          size: 'Utilizar até observar a saturação do produto, quando então o mesmo deverá ser descartado em local e de maneira adequada',
        },
      ]
    },
    indicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    slideImage: [
      "",
      "",
      "",
    ],
  },
  {
    name: 'Manta Protetora de Piso',
    slug: 'manta-protetora-de-piso',
    img: '/img/produtos/manta-protetora-de-piso.webp',
    conteudo: '/img/conteudo/manta-protetora-de-piso.webp',
    conteudo1: '/img/conteudo/manta-protetora-de-piso-add.webp',
    conteudo2: '',
    conteudo3: '',
    category: 'Manta Protetora',
    desc: [
      'Fabricado em feltro super absorvente, a Manta Protetora de piso absorve líquidos como tinta, gesso, óleo e respingos.  Seca rapidamente, pois contêm uma camada plástica que não permite que o líquido vaze para o outro lado do feltro protetor, mantendo o piso limpo e seguro da umidade.',
      'Reutilizável, pode ser cortado de acordo com a necessidade, sendo um produto essencial para um trabalho limpo.',
    ],
    highlights: [
      {
        icon: <Fibras />,
        desc: '100% fibras diversas'
      },
      {
        icon: <DropsIcon />,
        desc: 'Absorvente'
      },
      {
        icon: <Vazamento />,
        desc: 'Previne vazamento'
      },
      {
        icon: <Piso />,
        desc: 'Protege o piso/solo'
      },
    ],
    especificacoes: {
      type: {
        size: 'especificacoes',
      },
      content: [
        {
          size: 'Manta absorvente dupla face',
        },
        {
          size: 'Material: 100% fibras diversas',
        },
        {
          size: 'Dimensões: rolo 1m x 20m',
        },
        {
          size: 'Gramatura: 360g/m2',
        },
      ]
    },
    vantagens: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Absorvente',
        },
        {
          size: 'Contém vazamentos',
        },
        {
          size: 'Previne vazamentos',
        },
        {
          size: 'Protege o piso /solo',
        },
      ]
    },
    aplicacoes: {
      type: {
        size: '',
      },
      content: [
        {
          size: '',
        },
      ]
    },
    segmentos: {
      type: {
        size: 'cm',
      },
      content: [
        {
          size: 'Para proteção de piso ou solo.',
        },
        {
          size: 'Em indústrias, ao redor ou em baixo de máquinas onde precise conter algum vazamento ou derramamento de óleo graxa ou tinta.',
        },
        {
          size: 'Em obras, serviços de pintura e gesso para proteção do piso e revestimentos.',
        },
      ]
    },
    indicacoes: {
      type: {
        size: 'indicacoes',
      },
      content: [
        {
          size: 'Utilizar até observar a saturação do produto, quando então o mesmo deverá ser descartado em local e de maneira adequada.',
        },
      ]
    },
    slideImage: [
      "/img/conteudo/manta-protetora-de-piso.webp",
      "/img/conteudo/manta-protetora-de-piso-add.webp",
    ],
  },
]