import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
        {' '}Servicii Web pentru sistemul educational romanesc - <a href="mailto:contact@invat.eu">contact@invat.eu</a>
        <br />
        {' '}Acceseaza <a href="https://blog.invat.eu">Blog</a>
        {' '} sau ultimul proiect: <a target="_blank" rel="noopener noreferrer" href="https://gradinita-veseliei.ro/">Gradinita Veseliei</a>
      </p>
    </header>
  );
}
