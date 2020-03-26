import React, {Component} from 'react';
import Product from './Product';
import {Container} from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg',
        title: 'Sett',
        description:
          'Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em Navori, ele logo conquistou notoriedade com sua força bruta e capacidade de...',
        funct: 'Função: LUTADOR',
      },
      {
        id: 2,
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
        title: 'Zoe',
        description:
          'Como a personificação da travessura, imaginação e mudança, Zoe atua como a mensageira cósmica de Targon, anunciando a chegada de grandes eventos que redefinem mundos. Sua mera presença altera a matemática arcana que governa as realidades, às vezes...',
        funct: 'Função: MAGO',
      },
      {
        id: 3,
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg',
        title: 'Kindred',
        description:
          'Distintos, mas nunca separados, os Kindred representam as essências gêmeas da morte. O arco da Ovelha propicia uma rápida transição do mundo mortal para aqueles que aceitam seu destino. O Lobo caça aqueles que fogem de seu fim, entregando-lhes a...',
        funct: 'Função: ATIRADOR',
      },
      {
        id: 4,
        image:
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg',
        title: 'Qiyana ',
        description:
          'Na cidade-selva de Ixaocan, Qiyana planeja seu próprio e implacável caminho até o trono de Yun Tal. Última na fila para suceder seus pais, ela enfrenta qualquer um no seu caminho com uma confiança impetuosa e domínio sem precedentes sobre a magia...',
        funct: 'Função: ASSASSINO',
      },
    ],
  };
  render() {
    return (
      <Container>
        {this.state.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    );
  }
}
