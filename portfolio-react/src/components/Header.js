import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">      <img
        src="/minha-foto.jpg"
        alt="Homem pardo de camisa gola polo"
        className="rounded-circle mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />

        <h1>Jonathan Eduardo de Oliveira</h1>
        <p>desenvolvedor Full Stack ,Java, React,HTML, CSS, JavaScript .
e mysql,Git, GitHub,Power BI. </p>
        <nav>
          <Link to="/" className="btn btn-light me-2">Home</Link>
          <Link to="/projects" className="btn btn-light">Projetos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
