import { Injectable } from '@angular/core';
import { BotaoInicial } from '../modelo/botaoInicial.model';
import { Servico } from '../modelo/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ValorService {
  idAnterior: string = '';
  botoesInicias: Array<BotaoInicial> = [
    {
      name: '1',
      descricao: 'Inicio',
      rota: '#inicio'
    },
    {
      name: '2',
      descricao: 'Serviços',
      rota: '#servicos'
    },
    {
      name: '3',
      descricao: 'Sobre',
      rota: '#sobre'
    },
    {
      name: '4',
      descricao: 'Equipe',
      rota: '#equipe'
    },
  ];

  servicos: Array<Servico> = [
    {
      lado: 'left',
      descricao: 'Instalação de infraestrutura',
      rota: 'instalacaoInfraestrutura',
      conteudo: `A instalação de infraestrutura de redes é o processo de criar uma rede de computadores para permitir a comunicação e compartilhamento de dados entre dispositivos.
      Isso inclui o planejamento, design, instalação e configuração dos componentes da rede. É importante considerar fatores como segurança, desempenho e escalabilidade ao planejar
      e implementar uma infraestrutura de rede. É necessário ter conhecimentos técnicos avançados de rede e seguir as melhores práticas para garantir uma instalação bem-sucedida e eficiente.`
    },
    {
      lado: 'right',
      descricao: 'Cable management',
      rota: 'cableManagement',
      conteudo: `O cable management é o processo de organização e gestão dos cabos em uma instalação de rede ou sistema de computador.
      Isso inclui a rotulação, agrupamento e fixação dos cabos para garantir a estética, 
      acessibilidade e manutenção da instalação. O cable management também é importante para melhorar a ventilação e evitar danos aos cabos.
      Uma boa gestão de cabos pode melhorar a aparência da instalação, facilitar a manutenção e garantir a integridade dos sinais de dados transmitidos.`
    },
    {
      lado: 'left',
      descricao: 'Varredura de rede',
      rota: 'varreduraRede',
      conteudo: `A varredura de rede é o processo de escaneamento de uma rede para identificar e coletar informações sobre os dispositivos conectados.
      Isso inclui endereços IP, fabricantes, modelos, sistemas operacionais e outros detalhes.
      A varredura de rede é comumente usada para verificar a segurança da rede,
      encontrar dispositivos desatualizados ou vulneráveis e monitorar mudanças na topologia da rede.`
    },
    {
      lado: 'right',
      descricao: 'Consultoria para provedores',
      rota: 'consultoriaProvedores',
      conteudo: `A consultoria para provedores de serviços é um tipo de serviço de assessoria para empresas que oferecem serviços como, provedores de internet, provedores de serviços em nuvem, provedores de serviços de segurança cibernética, entre outros.
      A consultoria pode ajudar essas empresas a melhorar sua eficiência, expandir sua base de clientes, aumentar sua receita e resolver problemas técnicos e de negócios. 
      A consultoria pode incluir serviços como análise de mercado, planejamento estratégico, soluções de TI personalizadas, treinamento e suporte técnico.`
    },
    {
      lado: 'left',
      descricao: 'Consultoria para reestruturação e melhoria de redes',
      rota: 'reestruturacaoMelhoriaRedes',
      conteudo: `A consultoria para reestruturação e melhoria de redes é um serviço de assessoria para empresas que buscam melhorar sua infraestrutura de rede.
      Isso pode incluir uma revisão da topologia da rede, da segurança da rede, da escalabilidade e da eficiência, bem como a identificação de oportunidades para melhorias.
      Um consultor para reestruturação e melhoria de redes pode ajudar a empresa a identificar pontos fracos na rede e propor soluções para melhorar a segurança, o desempenho e a escalabilidade da rede.
      A consultoria também pode incluir treinamento para os funcionários da empresa sobre as melhores práticas de gestão de rede e suporte para implementação das soluções propostas.
      É importante escolher um consultor com conhecimento avançado da tecnologia de rede e experiência em reestruturação e melhoria de redes.`
    },
    {
      lado: 'right',
      descricao: 'Troca de equipamentos de rede em geral',
      rota: 'trocaEquipamentos',
      conteudo: `A troca de equipamentos de rede em geral refere-se ao processo de substituição de componentes obsoletos ou danificados da rede por novos equipamentos.
      Isso pode incluir dispositivos como roteadores, switches, firewalls, access points, cabos e outros componentes da rede. 
      A troca de equipamentos de rede é uma parte importante da manutenção da rede e pode melhorar significativamente o desempenho, a segurança e a escalabilidade da rede. 
      No entanto, a troca de equipamentos de rede também pode ser complicada e requer conhecimento técnico avançado para evitar interrupções na rede ou perda de dados.`
    },
  ];

  constructor() { }

  ativo(id: string) {
    document.getElementById('botao' + this.idAnterior)?.setAttribute('style', 'border-bottom: none;');
    document.getElementById('texto' + this.idAnterior)?.setAttribute('style', 'color: white;');
    document.getElementById('botao' + id)?.setAttribute('style', 'border-bottom: 3px solid #FFB701;');
    document.getElementById('texto' + id)?.setAttribute('style', 'color: #FFB701;');
    this.idAnterior = id;
  }
}
