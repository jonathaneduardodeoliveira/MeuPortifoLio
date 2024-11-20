import React from 'react';
import SocialLinks from '../components/SocialLinks';

function Home() {
  return (
    <div className="container text-center my-5">
      <h2>Sobre Mim</h2>
      <p>
        Possuo mais de 5 anos de experiência na área de Tecnologia da Informação, atuando em suporte técnico, manutenção de sistemas e infraestrutura de TI.
      </p>
      <p>
        Minha trajetória me proporcionou habilidades sólidas em informática, abrangendo desde o básico até o avançado, com conhecimento prático em hardware, software, organização e atendimento ao cliente.
      </p>
      <p>
        Como técnico de TI autônomo, realizei serviços de formatação, instalação de sistemas operacionais e manutenção preventiva de computadores, aprimorando minha expertise em infraestrutura de TI.
      </p>
      <p>
        Além disso, concluí um Bootcamp de Java pela plataforma Ada, onde desenvolvi competências:
        <ul className="text-start">
          <li>Fundamentos de Java e Programação Orientada a Objetos (POO);</li>
          <li>Utilização do framework <span translate="no">Spring</span> para desenvolvimento de APIs e aplicações robustas;</li>
          <li>Implementação de testes automatizados para garantir qualidade de código;</li>
          <li>Construção de sistemas escaláveis com arquitetura de Microserviços.</li>
        </ul>
      </p>
      <p>
        Minha paixão por tecnologia e acessibilidade me motiva a criar sistemas que não apenas impulsionem o crescimento das empresas, mas também promovam inclusão tecnológica para pessoas com deficiência.
      </p>
      <p>
        Sempre em busca de novos desafios, estou comprometido em contribuir com minha experiência e dedicação para agregar valor às equipes e projetos nos quais atuo.
      </p>

      <h3>Minhas Competências</h3>
      <ul className="list-inline">
        <li className="list-inline-item" translate="no">Java</li>
        <li className="list-inline-item" translate="no">Spring Boot</li>
        <li className="list-inline-item" translate="no">React</li>
        <li className="list-inline-item" translate="no">HTML</li>
        <li className="list-inline-item" translate="no">CSS</li>
        <li className="list-inline-item" translate="no">JavaScript</li>
        <li className="list-inline-item" translate="no">MySQL</li>
        <li className="list-inline-item" translate="no">Git</li>
        <li className="list-inline-item" translate="no">GitHub</li>
        <li className="list-inline-item" translate="no">Power BI</li>
        <li className="list-inline-item" translate="no">CMD</li>
        <li className="list-inline-item" translate="no">PowerShell</li>
      </ul>
      <SocialLinks />
    </div>
  );
}

export default Home;
