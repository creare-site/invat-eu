import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
        {' '}Servicii Web pentru sistemul educational din Romania - <a href="mailto:contact@invat.eu">contact@invat.eu</a>
        <br />
        {' '}Proiecte:{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://gradinita-veseliei.ro/">Gradinita Veseliei</a>
      </p>
    </header>
  );
}
