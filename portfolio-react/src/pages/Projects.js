import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'Microsserviço Locadora de Carros',
      description: 'Este projeto foi desenvolvido usando Java Spring, dividido em 3 microsserviços. Inclui um banco de dados MySQL, testes unitários com Mockito e cobertura de testes com Jacoco.',
      link: 'https://github.com/jonathaneduardodeoliveira/Microsservi-oCarrosParaODiaaDia',
    },
    {
      name: 'Carteira de Favoritos de Investimentos',
      description: 'Uma aplicação para gerenciar uma carteira de ações, fundos imobiliários e tesouros diretos americanos, desenvolvida em colaboração com dois amigos. Feita com Java Spring e uma API para comunicação e envio de emails automáticos. Inclui testes com Mockito e cobertura de testes com Jacoco.',
      link: 'https://github.com/plasmus777/Projeto_Acoes_Adatech',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Meus Projetos (Back-end e Front-end)</h1>
      <p>Esta é uma página para salvar e exibir meus projetos desenvolvidos.</p>
      <ul>
        {projectList.map((project, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#007bff', textDecoration: 'none' }}
            >
              Ver projeto no GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
