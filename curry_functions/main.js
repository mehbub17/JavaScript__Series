

//curry example for web pages

const updateElementText = id => text => document.querySelector(`${id}`).textContent = text;