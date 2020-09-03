import Contents from "./../../../dist/index.umd";

const contents = Contents();

window.document.querySelector('#contents').appendChild(contents.list());
