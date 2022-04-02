import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './component/Game';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.id = 'hello-example';

  return element;
}

document.body.appendChild(component());


const container = document.getElementById('hello-example');
const root = createRoot(container);
root.render(<Game />);