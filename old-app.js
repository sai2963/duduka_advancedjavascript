//let anchorelement=document.getElementById('exlink');
//anchorelement.href='https://web.whatsapp.com/'

let anchorelements=document.querySelector('a');
anchorelements.href='https://google.com/'
let newElement=document.createElement('a');
newElement.textContent='link1';
newElement.href='https://google.com/';
let firstElement=document.querySelector('p')
firstElement.append(newElement);

firstElement.parentElement.append(firstElement)
firstElement.parentElement.before()