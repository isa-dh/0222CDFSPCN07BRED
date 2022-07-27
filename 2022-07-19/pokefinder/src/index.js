import React from 'react';
import ReactDOM from 'react-dom/client';

import { Card } from './components/Card';

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card
      nome="Pikachu"
      tipo="Elétrico"
      imagem="http://pm1.narvii.com/6434/7a2cb5fc86df1db37db549422128c66186059808_00.jpg"
    />
    <Card
      nome="Snorlax"
      tipo="Dorminhoco"
      imagem="https://cf.shopee.com.br/file/1731f517f5e41b3bbf4c51b4dc123faa"
    />
    <Card
      nome="Snorlax"
      tipo="Dorminhoco"
      imagem="https://cf.shopee.com.br/file/1731f517f5e41b3bbf4c51b4dc123faa"
    />
    <Card nome="Kakuna" tipo="Inseto" imagem="https://img.pokemondb.net/artwork/large/kakuna.jpg" />
  </React.StrictMode>,
);
