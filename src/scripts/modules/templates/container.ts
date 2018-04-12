import { stringToNode } from '../utils';

export const containerTmpl: string = `
  <div class="container">
  </div>
`;

export const renderContainer = (): HTMLElement => {
  const el: HTMLElement = stringToNode(containerTmpl);

  return el;
};
