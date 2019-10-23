let form = document.querySelector('form');
let nameInput = document.querySelector('#nome');
let ageInput = document.querySelector('#idade');
let cpfInput = document.querySelector('#cpf');
let cityInput = document.querySelector('#cidade');
let resultado = document.querySelector('.resultado');
form.addEventListener('submit', setLocalStorage);
function setLocalStorage(e) {
  // JSON.stringify(localStorage.setItem('nome', 'Hudson'));
  // JSON.stringify(localStorage.setItem('idade', 20));
  
  let nameValue = nameInput.value;
  let ageValue = ageInput.value;
  let cpfValue = cpfInput.value;
  let cityValue = cityInput.value;
  // JSON.stringify(localStorage.setItem('nome', nameValue));
  // JSON.stringify(localStorage.setItem('idade', ageValue));
  // JSON.stringify(localStorage.setItem('cpf', cpfValue));
  // JSON.stringify(localStorage.setItem('cidade', cityValue));

  var pessoa = JSON.stringify({
    nome: nameValue,
    idade: ageValue,
    cpf: cpfValue,
    cidade: cityValue
  });
  localStorage.setItem('pessoa', pessoa);
  e.preventDefault();
}
function getLocalStorage(){
  // var nome = localStorage.getItem('nome');
  // var idade = localStorage.getItem('idade');
  var pessoa = JSON.parse(localStorage.getItem('pessoa'));

  for (const key in pessoa) {
    resultado.innerHTML += `<ul>
    <li>${key} : ${pessoa[key]}</li>
    </ul>`
  }
  
}
function removeLocalStorage() {
  localStorage.removeItem('nome');
  localStorage.removeItem('idade');
}
// setLocalStorage();
// console.log(getLocalStorage());
// removeLocalStorage();
getLocalStorage();