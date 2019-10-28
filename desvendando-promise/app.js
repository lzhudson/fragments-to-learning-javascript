/* function sumNumbers(){
  let result = 1 + 1;
  if(result == 2) {
    sucessCallback();
  } else {
    errorCallback();
  }
}
function sucessCallback(){
  console.log("Yeah ! Number 2 !");
}
function errorCallback(){
  console.log("Oops ! Somethin wrong");
}
sumNumbers(); */
/* let p = new Promise((resolve, reject) =>{
  let a = 1 + 1;
  if(a == 2){
    resolve('Sucess');
  } else {
    reject('Failed');
  }
});
p.then((message)=>{
  console.log('This is in the then ' + message);
}).catch((err)=>{
  console.log('This is the catch ' + err);
}); */
/* const betterDeveloper = 'holanda';
function whoIsBetterCallback(callback, errorCallback){
  return new Promise((resolve, reject) =>{
  if(betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel'){
    reject({
      name: 'This is wrong',
      message: betterDeveloper + '? Really'
    })
  } else {
    resolve({
      name: betterDeveloper,
      message: 'CDFs are the best!'
    })
  }
});
}

whoIsBetterCallback()
  .then((result)=> {
  console.log(result.name + '? Yeah ' + result.message );
}).catch((error) =>{
  console.log(error.name + ' ' + error.message);
}); */

const ul = document.getElementById('users');
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    console.log(data);
    return data.map(function(user){
      let li = document.createElement('li');
      li.innerHTML = `${user.name} (${user.username})`;
      ul.appendChild(li);
    })
  }).catch((error)=>{
    console.log('Oops !' + error);
  })
var promise1 = Promise.resolve(1);
var promise2 = Promise.resolve(2);
var promise3 = Promise.resolve(3);
// .all() só executa o retorno da(s) promise após todas serem resolvidas.
/* Promise.all([promise1, promise2, promise3])
.then(function(values){
  console.log(values);
}) */
// .race() executa o retorno da primeira promise que for resolvida.
Promise.race([promise1, promise2, promise3])
.then(function(values){
  console.log(values);
})