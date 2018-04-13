import { renderContainer } from './templates/container';
import { getNode } from './utils';

export const logHelloWorld = (name) => {
  const container: HTMLElement = renderContainer();
  container.textContent = 'Hello World!!!!!' + name;
  document.body.appendChild(container);
};
