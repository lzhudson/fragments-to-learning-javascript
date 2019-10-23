// console.log(window);
// window.alert(1);
// Single element selectin
// console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('#name'));
// console.log(document.querySelector('#email'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('ul li'));
// // Multiple element selection
// console.log(document.querySelectorAll('ul li'));
// console.log(document.getElementsByTagName('ul li'));
// console.log(document.getElementsByTagName('li')
// );

// const items = document.querySelectorAll('li.item');
// items.forEach((item, index) => {
//   console.log(item);
//   item.textContent += ` ${index}`
// })

// const ul = document.querySelector('#user');
// console.log(ul);
// console.log(ul.lastElementChild);
// ul.lastElementChild.remove();
// ul.lastElementChild.textContent = 'Hello';
// ul.firstElementChild.textContent = 'First li';
// console.log(ul.children);
// ul.children[1].innerText = 'Hudson';
// ul.lastElementChild.innerHTML = '<h1>Hudson</h1>';

// const btn = document.querySelector('input[type="submit"]');
// btn.style.backgroundColor = 'red';

// btn.addEventListener('click', (e)=>{
//   console.log('click');
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   document.querySelector('.container').style.backgroundColor = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('#user').lastElementChild.innerHTML = 'Modified after click';
//   e.preventDefault();
// })
const myForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const btnSend = document.querySelector('input[type="submit"]');
const listUsers = document.querySelector('#user');
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === ''){
    // alert('Please enter fields');
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error');
    setTimeout(function(){
      msg.remove();
    }, 2000)
  } else {
    const li = document.createElement('li');
    li.classList = 'item';
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    listUsers.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    }
}

