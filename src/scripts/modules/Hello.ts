import { renderContainer } from './templates/container';
import { getNode } from './utils';

export const sayHello = () => {
  const container: HTMLElement = renderContainer();
  container.textContent = 'Hello world!!!';
  document.body.appendChild(container);
};
