export function createAndAddElement() {


   document.querySelector('.createAndAddElement').addEventListener('click', () => {
      const template = document.getElementById('myTemplate');
      const clone = document.importNode(template.content, true);
      const container = document.getElementById('container');
      container.appendChild(clone);
   })
}
