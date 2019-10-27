const fs = require('fs');


// Operações Síncronas
console.log(1);
// Operação Assíncrona
/* Callback 
fs.readFile('./ini1.txt', function(err, contents){
  console.log(4);
  console.log(err, String(contents));
  fs.readFile('./ini2.txt', (erro2, contents) =>{
    console.log(erro2, String(contents));
  })
});
*/
/* Promise */
const readFile = file => new Promise((resolve, reject) =>{
  fs.readFile(file, (err,contents) =>{
    if(err) {
      reject(err);
    } else{
      resolve(contents);
    }
  })
})
// Promisse
/*  
const promesa  = readFile('./ini1.txt')
.then(contents => {
  console.log(String(contents));
  return readFile('./ini2.txt');
}).then(contents =>{
  console.log(String(contents));
  console.log(promesa);
})
setTimeout(() => console.log(promesa), 1000);
*/

// async await - açucar sintático

const init = async() =>{
  try {
    const contents = await readFile('./ini1.txt');
    const contents2 = await readFile('./ini2.txt');
    return String (contents) + String (contents2);
  }
  catch(err){
    console.log(err);
  }
  
}
init().then(contents => console.log(contents));
console.log('init', init());
console.log(2);
console.log(3);