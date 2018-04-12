export const getNode = (className: string): HTMLElement => {
  const selector = `.${className}`;

  return <HTMLElement>document.querySelector(selector);
};

export const stringToNode = (html: string): HTMLElement => {
  let wrapper: HTMLElement = document.createElement('div');
  wrapper.innerHTML = html.trim();

  return <HTMLElement>wrapper.firstChild;
};

export const insertAfter = (newNode: Node, referenceNode: Node) => {
  let nextNode = referenceNode.nextSibling;
  let parentNode = referenceNode.parentNode;

  parentNode.insertBefore(newNode, nextNode);
};

export const removeNode = (node: Node) => {
  node.parentElement.removeChild(node);
};