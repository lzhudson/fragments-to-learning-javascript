/* const callback = (text) =>{
    console.log(text);
    console.log('holanda');
};
const delay = 2000;
setTimeout(callback, delay, 'hudson');
setTimeout(() => {
    console.log('Hudson');
    console.log('Holanda');
}, 2000); */
const bands = [
    {name: 'Iron Maiden'},
    {name: 'Megadeth'}
];
const bandList = document.getElementById('band-list');
const getBands = () =>{
    setTimeout(()=>{
        let output = '';
        bands.forEach(band => {
            console.log(band.name);
            output += `<li>${band.name}</li>`;
        });
        bandList.innerHTML = output;
    }, 1000);
}
const addBand = (name, callback) =>{
    setTimeout(()=>{
        bands.push({name});
        callback();
    }, 2000);
    
}
addBand('Queen', getBands);
