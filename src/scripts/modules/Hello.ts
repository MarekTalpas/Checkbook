import { renderContainer } from './templates/container';
import { getNode } from './utils';

export const sayHello = () => {
  const container: HTMLElement = renderContainer();
  container.textContent = 'Hello World!!!';
  document.body.appendChild(container);
};
